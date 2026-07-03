import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type TourCardProps = {
  title: string
  description: string
  image: string
  href: string
}

const TourCard = ({ title, description, image, href }: TourCardProps) => {
  return (
    <article className="group relative min-h-[480px] overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,23,42,0.24)]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-black/10" />
      <div className="absolute inset-0 border border-white/15" />

      <div className="relative z-10 flex min-h-[480px] flex-col justify-end p-6 sm:p-7">
        <h3 className="font-serif text-3xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/78">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#D8B35B] hover:text-slate-950"
        >
          See More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default TourCard
