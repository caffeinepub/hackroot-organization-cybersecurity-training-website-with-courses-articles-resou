export default function HeroCodeLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="code-line code-line-1">
        <span className="text-cyber-accent">const</span> security = <span className="text-cyber-highlight">await</span> learn();
      </div>
      <div className="code-line code-line-2">
        <span className="text-cyber-accent">function</span> hackEthically() {'{'} <span className="text-cyber-highlight">return</span> true; {'}'}
      </div>
      <div className="code-line code-line-3">
        <span className="text-cyber-accent">if</span> (skills.level {'>'} 0) train();
      </div>
    </div>
  );
}
