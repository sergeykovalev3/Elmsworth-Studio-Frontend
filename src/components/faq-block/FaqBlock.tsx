import { useState } from 'react'
import './FaqBlock.css'

export type FaqItem = {
  title: string
  body: string
}

export function FaqBlock({
  title,
  image,
  items,
  plain = false,
}: {
  title: string
  image?: string
  items: FaqItem[]
  plain?: boolean
}) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={plain ? 'faq-block is-plain' : 'faq-block'}>
      <div className={image ? 'faq-block-inner has-image' : 'faq-block-inner'}>
        <div>
          <h2>{title}</h2>
          <div className="faq-list">
            {items.map((item, index) => {
              const isOpen = open === index
              return (
                <article
                  key={item.title}
                  className={isOpen ? 'faq-item is-open' : 'faq-item'}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{item.title}</span>
                    <span className="faq-mark" aria-hidden>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        {image ? <img src={image} alt="" /> : null}
      </div>
    </section>
  )
}
