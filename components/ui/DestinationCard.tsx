import React from 'react'

interface DestinationCardProps {
  title: string
  duration: string
  description: string
  imageSrc: string
  href: string
}

const DestinationCard = ({ title, duration, description, imageSrc, href }: DestinationCardProps) => {
  return (
    <div className='h-[300px] shadow rounded-lg transition-all ease-in-out duration-150 hover:scale-105 relative'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',    
        backgroundPosition: 'center',
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-lg">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}

export default DestinationCard