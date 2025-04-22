"use server";

import { redirect } from "next/navigation";

export async function deleteJob(formData: FormData) {
  const jobId = formData.get("id");

  const response = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao deletar a vaga");
  }

  redirect("/vagas");
}

export async function createJob(_previState: any, formData: FormData) {
  const response = await fetch("https://apis.codante.io/api/job-board/jobs", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return {
      error: true,
      message: (await response.json()).message,
    };
  }
}
