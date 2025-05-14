import { TodoListProps } from "@/types/todo.type";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="bg-sky-400 py-10 text-center text-gray-500">
        새로운 할 일을 추가해주세요.
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
