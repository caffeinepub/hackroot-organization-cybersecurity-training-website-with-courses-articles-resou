import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { articles } from '@/data/articles';

export default function ArticleDetailPage() {
  const { slug } = useParams({ from: '/articles/$slug' });
  const navigate = useNavigate();
  
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Article Not Found</h1>
        <Button onClick={() => navigate({ to: '/articles' })}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate({ to: '/articles' })}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Articles
      </Button>

      <article className="mx-auto max-w-4xl">
        <div className="mb-8 aspect-video overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {article.title}
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-4 text-muted-foreground">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
