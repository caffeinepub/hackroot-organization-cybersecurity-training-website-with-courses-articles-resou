import { useParams, useNavigate, useSearch } from '@tanstack/react-router';
import { courses } from '@/data/courses';
import { formatINR } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, BookOpen } from 'lucide-react';

export default function EnrollmentSuccessPage() {
  const { courseId } = useParams({ from: '/courses/$courseId/enrollment-success' });
  const navigate = useNavigate();
  const search = useSearch({ from: '/courses/$courseId/enrollment-success' });
  
  const course = courses.find((c) => c.id === courseId);
  const amount = (search as { amount?: number }).amount || 0;

  if (!course) {
    return (
      <div className="container py-12 md:py-16">
        <Card className="cyber-card mx-auto max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Course Not Found</CardTitle>
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

  return (
    <div className="container py-12 md:py-16">
      <Card className="cyber-card mx-auto max-w-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-3xl">Enrollment Successful!</CardTitle>
          <p className="text-muted-foreground">
            You have successfully enrolled in the course
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-border bg-accent/20 p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Course</p>
              <p className="text-lg font-semibold">{course.title}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Amount Paid</p>
              <p className="text-2xl font-bold text-cyber-accent">{formatINR(amount)}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{course.duration}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="font-medium">{course.level}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => navigate({ to: '/courses' })}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
            <Button
              className="cyber-button flex-1"
              onClick={() => navigate({ to: '/courses/$courseId', params: { courseId } })}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View Course Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
