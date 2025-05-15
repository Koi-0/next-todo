"use client";

import { useTodoMutations } from "@/hooks/mutations/todo.mutations";
import { useTodosQuery } from "@/hooks/queries/todo.queries";
import { Todo } from "@/types/todo.type";
import { useCallback, useState } from "react";
import CustomAlertDialog from "../ui/custom-alert-dialog";
import CustomSkeleton from "../ui/custom-skeleton";
import ErrorFallback from "../ui/error-fallback";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ALL, COMPLETED, MESSAGES, PENDING } from "@/constants/constants";

const TodoContainer = () => {
  const [filterType, setFilterType] = useState<"all" | "completed" | "pending">(
    ALL,
  );

  const { data: todos = [], isPending, isError } = useTodosQuery();
  const { addTodoMutation, updateTodoMutation, deleteTodoMutation } =
    useTodoMutations();

  const handleAddTodo = useCallback(
    (title: string) => {
      const newTodo: Omit<Todo, "id"> = {
        title,
        completed: false,
      };
      addTodoMutation.mutate(newTodo);
    },
    [addTodoMutation],
  );

  const handleToggleComplete = useCallback(
    (id: string) => {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;
      const updatedTodo = { ...todo, completed: !todo.completed };
      updateTodoMutation.mutate(updatedTodo);
    },
    [todos, updateTodoMutation],
  );

  const handleUpdateTodo = useCallback(
    (updatedTodo: Todo) => {
      updateTodoMutation.mutate(updatedTodo);
    },
    [updateTodoMutation],
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      deleteTodoMutation.mutate(id);
    },
    [deleteTodoMutation],
  );

  const filteredTodos = todos.filter((todo) => {
    if (filterType === COMPLETED) return todo.completed;
    if (filterType === PENDING) return !todo.completed;
    return true;
  });

  if (isPending) return <CustomSkeleton />;
  if (isError)
    return (
      <ErrorFallback
        errorTitle={MESSAGES.ERROR_TITLE}
        errorMessage={MESSAGES.ERROR_MESSAGE}
      />
    );

  return (
    <section className="space-y-8 p-4">
      <h1 className="text-2xl font-bold">📝 Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <Tabs
        defaultValue="all"
        value={filterType}
        onValueChange={(value) => setFilterType(value as typeof filterType)}
      >
        <div className="flex items-center justify-between">
          <CustomAlertDialog
            triggerLabel="💡 Tip"
            triggerVariant="outline"
            title="💡 Tip"
            description="할 일 내용이 길면 일부가 생략되어 ‘…’으로 표시될 수 있어요. 최대 35자 이내로 입력하면 전체 내용을 볼 수 있습니다!"
            confirmLabel="닫기"
            onConfirm={() => {}}
          />
          <TabsList>
            <TabsTrigger value={ALL}>all</TabsTrigger>
            <TabsTrigger value={COMPLETED}>completed</TabsTrigger>
            <TabsTrigger value={PENDING}>pending</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleComplete}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </section>
  );
};

export default TodoContainer;
