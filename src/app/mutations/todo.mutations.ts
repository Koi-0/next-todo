import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, updateTodo } from "../api/todo-api";

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
