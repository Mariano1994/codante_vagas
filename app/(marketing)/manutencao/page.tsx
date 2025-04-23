import Image from "next/image";
import maintenanceImage from "../../assets/maintenance-image.svg";

export default function ManutencaoPage() {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 my-12">
      <h1 className=" text-2xl font-medium"> Website em Manutenção</h1>
      <Image
        src={maintenanceImage}
        alt="Imagem de manutencao"
        className="w-[550px]"
      />

      <p className="text-xl font-thin text-gray-500">
        Estamos em manutencao no momento, por favor volte mais tarde
      </p>
    </div>
  );
}
