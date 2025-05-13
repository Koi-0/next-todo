/** 하나의 할 일 항목 정의 */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

/** 할 일 추가 폼에서 사용하는 props */
export interface TodoFormProps {
  onAdd: (title: string) => void;
}

/** 할 일 리스트에서 사용하는 props */
export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

/** 할 일 아이템에서 사용하는 props */
export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
}
