import { NavLink } from 'react-router-dom'
import './Header.css'

const routes = [
  { to: '/', label: 'Landing', end: true },
  { to: '/story', label: 'Story' },
  { to: '/reach', label: 'Reach' },
  { to: '/catalog', label: 'Catalog' },
  { to: '/history', label: 'History' },
  { to: '/overview', label: 'Overview' },
  { to: '/account', label: 'Account' },
  { to: '/preferences', label: 'Preferences' },
  { to: '/signin', label: 'Sign in' },
]

const Header = () => {
  return (
    <header className="header">
      <span className="header-mark">Chapter</span>
      <ul className="header-nav">
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              end={route.end}
              className={({ isActive }) =>
                isActive ? 'header-link header-link-active' : 'header-link'
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
