import Logo from "@assets/FISS.jpg";
import SpeceMeet from "@assets/SpeceMeet.jpg";
const Navigation = () => {
  return (
    <nav className="bg-[#4C4072] w-full p-2 flex items-center justify-between">
      <img className="h-[50px] w-[80px]" src={Logo} alt="" />
      <img className=" h-[50px] w-[60px]" src={SpeceMeet} alt="" />
    </nav>
  );
};

export default Navigation;
