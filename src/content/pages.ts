import { mainNav } from '../components/site-header/nav'

export type StaticPageContent = {
  wash: string
  title: string
  image: string
  subtitle?: string
  heading: string
  paragraphs: string[]
  imageSide?: string
}

const photos = [
  '/home/mission.webp',
  '/home/invite.webp',
  '/home/seasons.webp',
  '/home/pool-deck.webp',
  '/home/bleed.webp',
  '/home/services/landscapes.jpg',
  '/home/services/pools.jpg',
  '/home/services/hardscapes.jpg',
  '/home/services/outdoor.jpg',
]

function servicePage(
  path: string,
  label: string,
  group: string,
  index: number,
): [string, StaticPageContent] {
  return [
    path,
    {
      wash: group,
      title: label,
      image: photos[index % photos.length],
      heading: label,
      imageSide: photos[(index + 3) % photos.length],
      paragraphs: [
        `${label} at Elmsworth Studio is planned with the rest of the grounds, not bolted on after the fact.`,
        'We walk the site, set a scope you can live with, and stay through planting and care so the work still looks like itself a year later.',
      ],
    },
  ]
}

const designBuild = mainNav.find((item) => item.to === '/design-build')
const maintenance = mainNav.find((item) => item.to === '/maintenance')

const serviceEntries = [
  ...(designBuild?.children ?? []).map((child, index) =>
    servicePage(child.to.slice(1), child.label, 'Design-Build', index),
  ),
  ...(maintenance?.children ?? []).map((child, index) =>
    servicePage(child.to.slice(1), child.label, 'Maintenance', index + 4),
  ),
]

export const staticPages: Record<string, StaticPageContent> = {
  ...Object.fromEntries(serviceEntries),
}

export function findStaticPage(path: string) {
  return staticPages[path.replace(/^\/+/, '')]
}
