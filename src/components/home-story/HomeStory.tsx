import { brandFull, brandName, groundsFilmId } from '../../brand'
import './HomeStory.css'

const videoId = groundsFilmId

export function HomeStory() {
  return (
    <section className="home-story">
      <div className="home-story-copy">
        <h2 className="home-story-title">
          Made with intent.{' '}
          <span className="home-story-title-accent">Kept for living.</span>
        </h2>
        <p>
          {brandFull} grew from small courtyard plots into full outdoor rooms —
          places that hold dinner, quiet mornings, and the long stretch of the
          year without asking for constant fuss.
        </p>
        <p>
          We plan, build, and tend the grounds as one piece of work. The aim is
          simple: every edge, plant, and path should feel considered, then fade
          into how you actually live outside.
        </p>
      </div>
      <div className="home-story-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={`${brandName} studio film`}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
