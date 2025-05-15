import { Skeleton } from "@/components/ui/skeleton";

const CustomSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <Skeleton className="h-[125px] w-full rounded-xl bg-[#F3E5AB]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-[#F3E5AB]" />
        <Skeleton className="h-4 w-full bg-[#F3E5AB]" />
      </div>
    </div>
  );
};

export default CustomSkeleton;
