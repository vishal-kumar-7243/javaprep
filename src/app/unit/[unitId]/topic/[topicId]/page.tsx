import { getTopicById, getUnitById } from '@/lib/syllabus-data';
import { notFound } from 'next/navigation';
import { TopicContent } from '@/components/topic-content';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from 'next/link';

type TopicPageProps = {
  params: {
    unitId: string;
    topicId: string;
  };
};

export async function generateMetadata({ params }: TopicPageProps) {
  const topic = getTopicById(params.unitId, params.topicId);
  const unit = getUnitById(params.unitId);
  if (!topic || !unit) {
    return { title: 'Topic Not Found' };
  }
  return {
    title: `${topic.name} - ${unit.title} - JavaPrep`,
    description: `Detailed explanation and AI summary for ${topic.name}.`,
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicById(params.unitId, params.topicId);
  const unit = getUnitById(params.unitId);

  if (!topic || !unit) {
    notFound();
  }

  // Examples are now primarily sourced from syllabus-data.ts
  // The TopicContent component will use topic.codeExample, topic.outputExample, topic.image etc.

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/unit/${unit.id}`}>{unit.title}: {unit.longTitle}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{topic.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="pb-4 border-b">
        <h1 className="text-3xl font-bold tracking-tight text-primary">{topic.name}</h1>
        <p className="text-lg text-muted-foreground mt-1">From {unit.title}: {unit.longTitle}</p>
      </div>

      <TopicContent topic={topic} />
    </div>
  );
}

