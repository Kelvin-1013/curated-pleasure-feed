import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StartupCardProps {
  name: string;
  description: string;
  industry: string;
  fundingStage: string;
  location: string;
}

export function StartupCard({ name, description, industry, fundingStage, location }: StartupCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{name}</span>
          <Badge>{fundingStage}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{industry}</Badge>
          <Badge variant="outline">{location}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}