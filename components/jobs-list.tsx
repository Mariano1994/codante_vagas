import { Job } from "@/lib/types";
import JobItem from "./job-item";
import JobsPagination from "./jobs-paginations";

// export const dynamic = "force-dynamic"; this will force the page to be dynamic and not cached (server-rendered on demand)
// DO the samething with the cache: "no-store" on the fetch method...

async function fetchJobs(search?: string) {
  try {
    const urlSeachParams = new URLSearchParams();

    if (search) {
      urlSeachParams.set("search", search);
    }
    const jobData = await fetch(
      `https://apis.codante.io/api/job-board/jobs?search=${urlSeachParams.toString()}`,
      { cache: "no-store" }
    );

    const jobList = await jobData.json();
    const jobs: Job[] = jobList.data;
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

export default async function JobsList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const searchText = resolvedSearchParams.search as string;

  const jobs = await fetchJobs(searchText);

  return (
    <div className="space-y-8">
      {jobs?.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}

      <JobsPagination searchParams={searchParams} />
    </div>
  );
}
