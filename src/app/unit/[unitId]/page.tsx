import { getUnitById, type Topic } from '@/lib/syllabus-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight, BookText } from 'lucide-react';

type UnitPageProps = {
  params: {
    unitId: string;
  };
};

export async function generateMetadata({ params }: UnitPageProps) {
  const unit = getUnitById(params.unitId);
  if (!unit) {
    return { title: 'Unit Not Found' };
  }
  return {
    title: `${unit.title}: ${unit.longTitle} - JavaPrep`,
    description: `Syllabus and topics for ${unit.title}: ${unit.longTitle}.`,
  };
}

export default function UnitPage({ params }: UnitPageProps) {
  const unit = getUnitById(params.unitId);

  if (!unit) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">{unit.title}</h1>
        <p className="text-2xl text-muted-foreground mt-1">{unit.longTitle}</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {unit.topics.map((topic: Topic) => (
          <Link href={`/unit/${unit.id}/topic/${topic.id}`} key={topic.id} className="group">
            <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-primary group-hover:text-accent">
                  {topic.name}
                </CardTitle>
                <BookText className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
              </CardHeader>
              <CardContent>
                <CardDescription className="truncate group-hover:text-foreground/80">
                  Click to view details and AI-summary for this topic.
                </CardDescription>
                <div className="mt-4 flex items-center text-sm text-accent group-hover:underline">
                  View Topic
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
