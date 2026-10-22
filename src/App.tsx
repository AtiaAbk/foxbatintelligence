import './App.css';

function App() {
  const handleTestClick = () => {
    alert('Cloudflare Pages deployment test successful! Foxbat Intelligence is ready.');
  };

  return (
    <main className="container">
      <div className="card">
        <div className="badge">
          <span className="badge-dot"></span>
          Deployment Ready
        </div>
        <h1 className="title">Foxbat Intelligence</h1>
        <p className="subtitle">Cloudflare Pages Deployment Test</p>
        <p className="description">
          A lightweight responsive test page to verify build output and test Cloudflare Pages hosting.
        </p>
        <div className="actions">
          <button type="button" className="test-btn" onClick={handleTestClick}>
            Test Successful
          </button>
        </div>
        <div className="meta-grid">
          <div className="meta-item">
            <span className="meta-label">Build Engine</span>
            <span className="meta-value">Vite + React 19</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Type Safety</span>
            <span className="meta-value">TypeScript</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Host Target</span>
            <span className="meta-value">Cloudflare Pages</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
