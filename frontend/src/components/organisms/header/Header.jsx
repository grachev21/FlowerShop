import { DropDownMenu, MobileMenu, LinkBlock } from "@/components/organisms/header";
import { Logo, ButtonGreenPadding, ButtonHoverColor, ButtonBasket } from "@/components";
import { useAuthCheck } from "@/hooks";
import menu from "@/assets/menu";

const Header = () => {
  const { isAuthenticated, loading, error } = useAuthCheck();
  return (
    <main className="fixed top-0 left-0 w-full flex flex-col z-50 bg-base-100/80 backdrop-blur-lg">
      <div className="max-w-full h-32 flex flex-row justify-between items-center p-5">
        <Logo />
        <span className="flex flex-row justify-between">
          <LinkBlock menu={menu} isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <ButtonBasket /> : ""}
          <MobileMenu menu={menu} />
        </span>
      </div>
      <div className="w-full hidden flex-row uppercase justify-center textarea-lg font-bold text-primary-content lg:flex">
        <ButtonGreenPadding content="Служба доставки цветов" />
        {/* <DropDownMenu menu={isDataMenuDown} /> */}
        <ButtonHoverColor content={"Блог"} />
      </div>
    </main>
  );
};
export default Header;
