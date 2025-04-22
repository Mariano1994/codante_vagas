import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const NavigationItem = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "Sobre",
    href: "/sobre",
  },
  {
    item: "Vagas",
    href: "/vagas",
  },
  {
    item: "Cadastrar Vagas",
    href: "/vagas/cadastro",
  },
];

const NavigationMenu = () => {
  return (
    <ul className="flex items-center text-sm font-light ">
      {NavigationItem.map((item) => (
        <li key={item.item}>
          <Link
            href={item.href}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            {item.item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
