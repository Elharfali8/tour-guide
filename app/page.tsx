
import Activities from '@/components/home/Activities'
import Contact from '@/components/home/Contact'
import Destinations from '@/components/home/Destinations'
import Hero from '@/components/home/Hero'
import PopularTours from '@/components/home/PopularTours'
import Services from '@/components/home/Services'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen'>
      <Hero />
      {/* <Services /> */}
      <WhyChooseUs />
      <PopularTours />
      <Destinations />
      <Activities />
      <Contact />
    </main>
  )
}

export default page
