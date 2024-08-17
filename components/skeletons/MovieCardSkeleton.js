import { Skeleton } from "../ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="bg-gray-300 h-[280px] w-[220px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="bg-gray-300 h-4 w-[220px]" />
        <Skeleton className="bg-gray-300 h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
