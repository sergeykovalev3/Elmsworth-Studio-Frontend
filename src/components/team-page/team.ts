export type Person = {
  name: string
  role: string
  photo: string
  bio: string[]
}

export const slides = Array.from({ length: 20 }, (_, index) => {
  const n = String(index + 1).padStart(2, '0')
  return `/about/slides/${n}.png`
})

export const groups: { title: string; people: Person[] }[] = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Owen Hale',
        role: 'Founder & Head Honcho',
        photo: '/about/people/lead-1.jpg',
        bio: [
          'Owen started with one pond in the backyard and kept rebuilding it until the water looked right. That habit turned into a studio.',
          'He still walks jobs, still argues for the planting, and still ends most weeks somewhere near a pond with a cold drink.',
          'Favorite plant: Tiger Eyes sumac',
        ],
      },
      {
        name: 'Miles Kerr',
        role: 'Integrator',
        photo: '/about/people/lead-2.jpg',
        bio: [
          'Miles came from a desk job and stayed because the numbers and the crews had to meet somewhere.',
          'He keeps sales, the yard, and the books speaking the same language so the work can stay calm.',
          'Favorite plant: succulents',
        ],
      },
    ],
  },
  {
    title: 'Sales Team',
    people: [
      {
        name: 'Lena Hart',
        role: 'Director of Sales',
        photo: '/about/people/sales-1.png',
        bio: [
          'Lena left a sales floor to raise a family, then came back when the youngest started school.',
          'She is the person to call when a proposal needs a straight answer.',
          'Favorite plant: gerbera daisy',
        ],
      },
      {
        name: 'Nora Pell',
        role: 'Senior Design & Sales Consultant',
        photo: '/about/people/sales-2.png',
        bio: [
          'Nora studied horticulture and small-business management, then spent years running enhancements before leading design.',
          'She is often the first person you meet, and she stays with the plan until it fits the site and the budget.',
          'Favorite plant: annuals and tropicals',
        ],
      },
      {
        name: 'Evan Crowe',
        role: 'Senior Landscape Architect, PLA',
        photo: '/about/people/sales-3.jpg',
        bio: [
          'Evan plans sites that have to work with stone, water, and planting at once.',
          'He learned the trades by standing next to masons and carpenters, then brought that into the drawings.',
          'Favorite plant: willow-leaved sunflower',
        ],
      },
      {
        name: 'Mara Voss',
        role: 'Designer & Sales Support',
        photo: '/about/people/sales-4.webp',
        bio: [
          'Mara trained in landscape architecture and likes the part where a sketch becomes a place you can walk.',
          'She supports projects from the first meeting through the last plant.',
          'Favorite plants: bird of paradise and water lily',
        ],
      },
      {
        name: 'Samir Cole',
        role: 'Client Relationship Manager',
        photo: '/about/people/sales-5.jpg',
        bio: [
          'Samir studied environmental horticulture and still talks about plants the way other people talk about teams.',
          'He keeps clients clear on what is happening in the garden and why.',
          'Favorite plant: southern magnolia',
        ],
      },
      {
        name: 'Ivy Lang',
        role: 'Client Relationship Manager',
        photo: '/about/people/sales-6.jpg',
        bio: [
          'Ivy grew up helping in a family garden and later worked in nurseries, farms, and public beds.',
          'She looks after existing clients so the landscape keeps the shape it was drawn for.',
          'Favorite plants: monkshood and willow-leaved sunflower',
        ],
      },
      {
        name: 'Helen Cho',
        role: 'Client Relationship Manager',
        photo: '/about/people/sales-7.jpg',
        bio: [
          'Helen came from growing benches and public gardens, so she reads a bed as a living system.',
          'She helps clients decide what should stay, what should go, and what can wait a season.',
          'Favorite plant: Philodendron patriciae',
        ],
      },
    ],
  },
  {
    title: 'Operations Team',
    people: [
      {
        name: 'Cole Brennan',
        role: 'Landscape Operations Manager',
        photo: '/about/people/ops-1.png',
        bio: [
          'Cole has been building landscapes since he left a desk degree behind.',
          'He treats a bare yard like a canvas and stays with the crew until the edges are clean.',
          'Favorite plant: southern live oak',
        ],
      },
      {
        name: 'Theo Marsh',
        role: 'Project Manager',
        photo: '/about/people/ops-2.webp',
        bio: [
          'Theo runs jobs from the first stake to the last walkthrough.',
          'He keeps clients and crews on the same schedule, and he still hikes when the week ends.',
          'Favorite plant: Carex pensylvanica',
        ],
      },
      {
        name: 'Willa Grant',
        role: 'Procurement Manager',
        photo: '/about/people/ops-3.jpg',
        bio: [
          'Willa finds the stone, the plants, and the odd piece a drawing asks for.',
          'She trained in landscape studies and still names oaks before she names much else.',
          'Favorite genus: Quercus',
        ],
      },
      {
        name: 'Rosa Pell',
        role: 'Production Coordinator',
        photo: '/about/people/ops-4.jpg',
        bio: ['Rosa lines up crews, deliveries, and the week on the board. A longer note is on the way.'],
      },
      {
        name: 'Max Adler',
        role: 'Fleet & Facility Manager',
        photo: '/about/people/ops-5.jpg',
        bio: [
          'Max started as a runner and now keeps the trucks and the yard ready.',
          'If a machine stalls, he is usually already under it.',
          'Favorite tree: mimosa',
        ],
      },
    ],
  },
]
