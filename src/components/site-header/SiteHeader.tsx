import { useEffect, useLayoutEffect, useState } from 'react'
import { screens } from '../../styles/screens'
import { MainNav } from './MainNav'
import { rememberScrollbar } from './scrollbar'
import './SiteHeader.css'

const desktopNav = `(min-width: ${screens.desktop}px)`

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [held, setHeld] = useState(false)

  useLayoutEffect(() => {
    if (menuOpen) setHeld(true)
  }, [menuOpen])

  useLayoutEffect(() => {
    const root = document.documentElement
    rememberScrollbar()
    const desktop = window.matchMedia(desktopNav).matches
    if (!held || desktop) return

    const bar = document.querySelector('.bottom-nav')
    root.style.setProperty('--nav-bar', `${bar?.getBoundingClientRect().height ?? 0}px`)
    root.classList.add('nav-lock')

    return () => {
      root.classList.remove('nav-lock')
      root.style.removeProperty('--nav-bar')
    }
  }, [held])

  useEffect(() => {
    if (menuOpen || !held) return
    const menu = document.querySelector('.nav-menu')
    let done = false
    const finish = (event?: Event) => {
      if (done) return
      if (event instanceof TransitionEvent && event.propertyName !== 'opacity') return
      done = true
      setHeld(false)
    }
    menu?.addEventListener('transitionend', finish)
    const timer = window.setTimeout(() => finish(), 500)
    return () => {
      menu?.removeEventListener('transitionend', finish)
      window.clearTimeout(timer)
    }
  }, [menuOpen, held])

  useEffect(() => {
    const query = window.matchMedia(desktopNav)

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    function onResize() {
      if (query.matches) setMenuOpen(false)
    }

    if (!menuOpen || query.matches) return

    window.addEventListener('keydown', onKey)
    query.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      query.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  return (
    <header className={`site-nav ${held ? 'is-open' : ''}`}>
      <MainNav
        menuOpen={menuOpen}
        layoutOpen={held}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  )
}
