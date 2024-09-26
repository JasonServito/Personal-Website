import { Button } from '@/components/ui/button'

export default function Resume() {
  return (
    <section className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Resume</h2>
      <p>Download my resume to learn more about my skills and experience.</p>
      <Button>
        <a href="/assets/Jason_Servito_Resume.pdf" download>
          Download Resume
        </a>
      </Button>
    </section>
  )
}