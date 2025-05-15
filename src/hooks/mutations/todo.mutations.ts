import { QUERY_KEY } from "@/constants/constants";
import { addTodo, deleteTodo, updateTodo } from "@/services/todo-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return {
    addTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  };
};
