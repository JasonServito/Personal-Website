import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Jason Servito</h1>
        <p className="text-xl text-muted-foreground">Computer Engineering student with Full-Stack Development experience, based in Toronto</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/jason-servito/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/JasonServito" target="_blank" rel="noopener noreferrer">
            <Github className="h-8 w-8" />
          </a>
          <a href="mailto:jasonservito000@gmail.com">
            <Mail className="h-8 w-8" />
          </a>
        </div>
        <Button variant="resume" size="lg">
          <a href="/assets/JasonServito-Resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src=""
          alt="Jason Servito"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  )
}