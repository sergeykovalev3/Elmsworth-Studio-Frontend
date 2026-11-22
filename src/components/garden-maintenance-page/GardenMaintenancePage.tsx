import { CloseBand } from '../close-band/CloseBand'
import { SiteLink } from '../site-header/SiteLink'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { FaqBlock } from '../faq-block/FaqBlock'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeConsult } from '../home-consult/HomeConsult'
import './GardenMaintenancePage.css'

const steps = [
  'Mowing',
  'Garden care and weeding',
  'Pruning and hedge trimming',
  'Turf feeding, weeds, and pests',
  'Tree and shrub care',
  'Spring mulch and cleanup',
  'Core aeration and overseeding',
  'Leaf cleanup',
  'Irrigation start-up, winterizing, and service',
  'Seasonal flower displays',
  'Outdoor lighting',
  'Pool, spa, and water feature care',
]

const questions = [
  {
    title: 'A crew that stays',
    body: 'The same people come back through the year. They already know the beds, the edges, and what this garden needs next.',
  },
  {
    title: 'Fitted to the garden',
    body: 'The visit list follows this planting, not a package written for a different yard.',
  },
  {
    title: 'A sequence you can see',
    body: 'Mowing, pruning, mulch, and the seasonal work happen in an order the plants can live with.',
  },
  {
    title: 'Care that can last',
    body: 'Water, soil, and planting stay in one plan, so the garden holds its shape without being rebuilt each spring.',
  },
]

