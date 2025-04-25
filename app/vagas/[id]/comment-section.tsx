async function fetchComments(id: string) {
  try {
    const commnets = await fetch(
      `https://apis.codante.io/api/job-board/jobs/${id}/comments?slow=true`,
      { cache: "no-store" }
    );

    const JobComments = await commnets.json();
    return JobComments.data;
  } catch (error) {
    console.error("Erro ao carregar comentarios desta vaga", error);
  }
}

export default async function CommentSection({ jobId }: { jobId: string }) {
  const comments = await fetchComments(jobId);

  return (
    <div>
      <h2 className="font-display mt-12 mb-8 text-2xl font-bold">
        Comentarios sobre esta vaga
      </h2>
      <div className="space-y-3">
        {comments.map((comment: any) => (
          <div
            key={comment.id}
            className="border border-gray-100 rounded-md p-4"
          >
            <p className="text-muted-foreground">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
