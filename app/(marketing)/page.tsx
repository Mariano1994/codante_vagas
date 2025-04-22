import { Button } from "@/components/ui/button";
import Image from "next/image";
import peopleImage from "../assets/people.svg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center pb-10">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Button asChild className="bg-black text-white hover:brightness-105">
        <Link href={"/vagas"} className="cursor-pointer mt-12">
          Busque Uma Vaga
        </Link>
      </Button>
      <Image
        src={peopleImage}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
