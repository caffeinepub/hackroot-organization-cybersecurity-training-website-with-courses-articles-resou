import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart } from 'lucide-react';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Cybersecurity Courses
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive training programs designed to elevate your security skills
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="cyber-card flex flex-col transition-all hover:border-cyber-accent">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="outline" className="border-cyber-accent text-cyber-accent">
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  <span>{course.level}</span>
                </div>
              </div>
              <Button className="cyber-button w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
