export const QUERY_KEY = "TodoList";

export const EVENT_KEYS = {
  TODO_ADD_SUCCESS: "todo-add-success",
  TODO_ADD_ERROR: "todo-add-error",
  TODO_DELETE_SUCCESS: "todo-delete-success",
  TODO_UPDATE_SUCCESS: "todo-update-success",
  TODO_COMPLETE_SUCCESS: "todo-complete-success",
};

export const TOAST_KEYS = {
  GLOBAL_SUCCESS: "global-success",
  GLOBAL_ERROR: "global-error",
  GLOBAL_UPDATE_SUCCESS: "global-update-success",
  GLOBAL_DELETE_SUCCESS: "global-delete-success",
  GLOBAL_COMPLETE_SUCCESS: "global-complete-success",
};

export const ALL = "all";
export const COMPLETED = "completed";
export const PENDING = "pending";

export const MESSAGES = {
  ERROR_TITLE: "ERROR",
  ERROR_MESSAGE: "데이터를 불러오는 중 문제가 발생했습니다.",
  TODO: {
    ADD: "할 일이 추가되었습니다.",
    DELETE: "할 일이 삭제되었습니다.",
    UPDATE: "할 일이 수정되었습니다.",
    COMPLETE: "할 일이 완료되었습니다.",
    INPUT_REQUIRED: "할 일을 입력해주세요.",
  },
};

export const ERROR_MESSAGES = {
  FETCH_TODOS: "할 일 목록을 불러오지 못했습니다.",
  ADD_TODO: "할 일을 추가하지 못했습니다.",
  UPDATE_TODO: "할 일을 수정하지 못했습니다.",
  DELETE_TODO: "할 일을 삭제하지 못했습니다.",
};
