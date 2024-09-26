import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-primary text-primary" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + fullStars} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  )
}