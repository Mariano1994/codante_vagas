import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import JobPostingCard from "./job-posting-card";
import { Suspense } from "react";
import CommentSection from "./comment-section";

export default async function Vaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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

      <Suspense fallback={<span> Carregando dados da Vaga</span>}>
        <JobPostingCard jobId={id} />
      </Suspense>

      <Suspense fallback={<span> carregando comentarios... </span>}>
        <CommentSection jobId={id} />
      </Suspense>
    </div>
  );
}
