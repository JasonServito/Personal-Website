import { Button } from '@/components/ui/button'

export default function Resume() {
  return (
    <section className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Resume</h2>
      <p>Feel free to check out my resume to learn more about my skills and experience.</p>
      <Button variant="resume" size="lg">
        <a href="/assets/JasonServito-Resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </Button>
    </section>
  )
}