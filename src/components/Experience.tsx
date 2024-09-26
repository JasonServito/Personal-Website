import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { experiences } from '@/data/experiences'

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Professional Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.position} at {exp.company}</CardTitle>
              <CardDescription>{exp.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Client Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="italic">
            "We were able to depend on Jason for a lot of development, design, and documentation tasks. He was a real pleasure to work with, and definitely we will hire him again when he has time to return."
          </blockquote>
          <p className="mt-2 text-right">- Don Milligan, CTO of Neural Internet</p>
        </CardContent>
      </Card>
    </section>
  )
}