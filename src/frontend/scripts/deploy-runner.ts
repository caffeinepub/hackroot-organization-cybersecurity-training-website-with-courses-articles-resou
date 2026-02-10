#!/usr/bin/env node
/**
 * Deployment runner with structured error reporting and retry logic
 * Executes deployment steps with clear labels and actionable error output
 */

import { spawn } from 'child_process';
import { retryWithBackoff } from './retry';

interface DeployStep {
  name: string;
  command: string;
  args: string[];
  cwd?: string;
  retryable: boolean;
  maxAttempts?: number;
}

const DEPLOY_STEPS: DeployStep[] = [
  {
    name: 'Generate backend bindings',
    command: 'dfx',
    args: ['generate', 'backend'],
    retryable: true,
    maxAttempts: 3,
  },
  {
    name: 'Build frontend',
    command: 'npm',
    args: ['run', 'build:skip-bindings'],
    cwd: './frontend',
    retryable: false,
  },
  {
    name: 'Deploy canisters',
    command: 'dfx',
    args: ['deploy'],
    retryable: true,
    maxAttempts: 3,
  },
];

function redactSecrets(text: string): string {
  // Redact common secret patterns
  return text
    .replace(/([a-zA-Z0-9_-]{20,})/g, (match) => {
      // Don't redact common words or paths
      if (match.includes('/') || match.includes('.')) return match;
      return match.slice(0, 4) + '***' + match.slice(-4);
    })
    .replace(/(token|key|secret|password)[\s:=]+[^\s]+/gi, '$1=***REDACTED***');
}

async function executeCommand(
  command: string,
  args: string[],
  cwd?: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd: cwd || process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    proc.on('error', (error) => {
      reject(new Error(`Failed to execute ${command}: ${error.message}`));
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

async function executeStep(step: DeployStep): Promise<void> {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📦 ${step.name}`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Command: ${step.command} ${step.args.join(' ')}`);
  if (step.cwd) {
    console.log(`Working directory: ${step.cwd}`);
  }
  console.log('');

  const operation = () => executeCommand(step.command, step.args, step.cwd);

  if (step.retryable && step.maxAttempts && step.maxAttempts > 1) {
    await retryWithBackoff(operation, {
      maxAttempts: step.maxAttempts,
      operationName: step.name,
      initialDelayMs: 2000,
      maxDelayMs: 10000,
    });
  } else {
    try {
      await operation();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`\n❌ Step failed: ${step.name}`);
      console.error(`Error: ${redactSecrets(errorMessage)}`);
      if (error instanceof Error && error.stack) {
        console.error('\nStack trace:');
        console.error(redactSecrets(error.stack));
      }
      throw error;
    }
  }

  console.log(`✓ ${step.name} completed successfully\n`);
}

async function main() {
  console.log('\n🚀 Starting deployment process...\n');
  const startTime = Date.now();

  try {
    for (const step of DEPLOY_STEPS) {
      await executeStep(step);
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('\n' + '='.repeat(60));
    console.log('✅ DEPLOYMENT SUCCESSFUL');
    console.log('='.repeat(60));
    console.log(`Total time: ${duration}s`);
    console.log('');
    
    process.exit(0);
  } catch (error) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.error('\n' + '='.repeat(60));
    console.error('❌ DEPLOYMENT FAILED');
    console.error('='.repeat(60));
    console.error(`Total time: ${duration}s`);
    
    if (error instanceof Error) {
      console.error(`\nFinal error: ${redactSecrets(error.message)}`);
    }
    
    console.error('\n💡 Troubleshooting:');
    console.error('  • Check DEPLOYMENT_TROUBLESHOOTING.md for common issues');
    console.error('  • Verify dfx is running: dfx start --background');
    console.error('  • Check network connectivity');
    console.error('  • Review error messages above for specific issues');
    console.error('');
    
    process.exit(1);
  }
}

// Handle unhandled rejections
process.on('unhandledRejection', (reason) => {
  console.error('\n❌ Unhandled rejection during deployment:');
  console.error(reason);
  process.exit(1);
});

main();
