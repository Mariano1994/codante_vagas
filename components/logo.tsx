import Image from "next/image";
import LogoImage from "../app/assets/logo.svg";

const Logo = () => {
  return <Image src={LogoImage} alt="condante-vagas logo" />;
};

export default Logo;
