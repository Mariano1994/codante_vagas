import logoFooter from "../app/assets/logo-footer.svg";
import Image from "next/image";
import { Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black  text-white py-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between  border-b-1 border-white py-10">
        <div className="flex flex-col gap-2">
          <Image src={logoFooter} alt="logo footer" />
          <span className="text-sm max-w-[350px] font-light leading-6 text-zinc-400">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </span>
        </div>

        <div className="flex items-center gap-2 ">
          <Instagram
            size={22}
            className="text-zinc-400 hover:text-blue-400 hover:cursor-pointer"
          />
          <Github
            size={22}
            className="text-zinc-400 hover:text-blue-400 hover:cursor-pointer"
          />
          <Mail
            size={22}
            className="text-zinc-400 hover:text-blue-400 hover:cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
