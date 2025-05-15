import { Id, toast } from "react-toastify";

const toastIds: Record<string, Id> = {};

// 추가 성공 토스트
export const showSuccess = (message: string, id?: string) => {
  const toastKey = id || "global-success";

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};

// 추가 실패 토스트
export const showError = (message: string, id?: string) => {
  const toastKey = id || "global-error";

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.error(message, { toastId: toastKey });
  }
};

// 수정 성공 토스트
export const showUpdateSuccess = (message: string, id?: string) => {
  const toastKey = id || "global-update-success";

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};

// 삭제 성공 토스트
export const showDeleteSuccess = (message: string, id?: string) => {
  const toastKey = id || "global-delete-success";

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};
