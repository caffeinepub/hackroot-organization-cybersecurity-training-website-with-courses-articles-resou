import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { courses } from '@/data/courses';
import { formatINR } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Clock, BarChart, CreditCard, Smartphone, X, CheckCircle2 } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useIsEnrolledInCourse, useEnrollInCourse } from '@/hooks/useQueries';
import { toast } from 'sonner';

export default function CourseDetailPage() {
  const { courseId } = useParams({ from: '/courses/$courseId' });
  const navigate = useNavigate();
  const { identity, login } = useInternetIdentity();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  
  const course = courses.find((c) => c.id === courseId);
  const { data: isEnrolled, isLoading: isCheckingEnrollment } = useIsEnrolledInCourse(courseId);
  const enrollMutation = useEnrollInCourse();

  const isAnonymous = !identity || identity.getPrincipal().isAnonymous();

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

  const handleEnrollClick = () => {
    if (isAnonymous) {
      toast.error('Please sign in to enroll in courses', {
        description: 'You need to be logged in to enroll in a course.',
        action: {
          label: 'Sign In',
          onClick: () => login(),
        },
      });
      return;
    }

    if (isEnrolled) {
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentSubmit = async () => {
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Enroll in course via backend
      await enrollMutation.mutateAsync(courseId);
      
      // Navigate to success page with course details
      navigate({
        to: '/courses/$courseId/enrollment-success',
        params: { courseId },
        search: { amount: course.price },
      });
    } catch (error) {
      toast.error('Enrollment failed', {
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
    }
  };

  const handleCancelPayment = () => {
    setShowPayment(false);
    setPaymentMethod('upi');
  };

  const isProcessing = enrollMutation.isPending;

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
                
                {isEnrolled ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">You are enrolled</span>
                    </div>
                    <Button
                      className="cyber-button w-full"
                      disabled
                    >
                      Enrolled
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="cyber-button w-full"
                    onClick={handleEnrollClick}
                    disabled={isCheckingEnrollment || isProcessing}
                  >
                    {isCheckingEnrollment ? 'Checking...' : 'Enroll Now'}
                  </Button>
                )}
              </div>

              {showPayment && !isEnrolled && (
                <div className="border-t border-border pt-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCancelPayment}
                      disabled={isProcessing}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Course</p>
                    <p className="font-medium">{course.title}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="text-xl font-bold text-cyber-accent">{formatINR(course.price)}</p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Select Payment Method</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={(value) => setPaymentMethod(value as 'upi' | 'card')}
                      disabled={isProcessing}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5 text-cyber-accent" />
                          <span>UPI</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 text-cyber-accent" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      onClick={handleCancelPayment}
                      disabled={isProcessing}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="cyber-button flex-1"
                      onClick={handlePaymentSubmit}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Pay and Enroll'}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
