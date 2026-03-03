import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { BlogPost } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPostById(id: bigint | undefined) {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost>({
    queryKey: ["post", id?.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("No actor available");
      if (id === undefined) throw new Error("No ID provided");
      return actor.getPostById(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("No actor available");
      return actor.submitContactMessage(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
