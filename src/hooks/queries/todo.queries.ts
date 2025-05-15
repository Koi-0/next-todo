import { QUERY_KEY } from "@/constants/constants";
import { getTodos } from "@/services/todo-services";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getTodos,
  });
};
