import { brandFull } from './brand'
import { mainNav } from './components/site-header/nav'

const titles: Record<string, string> = {
  '/': brandFull,
  '/about': 'About us',
  '/projects': 'Project Gallery',
  '/blog': 'Notes from the grounds',
  '/contact': 'Contact',
}

for (const item of mainNav) {
  if (item.to) titles[item.to] ??= item.label
  for (const child of item.children ?? []) titles[child.to] ??= child.label
  for (const group of item.groups ?? []) {
    titles[group.to] ??= group.label
    for (const link of group.items ?? []) titles[link.to] ??= link.label
  }
}

function fromSlug(pathname: string) {
  const part = pathname.split('/').filter(Boolean).at(-1) ?? ''
  if (!part) return ''
  return part
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function documentTitle(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  if (/^\/projects\/[^/]+$/.test(path) || /^\/blog\/[^/]+$/.test(path)) return null
  return titles[path] || fromSlug(path) || brandFull
}
