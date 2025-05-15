import { getTodos } from "@/services/todo-services";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
