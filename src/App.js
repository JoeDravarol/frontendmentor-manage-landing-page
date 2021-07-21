import React, { useState, useEffect } from 'react'

import avatarAli from './images/avatar-ali.png'
import avatarAnisha from './images/avatar-anisha.png'
import avatarRichard from './images/avatar-richard.png'
import avatarShanai from './images/avatar-shanai.png'

import Testimonials from './components/Testimonials'
import Layout from './layout/Layout'
import Hero from './layout/Hero'
import Services from './layout/Services'
import { useWindowSize } from './hooks'

const testimonialsData = [
  {
    id: 1,
    name: "Anisha Li",
    statement: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    img: avatarAnisha
  },
  {
    id: 2,
    name: "Ali Bravo",
    statement: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    img: avatarAli
  },
  {
    id: 3,
    name: "Richard Watts",
    statement: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    img: avatarRichard
  },
  {
    id: 4,
    name: "Shanai Gough",
    statement: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    img: avatarShanai
  }
]

const App = () => {
  const windowSize = useWindowSize()
  const [testimonials, setTestimonials] = useState(testimonialsData)

  useEffect(() => {
    if (windowSize.width < 1280) {
      setTestimonials(testimonialsData)
    } else {
      const desktopTestimonials = testimonialsData.slice(0, 3)
      setTestimonials(desktopTestimonials)
    }
  }, [windowSize])

  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export default App