const offers = [
  {
    title: 'Mowing',
    text: 'The lawn cut on a steady rhythm, so the ground plane stays even.',
    image: '/maintenance/svc-1.jpg',
    icon: '/design-build/icon-outdoor.svg',
  },
  {
    title: 'Garden care and weeding',
    text: 'Beds kept clear so the plants, not the weeds, hold the season.',
    image: '/maintenance/svc-2.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Feeding and pests',
    text: 'Feeding and pest work aimed at the plants that need it.',
    image: '/maintenance/svc-3.jpg',
    icon: '/seasonal/icon-pests.svg',
  },
  {
    title: 'Pruning and hedging',
    text: 'Hedges and shrubs shaped so the lines of the garden stay readable.',
    image: '/maintenance/svc-4.jpg',
    icon: '/design-build/icon-shield.svg',
  },
  {
    title: 'Turf and ornamentals',
    text: 'Lawn care set with the ornamental beds, through the seasons.',
    image: '/maintenance/mid.png',
    icon: '/design-build/icon-star.svg',
  },
  {
    title: 'Leaf removal',
    text: 'Leaves cleared so paths, beds, and lawn stay open.',
    image: '/home/services/landscapes.jpg',
    icon: '/seasonal/icon-flowers.svg',
  },
  {
    title: 'Irrigation',
    text: 'The watering system checked so it runs where the planting needs it.',
    image: '/pools/offer-2.jpg',
    icon: '/commercial/icon-water.svg',
  },
  {
    title: 'Spring mulch and cleanup',
    text: 'A spring pass: beds cleared, mulch renewed, the garden ready to grow.',
    image: '/landscapes/side.jpg',
    icon: '/seasonal/icon-snow.svg',
  },
  {
    title: 'Aeration and overseeding',
    text: 'The lawn opened and seeded so it thickens instead of thinning out.',
    image: '/home/services/maintenance.jpg',
    icon: '/design-build/icon-soil.svg',
  },
  {
    title: 'Seasonal flowers',
    text: 'Flower displays changed with the season, set into the beds already there.',
    image: '/theme-gardens/offer-1.jpg',
    icon: '/seasonal/icon-flowers.svg',
  },
  {
    title: 'Outdoor lighting',
    text: 'Path and garden lights checked so evenings stay readable.',
    icon: '/lighting/icon-care.svg',
  },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function YearMark({ name }: { name: string }) {
  const box = { viewBox: '0 0 32 32', 'aria-hidden': true as const }
  if (name === 'shears') {
    return (
      <svg {...box}>
        <path d="M8 18.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 2.6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
        <path d="M24 18.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 2.6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
        <path d="M12.2 17.4 20.6 6.4c.7-.9.2-2.2-.9-2.4l-1.6-.3c-1.1-.2-2 .7-1.8 1.8l.6 3.4-6.8 8.2 2.1.3Z" />
        <path d="M19.8 17.4 11.4 6.4c-.7-.9-.2-2.2.9-2.4l1.6-.3c1.1-.2 2 .7 1.8 1.8l-.6 3.4 6.8 8.2-2.1.3Z" />
      </svg>
    )
  }
  if (name === 'mower') {
    return (
      <svg {...box}>
        <path d="M3.5 18.2h14.8l2.6-6.4h6.6v3.6h-4.2l-.8 2.8H3.5V18.2Z" />
        <path d="M7.4 6.4h2.8v5.6H7.4z" />
        <path d="M9.2 23.6a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Zm0-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        <path d="M20.4 23.6a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Zm0-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>
    )
  }
  if (name === 'grass') {
    return (
      <svg {...box}>
        <path d="M16 27c-1-6 1.2-11 5.4-15.2C18.6 14 17.2 18 17.6 23 20 19.4 23.4 17.6 27 17.2 23.2 21 19.4 24.2 16 27Z" />
        <path d="M16 27c1-6-1.2-11-5.4-15.2C13.4 14 14.8 18 14.4 23 12 19.4 8.6 17.6 5 17.2 8.8 21 12.6 24.2 16 27Z" />
        <path d="M14.6 27c.2-5 2.2-9 5.6-12.2-2.2 1.2-3.6 4.2-3.8 8.4-.6-2.2-.4-4.6.6-6.8C15.2 19 14.2 22.4 14.6 27Z" />
      </svg>
    )
  }
  if (name === 'shrub') {
    return (
      <svg {...box}>
        <path d="M14.2 28V18.4h3.6V28h-3.6Z" />
        <circle cx="16" cy="10.2" r="5.4" />
        <circle cx="8.8" cy="16.4" r="4.6" />
        <circle cx="23.2" cy="16.4" r="4.6" />
      </svg>
    )
  }
  if (name === 'barrow') {
    return (
      <svg {...box}>
        <path d="M3.2 20.4 8.6 10h12.2l4.6 10.4H3.2Z" />
        <path d="M6.2 10.2 2.4 19.2h3.2l3.2-7.2-2.6-1.8Z" />
        <path d="M22.6 25.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Zm0-2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z" />
      </svg>
    )
  }
  if (name === 'seed') {
    return (
      <svg {...box}>
        <path d="M20.4 4.2c.8 0 1.4.8 1.1 1.6-1.6 4.2-2.2 7.4-.6 10.6 1.2-3.2 3.6-5.2 6.1-6.2-.2.8-1 1.4-1.8 1.4-2.2.2-4.2 1.6-5.4 4.2 2.4-.2 4.6.6 6.2 2.2-1 .6-2.2.6-3.2 0-1.6 2-2.2 4.4-1.4 6.8-1.6-1.4-2.2-3.4-1.6-5.6-1.2 2.4-1.2 4.8 0 7-1.4-2-1.6-4.4-.4-6.8C17.8 16.6 16.6 12 16.8 6.6c0-1.2 1-2.4 2.2-2.4h1.4Z" />
      </svg>
    )
  }
  if (name === 'leaf') {
    return (
      <svg {...box}>
        <path d="M6.4 23.2C13.6 22.4 21.2 17.6 26.4 6.8 16.2 7.6 9.2 14.2 6.4 23.2Z" />
        <path d="M9.2 20.6c4.2-2.6 8.2-4.2 12.4-4.8-.2 1.6-2.2 2.8-4.6 3.6 2 .2 4.2.8 6 1.8-2.4.2-4.6 1-6.6 2.2 1.2-.8 2.6-1.2 4.2-1.4-3.2 1.6-6.2 2.2-8.8 1.6 1.4-1 3-1.8 4.8-2.2-2.6.2-4.8.8-6.6 1.6.8-.8 1.6-1.4 2.2-1.8Z" fill="var(--carnation)" />
      </svg>
    )
  }
  if (name === 'hose') {
    return (
      <svg {...box}>
        <path d="M11 24.2a7.2 7.2 0 1 1 0-14.4h6.4v3.4H11a3.8 3.8 0 1 0 0 7.6h2.2v3.4H11Z" />
        <path d="M16.2 7.2h6.2v7.2h-6.2z" />
        <path d="M21.2 9.4h6.4v2.8h-6.4z" />
      </svg>
    )
  }
  if (name === 'flower') {
    return (
      <svg {...box}>
        <circle cx="16" cy="11.2" r="2.6" />
        <circle cx="16" cy="5.4" r="3" />
        <circle cx="21.4" cy="8.6" r="3" />
        <circle cx="10.6" cy="8.6" r="3" />
        <circle cx="20.2" cy="14.4" r="2.8" />
        <circle cx="11.8" cy="14.4" r="2.8" />
        <path d="M14.4 15.6h3.2V28h-3.2z" />
        <path d="M17.2 21.2c2.6.6 4.4 2 5.2 3.8-2-.2-3.8-1.2-5.2-2.6v-1.2Z" />
      </svg>
    )
  }
  if (name === 'lamp') {
    return (
      <svg {...box}>
        <path d="M8.4 19.6 12.2 8.4h7.6l3.8 11.2H8.4Z" />
        <path d="M14.2 19.6h3.6V24h-3.6z" />
        <path d="M11.2 24h9.6v2.4h-9.6z" />
        <path d="M14.6 8.4V4.2h2.8v4.2h-2.8Z" />
      </svg>
    )
  }
  return (
    <svg {...box}>
      <path d="M16 2.8 18.2 9l6.4.6-4.8 4.2 1.5 6.2L16 16.8l-5.3 3.2 1.5-6.2L7.4 9.6 13.8 9 16 2.8Z" />
      <path d="M7.2 19.2 8.6 22.4l3.4.3-2.6 2.2.8 3.4-3-1.8-3 1.8.8-3.4-2.6-2.2 3.4-.3 1.4-3.2Z" />
      <path d="M23.6 17.6 24.8 20.4l3 .2-2.2 2 .6 3-2.6-1.6-2.6 1.6.6-3-2.2-2 3-.2 1.2-2.8Z" />
    </svg>
  )
}

const yearRows: { label: string; mark: string; months: boolean[] }[] = [
  { label: 'Garden care', mark: 'shears', months: Array(12).fill(true) },
  { label: 'Mowing', mark: 'mower', months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0].map(Boolean) },
  { label: 'Turf and weeds', mark: 'grass', months: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0].map(Boolean) },
  { label: 'Trees and shrubs', mark: 'shrub', months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0].map(Boolean) },
  { label: 'Spring mulch', mark: 'barrow', months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0].map(Boolean) },
  { label: 'Aeration and seed', mark: 'seed', months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0].map(Boolean) },
  { label: 'Leaf cleanup', mark: 'leaf', months: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1].map(Boolean) },
  { label: 'Irrigation', mark: 'hose', months: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1].map(Boolean) },
  { label: 'Seasonal flowers', mark: 'flower', months: [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0].map(Boolean) },
  { label: 'Outdoor lighting', mark: 'lamp', months: Array(12).fill(true) },
  { label: 'Snow and ice', mark: 'snow', months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1].map(Boolean) },
]

