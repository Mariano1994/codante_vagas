import JobItem from "@/components/job-item";
import { Job } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";

// export const dynamic = "force-dynamic"; this will force the page to be dynamic and not cached (server-rendered on demand)
// DO the samething with the cache: "no-store" on the fetch method

async function fetchJobs() {
  try {
    const jobData = await fetch(
      "https://apis.codante.io/api/job-board/jobs?slow=true",
      {
        cache: "no-store",
      }
    );
    const jobList = await jobData.json();
    const jobs: Job[] = jobList.data;
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

export default async function Vagas() {
  const jobs = await fetchJobs();

  if (!jobs) {
    return (
      <main className="flex justify-center items-center mt-8 ">
        <article className="flex flex-col justify-center items-center">
          <h2 className="font-display mb-12 text-2xl font-bold">
            Nenhuma Vaga Encontrada
          </h2>
          <Link
            href="/vagas/cadastro"
            className="bg-black text-white py-2 px-4 rounded-sm hover:brightness-105"
          >
            {" "}
            Cadastrar vagas
          </Link>
        </article>
      </main>
    );
  }

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>

      <div className="space-y-8">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
