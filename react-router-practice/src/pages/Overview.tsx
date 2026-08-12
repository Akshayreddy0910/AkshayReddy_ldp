const Overview = () => {
  return (
    <section className="view">
      <h1>Overview</h1>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-value">312</span>
          <span className="stat-label">Purchases</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">67</span>
          <span className="stat-label">Titles</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">$5.9k</span>
          <span className="stat-label">Revenue</span>
        </div>
      </div>
    </section>
  )
}

export default Overview
