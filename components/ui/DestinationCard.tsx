import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface DestinationCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  cta?: string
}

const DestinationCard = ({
  title,
  description,
  imageSrc,
  href,
  cta = 'Plan this trip',
}: DestinationCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block h-[280px] overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)] sm:h-[340px]"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/38 to-transparent" />
      <div className="absolute inset-0 border border-white/15" />

      <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
       
        <h3 className="font-serif text-xl font-semibold leading-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:text-[#D8B35B] sm:text-sm">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default DestinationCard
