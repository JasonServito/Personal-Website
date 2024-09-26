import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Jason Servito</h1>
        <p className="text-xl text-muted-foreground">Computer Engineering Student, aspiring Full Stack Developer</p>
        <div className="flex space-x-4">
          <a href="github.com/JasonServito" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="linkedin.com/in/jason-servito/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:jasonservito000@gmail.com">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <Button>
          <a href="/assets/Jason_Servito_Resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src=""
          alt="John Doe"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  )
}