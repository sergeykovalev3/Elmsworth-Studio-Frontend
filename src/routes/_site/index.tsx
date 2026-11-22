import { createFileRoute } from '@tanstack/react-router'
import { HomeConsult } from '../../components/home-consult/HomeConsult'
import { HomeHero } from '../../components/home-hero/HomeHero'
import { HomeInvite } from '../../components/home-invite/HomeInvite'
import { HomeMission } from '../../components/home-mission/HomeMission'
import { HomeProcess } from '../../components/home-process/HomeProcess'
import { HomeProjects } from '../../components/home-projects/HomeProjects'
import { HomeSeasons } from '../../components/home-seasons/HomeSeasons'
import { HomeServices } from '../../components/home-services/HomeServices'
import { HomeStory } from '../../components/home-story/HomeStory'
import { HomeTestimonials } from '../../components/home-testimonials/HomeTestimonials'
import { HomeWidePhoto } from '../../components/home-wide-photo/HomeWidePhoto'

export const Route = createFileRoute('/_site/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeStory />
      <HomeMission />
      <HomeInvite />
      <HomeWidePhoto src="/home/bleed.webp" alt="House and grounds at dusk" />
      <HomeServices />
      <HomeSeasons />
      <HomeWidePhoto
        src="/home/pool-deck.webp"
        alt="Pool deck and planted edge"
      />
      <HomeTestimonials />
      <HomeProjects />
      <HomeProcess />
      <HomeConsult />
    </main>
  )
}
