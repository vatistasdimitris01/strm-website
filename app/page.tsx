'use client'

export default function Home() {
  const copyCmd = () => {
    navigator.clipboard.writeText('curl -fsSL https://strm.sh/install.sh | bash')
  }

  return (
    <div className="container">
      <div className="logo">STRM</div>
      <p className="tagline">
        Search any movie or series from your terminal.<br />
        Type a name. Pick a result. Watch instantly.
      </p>

      <div className="install-box">
        <div className="install-label">Install</div>
        <div className="install-cmd" onClick={copyCmd} title="Click to copy">
          <span className="prompt">$ </span>curl -fsSL https://strm.sh/install.sh | bash
        </div>
      </div>

      <div className="links">
        <a href="https://github.com/vatistasdimitris01/STRM" target="_blank" rel="noopener">GitHub</a>
      </div>

      <div className="footer">STRM</div>
    </div>
  )
}
