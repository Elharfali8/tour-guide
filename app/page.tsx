
import Activities from '@/components/home/Activities'
import Destinations from '@/components/home/Destinations'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-[300vh]'>
      <Hero />
      <WhyChooseUs />
      <Destinations />
      <Activities />
    </main>
  )
}

export default page