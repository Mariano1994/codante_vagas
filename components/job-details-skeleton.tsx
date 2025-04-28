import { Skeleton } from "./ui/skeleton";

export default function JobDetailsSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-4">
        <Skeleton className="h-8 w-2xs bg-gray-200 " />
      </div>
      <div className="mb-6">
        <Skeleton className="h-8 w-2xs bg-gray-200 " />
      </div>
      {/* <div className="mb-6">
      <Skeleton count={3} />
    </div> */}
      <div className="flex gap-2">
        <Skeleton className="bg-gray-200 h-8 w-24" />
        <Skeleton className="bg-gray-200 h-8 w-24" />
      </div>
    </div>
  );
}
