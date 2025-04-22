"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex items-center justify-center ">
      <h1>Algo deu errado</h1>

      <Link href="/" className="bg-black text-white px-4 py-2 rounded-sm">
        Voltar para Home
      </Link>
    </div>
  );
}
