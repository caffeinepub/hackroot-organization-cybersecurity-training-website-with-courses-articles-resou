import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useIsEnrolledInCourse(courseId: string) {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['enrollment', courseId],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isEnrolledInCourse(courseId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useEnrollInCourse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (courseId: string) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.enrollInCourse(courseId);
    },
    onSuccess: (_, courseId) => {
      // Invalidate enrollment query to refresh the UI
      queryClient.invalidateQueries({ queryKey: ['enrollment', courseId] });
    },
  });
}
