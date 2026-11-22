import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { brandName } from '../../brand'
import { screens } from '../../styles/screens'
import { BrandLogo } from './BrandLogo'
import { PlusIcon } from './icons/NavIcons'
import { mainNav } from './nav'
import { SiteLink } from './SiteLink'
import { rememberScrollbar } from './scrollbar'
import './MainNav.css'

type MainNavProps = {
  menuOpen: boolean
  layoutOpen: boolean
  onToggleMenu: () => void
  onNavigate: () => void
}

const desktopNav = `(min-width: ${screens.desktop}px)`

export function MainNav({ menuOpen, layoutOpen, onToggleMenu, onNavigate }: MainNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [canHover, setCanHover] = useState(false)
  const [menuScroll, setMenuScroll] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<number | null>(null)

  useLayoutEffect(() => {
    const menu = menuRef.current
    if (!layoutOpen || !menu) {
      setMenuScroll(false)
      return
    }
    rememberScrollbar()
    const overflows = menu.scrollHeight > menu.clientHeight + 1
    setMenuScroll((current) => (current === overflows ? current : overflows))
  }, [layoutOpen, openDropdown])

  useEffect(() => {
    const query = window.matchMedia(desktopNav)
    const apply = () => setCanHover(query.matches)
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!layoutOpen) setOpenDropdown(null)
  }, [layoutOpen])

  function openMenu(label: string) {
    if (!canHover) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  function scheduleClose() {
    if (!canHover) return
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 180)
  }

  return (
    <div className="bottom-nav">
      <SiteLink to="/" className="brand" aria-label={brandName}>
        <BrandLogo />
      </SiteLink>
      <button
        type="button"
        className={`menu-button ${menuOpen ? 'is-open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Menu'}
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        ref={menuRef}
        className={`nav-menu ${layoutOpen ? 'is-open' : ''} ${layoutOpen && !menuOpen ? 'is-closing' : ''} ${menuScroll ? 'has-scrollbar' : ''}`}
        aria-label="Primary"
      >
        {mainNav.map((item) => {
          const menu = Boolean(item.children || item.groups)
          return (
          <div
            key={item.label}
            className={`nav-item ${item.contact ? 'contact' : ''} ${menu ? 'has-dd' : ''}`}
            onMouseEnter={() => menu && openMenu(item.label)}
            onMouseLeave={() => menu && scheduleClose()}
          >
            <div className="nav-dd-toggle">
              {item.to ? (
                <SiteLink to={item.to} className="nav-dd-toggle-link" onClick={onNavigate}>
                  <span className="nav-dd-toggle-text">{item.label}</span>
                </SiteLink>
              ) : (
                <button
                  type="button"
                  className="nav-dd-toggle-link"
                  onClick={() =>
                    setOpenDropdown((current) => (current === item.label ? null : item.label))
                  }
                >
                  <span className="nav-dd-toggle-text">{item.label}</span>
                </button>
              )}
              {menu ? (
                <button
                  type="button"
                  className={`nav-dd-icon ${openDropdown === item.label ? 'is-open' : ''}`}
                  aria-label={`${item.label} submenu`}
                  onClick={() =>
                    setOpenDropdown((current) => (current === item.label ? null : item.label))
                  }
                >
                  <PlusIcon />
                </button>
              ) : null}
            </div>
            {item.groups ? (
              <div
                className={`nav-dd-list is-grouped ${openDropdown === item.label ? 'is-open' : ''}`}
              >
                <div className="nav-dd-sheet">
                {item.groups.map((group) => (
                  <div key={group.to} className="nav-dd-group">
                    <SiteLink
                      to={group.to}
                      className="nav-dd-group-title"
                      onClick={() => {
                        onNavigate()
                        setOpenDropdown(null)
                      }}
                    >
                      {group.label}
                    </SiteLink>
                    {group.items?.map((child) => (
                      <SiteLink
                        key={child.to}
                        to={child.to}
                        className="nav-dd-link"
                        onClick={() => {
                          onNavigate()
                          setOpenDropdown(null)
                        }}
                      >
                        {child.label}
                      </SiteLink>
                    ))}
                  </div>
                ))}
                </div>
              </div>
            ) : null}
            {item.children ? (
              <div className={`nav-dd-list ${openDropdown === item.label ? 'is-open' : ''}`}>
                <div className="nav-dd-sheet">
                {item.children.map((child) => (
                  <SiteLink
                    key={child.to}
                    to={child.to}
                    className="nav-dd-link"
                    onClick={() => {
                      onNavigate()
                      setOpenDropdown(null)
                    }}
                  >
                    {child.label}
                  </SiteLink>
                ))}
                </div>
              </div>
            ) : null}
          </div>
          )
        })}
      </nav>
    </div>
  )
}
