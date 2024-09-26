'use client'

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={cn(
      "min-h-screen bg-background font-sans antialiased",
      inter.className
    )}>
      <div className="container mx-auto px-4 py-8">
        <main className="space-y-24">
          <Hero />
          <Technologies />
          <Experience />
          <Projects />
          <Resume />
        </main>
      </div>
    </div>
  )
}