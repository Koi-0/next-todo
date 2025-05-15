import { ReactNode } from "react";

// 하나의 할 일 항목 정의
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// 할 일 추가 폼에서 사용하는 props
export interface TodoFormProps {
  onAdd: (title: string) => void;
}

// 할 일 리스트에서 사용하는 props
export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

// 할 일 아이템에서 사용하는 props
export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

// 입력 필드에서 사용하는 props
export type InputProps = React.ComponentProps<"input"> & {
  autoFocusOnMount?: boolean;
};

// 커스텀 알림 대화상자에서 사용하는 props
export type CustomAlertDialogProps = {
  triggerLabel: React.ReactNode;
  triggerVariant?: "white" | "outline";
  title: string;
  description: string;
  confirmLabel?: string;
  onConfirm: () => void;
};

// ErrorBoundary 컴포넌트에서 사용하는 props
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorTitle?: string;
  errorMessage?: string;
}

// ErrorBoundary 컴포넌트에서 사용하는 state
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ErrorFallback 컴포넌트에서 사용하는 props
export interface ErrorFallbackProps {
  errorTitle?: string;
  errorMessage?: string;
}
