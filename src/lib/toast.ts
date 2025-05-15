import { TOAST_KEYS } from "@/constants/constants";
import { Id, toast } from "react-toastify";

const toastIds: Record<string, Id> = {};

// 추가 성공 토스트
export const showSuccess = (message: string, id?: string) => {
  const toastKey = id || TOAST_KEYS.GLOBAL_SUCCESS;

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};

// 추가 실패 토스트
export const showError = (message: string, id?: string) => {
  const toastKey = id || TOAST_KEYS.GLOBAL_ERROR;

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.error(message, { toastId: toastKey });
  }
};

// 수정 성공 토스트
export const showUpdateSuccess = (message: string, id?: string) => {
  const toastKey = id || TOAST_KEYS.GLOBAL_UPDATE_SUCCESS;

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};

// 삭제 성공 토스트
export const showDeleteSuccess = (message: string, id?: string) => {
  const toastKey = id || TOAST_KEYS.GLOBAL_DELETE_SUCCESS;

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};

// 할 일 완료 토스트
export const showCompleteSuccess = (message: string, id?: string) => {
  const toastKey = id || TOAST_KEYS.GLOBAL_COMPLETE_SUCCESS;

  if (!toast.isActive(toastIds[toastKey])) {
    toastIds[toastKey] = toast.success(message, { toastId: toastKey });
  }
};
