import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import JobPostingCard from "./job-posting-card";

async function fetchJob(id: string) {
  try {
    const response = await fetch(
      `https://apis.codante.io/api/job-board/jobs/${id}`,
      {
        cache: "no-store",
      }
    );

    const job = await response.json();

    return job.data;
  } catch (error) {
    console.error("Error fetching job:", error);
  }
}

export default async function Vaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await fetchJob(id);
  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <JobPostingCard job={job} />
    </div>
  );
}
