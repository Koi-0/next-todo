import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo-api";
import { Todo } from "@/types/todo.type";

export const useTodosQuery = () => {
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: getTodos,
    });
};
