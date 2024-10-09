'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { technologies } from '@/data/technologies'
import './Technologies.css'

export default function Technologies() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center">Technologies</h2>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
      >
        {technologies.map((tech) => (
          <div 
            key={tech.name}
            className="flex flex-col items-center space-y-2 flex-shrink-0 tech-logos"
          >
            <Image src={tech.logo} alt={tech.name} width={150} height={150} className="object-contain"/>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}