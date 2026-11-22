import { CloseBand } from '../close-band/CloseBand'
import { SiteLink } from '../site-header/SiteLink'
import { CoverBlock } from '../cover-block/CoverBlock'
import { IntroSplit } from '../intro-split/IntroSplit'
import { PhotoCards } from '../photo-cards/PhotoCards'
import { HomeTestimonials } from '../home-testimonials/HomeTestimonials'
import { HomeConsult } from '../home-consult/HomeConsult'
import { brandName, groundsFilmId } from '../../brand'
import './AboutPage.css'

const videoId = groundsFilmId

const values = [
  {
    title: 'Drive',
    text: 'The work is pushed until the grounds look like the drawing, not until the day is over.',
    image: '/about/studio/crew.jpg',
    icon: '/about/pledge/1.svg',
  },
  {
    title: 'Relationships',
    text: 'One tree is pleasant. A garden held with the people who live there is the point.',
    image: '/about/studio/v2.png',
    icon: '/about/pledge/2.svg',
  },
  {
    title: 'Accountability',
    text: 'Some of the work is under the soil. The account of it stays in the open.',
    image: '/about/studio/v3.png',
    icon: '/about/pledge/3.svg',
  },
  {
    title: 'Professionalism',
    text: 'The crew shows up ready, and the work is cut to what this client actually asked for.',
    image: '/about/studio/v4.png',
    icon: '/about/pledge/4.svg',
  },
  {
    title: 'Safety',
    text: 'The site stays safe for the people who live there and for the people who build it. That is the habit, not a poster.',
    icon: '/about/pledge/5.svg',
  },
]

const promises = [
  {
    title: 'On time',
    text: 'The crew arrives when we said, with the tools this site actually needs.',
  },
  {
    title: 'This property',
    text: 'The plan follows the light, the grade, and how you live outside.',
  },
  {
    title: 'The small things',
    text: 'A preference you mention once is still there on the next visit.',
  },
  {
    title: 'A reply',
    text: 'A call or a note gets an answer. You are not left waiting on a job.',
  },
]

export function AboutPage() {
  return (
    <main>
      <CoverBlock
        image="/about/studio/cover.webp"
        wash="company"
        title="About us"
        action={{ label: 'Contact Us', to: '/contact' }}
      />

      <IntroSplit
        image="/about/studio/side.webp"
        imageAlt="A child in a planted garden"
        title="How the studio started"
        className="about-intro"
        action={{ label: 'Contact Us', to: '/contact' }}
      >
        <p>
          Elmsworth Studio began by keeping grounds, and that is still the
          root of the work. Design and building grew from the same habit:
          make the place useful, and make it last past the week it was planted.
        </p>
        <p>
          The drawing and the install are the heart of a project. Beds, paths,
          and water are set so they can be lived in, not only photographed on
          the day the crew leaves.
        </p>
        <p>
          The visits after that are why the grounds still look like themselves
          a year later. We take on properties we can come back to. The plan,
          the build, and the care stay in one conversation, with the same
          people who already know the site.
        </p>
        <p>
          The film below is that work in motion: how a place is drawn, built,
          and then kept.
        </p>
      </IntroSplit>

      <section className="about-film">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={`${brandName} studio film`}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </section>

      <section className="about-quote">
        <p className="about-quote-kicker">The studio</p>
        <p>
          The work should leave the client, the crew, and the place around
          them in better order. The values are how we get there.
        </p>
      </section>

      <img className="about-yard" src="/about/studio/yard.webp" alt="" />

      <PhotoCards title="What we hold to" items={values} iconFirst />

      <section className="about-welcome">
        <div className="about-welcome-photo">
          <img src="/about/studio/stairs.webp" alt="Stone steps down to a pool" />
        </div>
        <div className="about-welcome-copy">
          <h2>Welcome in</h2>
          <p>What you can count on once the work is ours.</p>
          <ol>
            {promises.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <SiteLink to="/team-and-community" className="about-button">
            <span>Meet the crew</span>
            <img src="/icons/chevron-right.svg" alt="" />
          </SiteLink>
        </div>
      </section>

      <HomeTestimonials />

      <img className="about-bottom" src="/about/studio/stairs.webp" alt="" />

      <HomeConsult />

      <CloseBand title="Learn more" to="/team-and-community" label="Team and community">
        The crew, the town around the studio, and how we keep a site.
      </CloseBand>
    </main>
  )
}
