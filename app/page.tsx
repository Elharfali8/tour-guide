import Destinations from '@/components/home/Destinations'
import Hero from '@/components/home/Hero'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-[300vh]'>
      <Hero />
      <Destinations />
    </main>
  )
}

export default page