import { useParams, useNavigate } from '@tanstack/react-router';
import { courses } from '@/data/courses';
import { formatINR } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, BarChart } from 'lucide-react';

export default function CourseDetailPage() {
  const { courseId } = useParams({ from: '/courses/$courseId' });
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="container py-12 md:py-16">
        <Card className="cyber-card mx-auto max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Course Not Found</CardTitle>
            <p className="mt-2 text-muted-foreground">
              The course you're looking for doesn't exist or has been removed.
            </p>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate({ to: '/courses' })}
              className="cyber-button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div className="container py-8 md:py-12 lg:py-16">
      <Button
        variant="ghost"
        onClick={() => navigate({ to: '/courses' })}
        className="mb-6 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyber-accent/10">
              <Icon className="h-6 w-6 text-cyber-accent" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">{course.shortDescription}</p>
            </div>
          </div>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-xl">Course Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-normal">
                {course.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="cyber-card lg:sticky lg:top-6">
            <CardHeader>
              <CardTitle className="text-lg">Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">Level</div>
                <Badge variant="outline" className="border-cyber-accent text-cyber-accent">
                  {course.level}
                </Badge>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">Duration</div>
                <div className="flex items-center gap-2 text-base text-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">Skill Level</div>
                <div className="flex items-center gap-2 text-base text-foreground">
                  <BarChart className="h-4 w-4" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <div className="mb-2 text-sm font-medium text-muted-foreground">Price</div>
                <div className="mb-4 text-2xl sm:text-3xl font-bold text-cyber-accent">
                  {formatINR(course.price)}
                </div>
                <Button className="cyber-button w-full">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
