import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import './Popup.css'

type PopupPayload = {
  label: string
  content: ReactNode
  plain?: boolean
}

type PopupApi = {
  open: (payload: PopupPayload) => void
  close: () => void
}

const PopupContext = createContext<PopupApi | null>(null)

export function usePopup() {
  const api = useContext(PopupContext)
  if (!api) {
    throw new Error('usePopup must be used inside PopupProvider')
  }
  return api
}

export function PopupProvider({ children }: { children: ReactNode }) {
  const [payload, setPayload] = useState<PopupPayload | null>(null)
  const [visible, setVisible] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const locked = useRef(false)

  const lockScroll = useCallback(() => {
    if (locked.current) return
    const root = document.documentElement
    const gap = Math.max(0, window.innerWidth - root.clientWidth)
    root.style.setProperty('--popup-gap', `${gap}px`)
    root.classList.add('popup-lock')
    locked.current = true
  }, [])

  const unlockScroll = useCallback(() => {
    if (!locked.current) return
    const root = document.documentElement
    root.classList.remove('popup-lock')
    root.style.removeProperty('--popup-gap')
    locked.current = false
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
    }
    closeTimer.current = window.setTimeout(() => {
      unlockScroll()
      setPayload(null)
      closeTimer.current = null
    }, 380)
  }, [unlockScroll])

  const open = useCallback((next: PopupPayload) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    lockScroll()
    setPayload(next)
    setVisible(false)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setVisible(true))
    })
  }, [lockScroll])

  useEffect(() => {
    return () => unlockScroll()
  }, [unlockScroll])

  useEffect(() => {
    if (!payload) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [payload, close])

  return (
    <PopupContext.Provider value={{ open, close }}>
      {children}
      {payload ? (
        <div
          className={
            payload.plain
              ? visible
                ? 'popup is-plain is-open'
                : 'popup is-plain'
              : visible
                ? 'popup is-open'
                : 'popup'
          }
          role="dialog"
          aria-modal="true"
          aria-label={payload.label}
        >
          <button
            type="button"
            className="popup-backdrop"
            aria-label="Close"
            onClick={close}
          />
          <div className="popup-panel">
            {payload.plain ? null : (
              <button type="button" className="popup-close" aria-label="Close" onClick={close}>
                ×
              </button>
            )}
            {payload.content}
          </div>
        </div>
      ) : null}
    </PopupContext.Provider>
  )
}
