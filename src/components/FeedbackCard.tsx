import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { StarRating } from "./StarRating"
import { Feedback } from "@/types"

interface FeedbackCardProps {
  feedback: Feedback;
}

export function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <Card className="bg-primary/5">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Quote className="w-6 h-6 text-primary" />
          <StarRating rating={feedback.rating} />
        </div>
        <blockquote className="text-sm italic mb-2">
          "{feedback.quote}"
        </blockquote>
        <p className="text-right text-sm font-semibold">— {feedback.author}</p>
      </CardContent>
    </Card>
  )
}