import { NavLink } from 'react-router-dom'

const links = [
  { to: '/news', label: 'News' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resources', label: 'Resources' },
]

function Header() {
  return (
    <header className="border-b border-line/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight text-ink">
          Maxed Out Studios
        </NavLink>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-ui text-sm transition-colors ${
                  isActive ? 'text-structure' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
