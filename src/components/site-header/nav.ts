export type NavLink = {
  label: string
  to: string
}

export type NavGroup = {
  label: string
  to: string
  items?: NavLink[]
}

export type NavItem = {
  label: string
  to?: string
  contact?: boolean
  children?: NavLink[]
  groups?: NavGroup[]
}

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Houzz', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const

export const mainNav: NavItem[] = [
  {
    label: 'Design-Build',
    to: '/design-build',
    groups: [
      {
        label: 'Landscapes',
        to: '/design-build/landscapes',
        items: [
          { label: 'Maintenance', to: '/design-build/maintenance' },
          { label: 'Landscape Architecture', to: '/design-build/landscape-architecture' },
          {
            label: 'Theme Gardens, Privacy & Specimens',
            to: '/design-build/theme-gardens-privacy-plantings-specimen-plantings',
          },
        ],
      },
      {
        label: 'Hardscapes',
        to: '/design-build/hardscapes',
        items: [
          {
            label: 'Pavilions, Decks, Porches & Pergolas',
            to: '/design-build/pavilions-decks-porches-pergolas',
          },
          {
            label: 'Patios, Walls & Walkways',
            to: '/design-build/patios-retaining-walls-walkways',
          },
        ],
      },
      {
        label: 'Outdoor Living',
        to: '/design-build/outdoor-living-spaces',
        items: [
          {
            label: 'Kitchens & Grilling',
            to: '/design-build/kitchens-barbecues-grilling-stations',
          },
          { label: 'Fireplaces & Fire Pits', to: '/design-build/fireplaces-fire-pits' },
          { label: 'Outdoor Lighting', to: '/design-build/outdoor-lighting' },
        ],
      },
      {
        label: 'Pools & Water',
        to: '/design-build/pools-water-features',
      },
      {
        label: 'Seasonal Services',
        to: '/design-build/seasonal-services',
      },
      {
        label: 'Commercial',
        to: '/design-build/commercial',
      },
    ],
  },
  {
    label: 'Maintenance',
    to: '/maintenance',
    groups: [
      {
        label: 'Gardens',
        to: '/maintenance/landscape-maintenance-services',
        items: [
          { label: 'Garden Maintenance', to: '/maintenance/garden-maintenance' },
          {
            label: 'Turf, Ornamental, & Insect Care',
            to: '/maintenance/turf-ornamental-insect-care',
          },
          { label: 'Seasonal Flower Displays', to: '/maintenance/seasonal-flower-displays' },
        ],
      },
      {
        label: 'Water',
        to: '/maintenance/irrigation-water-management',
        items: [
          { label: 'Water Feature Care', to: '/maintenance/water-feature-care' },
        ],
      },
      {
        label: 'Outdoor Lighting',
        to: '/maintenance/outdoor-lighting-maintenance',
      },
      {
        label: 'Pest Control',
        to: '/maintenance/mosquito-flea-tick-control',
      },
      {
        label: 'Commercial',
        to: '/maintenance/commercial',
      },
      {
        label: 'Snow & Ice',
        to: '/maintenance/snow-ice-management',
      },
    ],
  },
  {
    label: 'Portfolio',
    to: '/projects',
    children: [
      { label: 'Project Gallery', to: '/projects' },
      { label: 'Commercial', to: '/portfolio/commercial' },
      { label: 'Lighting', to: '/portfolio/lighting' },
      { label: 'Pools & Water Features', to: '/portfolio/pools-water-features' },
      { label: 'Hardscapes', to: '/portfolio/hardscapes' },
      { label: 'Landscapes', to: '/portfolio/landscapes' },
    ],
  },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Team and Community', to: '/team-and-community' },
      { label: 'Sustainable Landscaping', to: '/sustainable-landscaping' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact', contact: true },
]
