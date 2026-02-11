import './App.css'

const navItems = ['Home', 'Players', 'Teams', 'Draft', 'League']

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">1970 Fantasy Football</header>
      <div className="app-layout">
        <aside className="sidebar" aria-label="Main navigation">
          <nav>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <h1>Choose a season</h1>
          <label htmlFor="season-select" className="season-label">
            Season
          </label>
          <select id="season-select" name="season" defaultValue="1970">
            <option value="1970">1970</option>
          </select>
        </main>
      </div>
    </div>
  )
}

export default App
