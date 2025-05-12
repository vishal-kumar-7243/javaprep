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

  // Example code and image (replace with actual data if available)
  if (topic.id === "simple-java-program") {
    topic.codeExample = 
`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}`;
    topic.outputExample = "Hello, Java World!";
    topic.image = "https://picsum.photos/800/400";
    topic.imageHint = "java ide";
  }
  if (topic.id === "arrays") {
     topic.codeExample = 
`public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array of integers
        int[] numbers = {10, 20, 30, 40, 50};

        // Access and print array elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Third element: " + numbers[2]);

        // Iterate through the array
        System.out.println("All elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println(); // New line
    }
}`;
    topic.outputExample = 
`First element: 10
Third element: 30
All elements:
10 20 30 40 50`;
  }
   if (topic.id === "control-statements") {
    topic.image = "https://picsum.photos/800/450";
    topic.imageHint = "flow chart";
   }


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
