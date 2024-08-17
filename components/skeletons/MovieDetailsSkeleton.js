import { Skeleton } from "../ui/skeleton";

const MovieDetailsSkeleton = () => {
  return (
    <div className="py-20 flex flex-col space-y-3">
      <Skeleton className="bg-gray-300 h-[250px] w-[100%] rounded-xl mx-auto" />
      <div className="mx-auto">
        <div className="flex gap-8">
          <div>
            <Skeleton className="bg-gray-300 h-64 w-[220px]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="bg-gray-300 h-12 w-[350px]" />
            <Skeleton className="bg-gray-300 h-24 w-[350px]" />
            <Skeleton className="bg-gray-300 h-4 w-[350px]" />
            <Skeleton className="bg-gray-300 h-4 w-[350px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
