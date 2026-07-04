import Image from 'next/image'
import Link from 'next/link'

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/212669897876"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-jump fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <Image
        src="/images/whatsapp.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 object-contain sm:h-10 sm:w-10"
      />
    </Link>
  )
}

export default WhatsAppButton