export function GardenMaintenancePage() {
  return (
    <main>
      <CoverBlock
        image="/maintenance/cover.png"
        wash="maintenance"
        title="Garden maintenance"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/maintenance/side.png"
        imageAlt="Garden beds kept along a house"
        title="Garden maintenance"
        action={{ label: 'Learn More', to: '/contact' }}
      >
        <p>
          Elmsworth Studio keeps the garden that was planted to be lived with.
          Visits follow the beds, the lawn, and the edges, so the place still
          matches the plan a season later.
        </p>
        <p>
          The work is for this property: what gets cut, what gets fed, and
          what is left to grow.
        </p>
      </IntroSplit>

      <section className="gm-visits">
        <div>
          <h2>How the visits run</h2>
          <p>
            One crew, one list. These are the jobs that come around on this
            garden.
          </p>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <SiteLink to="/contact" className="gm-button">
            <span>Contact Us</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
        <div className="gm-visits-photo">
          <img src="/home/seasons.webp" alt="Garden through the growing season" />
        </div>
      </section>

      <section className="gm-year">
        <h2>Maintenance through the year</h2>
        <div className="gm-chart" role="img" aria-label="Which garden jobs run in each month">
          <div className="gm-chart-head">
            <span />
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
          {yearRows.map((row, index) => (
            <div
              key={row.label}
              className={index % 2 === 0 ? 'gm-chart-row is-deep' : 'gm-chart-row'}
            >
              <span>{row.label}</span>
              {row.months.map((on, month) => (
                <span key={months[month]}>{on ? <YearMark name={row.mark} /> : null}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <FaqBlock
        title="Why the garden stays with the studio"
        image="/maintenance/svc-1.jpg"
        items={questions}
        plain
      />

      <PhotoCards title="What the garden visits cover" items={offers} iconFirst />

      <img className="gm-bottom" src="/home/bleed.webp" alt="" />

      <HomeConsult />

      <CloseBand title="A garden that holds">
        Beds, lawn, and edges kept through the year, so the garden stays planted and ready to use.
      </CloseBand>
    </main>
  )
}
