import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types/todo.type";
import { getTodos } from "@/services/todo-services";

export const useTodosQuery = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
