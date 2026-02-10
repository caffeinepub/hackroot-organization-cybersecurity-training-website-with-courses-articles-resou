# Deployment Troubleshooting Guide

This document provides guidance for diagnosing and resolving deployment failures in the Hackroot Organization training platform.

## What Changed

### Root Cause
The deployment was failing due to missing or misconfigured build configuration files required by Vite and TypeScript. Specifically:
- Missing `vite.config.ts` with proper path alias resolution
- Missing `tsconfig.json` with correct module resolution settings
- No structured error reporting during deployment failures
- No retry logic for transient network failures

### Files Added/Modified
1. **`frontend/vite.config.ts`** - Vite build configuration with:
   - React plugin setup
   - Path alias (`@/*` → `./src/*`) for imports
   - Environment variable injection for canister IDs
   - Build optimization and chunking strategy

2. **`frontend/tsconfig.json`** - TypeScript configuration with:
   - Path mapping aligned with Vite alias
   - Strict type checking enabled
   - Modern ES2020 target and module resolution

3. **`frontend/tsconfig.node.json`** - TypeScript config for build scripts

4. **`frontend/scripts/retry.ts`** - Reusable retry helper with:
   - Exponential backoff (1s → 2s → 4s → ...)
   - Maximum delay cap (30s)
   - Clear logging for each attempt
   - Actionable error messages on final failure

5. **`frontend/scripts/deploy-runner.ts`** - Deployment orchestration with:
   - Structured step execution (generate bindings → build → deploy)
   - Automatic retries for network-dependent steps
   - Secret redaction in error output
   - Clear success/failure reporting

## How to Verify Locally

### Prerequisites
