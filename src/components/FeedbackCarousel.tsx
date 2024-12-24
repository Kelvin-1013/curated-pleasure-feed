import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const feedbacks = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Angel Investor",
    feedback: "Found my next unicorn through this platform. The connection was instant and meaningful.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VC Partner",
    feedback: "This platform revolutionizes how we connect with promising startups. Highly recommended!",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Startup Founder",
    feedback: "Secured seed funding within weeks. The investor matching is incredibly accurate.",
  },
];

export function FeedbackCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
      <Carousel>
        <CarouselContent>
          {feedbacks.map((feedback) => (
            <CarouselItem key={feedback.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-6">
                  <blockquote className="space-y-2">
                    <p className="text-lg">{feedback.feedback}</p>
                    <footer>
                      <p className="font-semibold">{feedback.name}</p>
                      <p className="text-sm text-muted-foreground">{feedback.role}</p>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}