import { ErrorFallbackProps } from "@/types/todo.type";
import { Button } from "./button";

const ErrorFallback = ({
  errorTitle = "404 ERROR",
  errorMessage = "예기치 못한 오류가 발생했습니다.",
}: ErrorFallbackProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="fixed top-1/2 left-1/2 min-w-80 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-4 text-center">
      <h1 className="text-destructive text-3xl font-bold">{errorTitle}</h1>
      <p className="mb-8 text-gray-700">{errorMessage}</p>
      <Button onClick={handleRetry}>다시 시도하기</Button>
    </div>
  );
};

export default ErrorFallback;
