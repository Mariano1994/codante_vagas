import { Button } from "@/components/ui/button";
import Link from "next/link";
import notFoundImage from "../app/assets/not-found.jpg";
import Image from "next/image";
import { maven_pro } from "@/lib/fonts";

export default function NotFound() {
  return (
    <div className={`h-screen w-full ${maven_pro.className}`}>
      <div className="flex justify-center items-center mt-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-extrabold text-5xl">Nada encontrado aqui...</h1>

          <Image
            src={notFoundImage}
            alt="imagem de um barco afundando"
            width={400}
          />

          <span className="text-3xl font-light text-zinc-300">
            {" "}
            Não foi possível encontrar a p&aacute;gina solicitada
          </span>

          <Button
            asChild
            className="w-min bg-black text-white hover:brightness-105 mt-3 "
          >
            <Link href="/" className="px-4 py-6">
              Voltar a Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
