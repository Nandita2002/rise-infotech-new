'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/riseinfo.jpeg" // Place your logo in public/logo.png
        alt="Rise Infotech"
        width={220}
        height={60}
        priority
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  )
}