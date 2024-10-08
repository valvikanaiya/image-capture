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
    <div className="p-4 pt-2 bg-indigo-200 text-slate-800 text-sm font-semibold">
      <div className="flex w-full justify-between ">
        {Sponsers.map((item) => (
          <div
            key={item.name}
            className="text-center tracking-wide text-[12px]">
            <p className="leading-4">{item.name}</p>
            <p className="leading-4">{item.address}</p>
            <p className="leading-4">{item.mobile}</p>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="flex text-xs h-5 items-center justify-center tracking-wide mt-2">
        Powered by -
        <a href="https://softrefine.com" target="_blank">
          <img className="h-4 mt-1" src={Logo} alt="softrefine" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
