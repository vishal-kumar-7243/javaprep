import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function UnitLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-6 w-3/4 mb-6" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/5" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-4/5" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
