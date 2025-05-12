import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-lg shadow-xl">
        <GraduationCap className="mx-auto h-20 w-20 text-primary mb-6 animate-bounce" />
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          Welcome to JavaPrep!
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl mx-auto">
          Your ultimate companion for mastering Java concepts and acing your semester exams.
          Dive into detailed unit-wise syllabus, clear explanations, and helpful examples.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/unit/unit-1">
              Get Started with Unit 1
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03]">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Select a Unit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Navigate through units using the sidebar. Each unit covers specific topics from your syllabus.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03]">
            <CardHeader className="items-center">
               <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Explore Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Click on any topic to view detailed explanations, summarized for easy understanding.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03]">
            <CardHeader className="items-center">
               <div className="p-3 bg-primary/10 rounded-full mb-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Learn & Prepare</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Utilize AI-powered summaries, code examples, and images to reinforce your learning for exams.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-12">
        <p className="text-lg text-foreground/70">
          Ready to start learning? Select a unit from the sidebar or click the button above!
        </p>
      </section>
    </div>
  );
}