import { NavLink } from 'react-router-dom'
import logo from '../../assets/MOS100.png'

const links = [
  { to: '/news', label: 'News' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resources', label: 'Resources' },
]

function Header() {
  return (
    <header className="border-b border-line/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="shrink-0">
          <img
            src={logo}
            alt="Maxed Out Studios"
            className="h-8 w-36 object-cover md:h-10 md:w-52"
          />
        </NavLink>
        <nav className="flex shrink-0 items-center gap-4 md:gap-8">
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
