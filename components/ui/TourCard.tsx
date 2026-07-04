import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type TourCardProps = {
  title: string
  description: string
  image: string
  href: string
  ctaLabel?: string
}

const TourCard = ({
  title,
  description,
  image,
  href,
  ctaLabel = 'See More',
}: TourCardProps) => {
  return (
    <article className="group relative min-h-[360px] overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,23,42,0.24)] sm:min-h-[420px] lg:min-h-[480px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-black/10" />
      <div className="absolute inset-0 border border-white/15" />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-4 sm:min-h-[420px] sm:p-6 lg:min-h-[480px] lg:p-7">
        <h3 className="font-serif text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-xs leading-6 text-white/78 sm:text-sm sm:leading-7">
          {description}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-[#D8B35B] hover:text-slate-950 sm:px-5 sm:py-3 sm:text-sm"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default TourCard
