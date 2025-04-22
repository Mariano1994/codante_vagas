import Logo from "./logo";
import NavigationMenu from "./navigation-menu";

const Header = () => {
  return (
    <header className=" w-full flex justify-between items-center max-w-5xl py-6 mx-auto ">
      <Logo />
      <NavigationMenu />
    </header>
  );
};

export default Header;
