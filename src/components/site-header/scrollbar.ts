export function rememberScrollbar() {
  const probe = document.createElement('div')
  probe.style.cssText = 'position:absolute;left:-9999px;width:100px;height:100px;overflow:scroll;'
  document.documentElement.appendChild(probe)
  const size = probe.offsetWidth - probe.clientWidth
  probe.remove()
  document.documentElement.style.setProperty('--scrollbar', `${size}px`)
}
