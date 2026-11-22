import { reviews } from './reviews'
import './HomeTestimonials.css'

export function HomeTestimonials() {
  return (
    <section className="home-testimonials">
      <div className="home-testimonials-inner">
        <h2 className="home-testimonials-title">
          Hear from <span>Our Clients...</span>
        </h2>
        <div className="home-testimonials-row">
          {reviews.map((review) => (
            <article key={review.name} className="home-review">
              <header className="home-review-header">
                <span
                  className="home-review-letter"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initial}
                </span>
                <div className="home-review-name">{review.name}</div>
                <img src="/icons/google.svg" alt="" />
              </header>
              <img
                className="home-review-stars"
                src="/icons/five-stars.svg"
                alt="Five stars"
              />
              <p>{review.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
