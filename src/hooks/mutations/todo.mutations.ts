import { addTodo, deleteTodo, updateTodo } from "@/services/todo-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    addTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  };
};
