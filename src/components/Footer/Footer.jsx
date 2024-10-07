import Logo from "@assets/softrefine-logo.png";
const Footer = () => {
  const Sponsers = [
    {
      name: "Mohandas Bodaram",
      address: "Marketyard, Junagadh",
      mobile: "9898475508",
    },
    {
      name: "ShivShakti Cold Storage",
      address: "Makhiyala, Junagadh",
      mobile: "9998585091",
    },
  ];
  return (
    <div className="p-4 bg-white text-black text-sm">
      <div className="flex w-full justify-between ">
        {Sponsers.map((item) => (
          <div key={item.name} className="text-center font-semibold text-[12px]">
            <p>{item.name}</p>
            <p>{item.address}</p>
            <p>{item.mobile}</p>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="flex text-xs h-5 items-center justify-center font-semibold mt-2">
        Powered by -
        <img className="h-4 mt-1" src={Logo} alt="softrefine" />
      </div>
    </div>
  );
};

export default Footer;
