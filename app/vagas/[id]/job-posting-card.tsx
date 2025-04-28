import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { deleteJob } from "@/lib/actions";
import { Briefcase, DollarSign, MapPin, Users } from "lucide-react";
import Link from "next/link";

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

export default async function JobPostingCard({ jobId }: { jobId: string }) {
  const job = await fetchJob(jobId);

  if (!job) {
    return <span>Vaga nao encontrada</span>;
  }

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-muted-foreground">
              Vaga disponível no{" "}
              <Link
                href={job.company_website}
                className="text-blue-600 hover:underline"
              >
                {job.company}
              </Link>
            </p>
          </div>
          <form action={deleteJob}>
            <input type="hidden" name="id" value={job.id} />
            <Button
              variant="destructive"
              className="border-red-400 text-red-400 border hover:bg-red-400 hover:text-white hover:cursor-pointer"
              type="submit"
            >
              Apagar Vaga
            </Button>
          </form>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-5 w-5" />
            <span>{job.city}</span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-5 w-5" />
            <div className="flex gap-2">
              <Badge variant="secondary">
                {job.schedule === "full time" ? "Integral" : "Meio período"}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-muted-foreground h-5 w-5" />
            <span>{job.salary.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-muted-foreground h-5 w-5" />
            <span>{job.number_of_positions}</span>
          </div>
        </div>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
          <p className="text-muted-foreground">{job.requirements}</p>
        </section>
      </CardContent>
    </Card>
  );
}
