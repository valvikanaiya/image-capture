import Location from "@assets/location.png";
import Calender from "@assets/calender.png";

const Address = () => {
  return (
    <div className="flex justify-between flex-col items-center">
      <div className="mb-1 flex items-center gap-2 flex-1">
        <img className="h-3" src={Calender} alt="" />
        <span className="text-[12px] font-semibold">
          20<sup>th</sup> October 2024, Sunday
        </span>
      </div>
      <div className="flex items-center gap-2 flex-1">
        <img className="w-3" src={Location} alt="" />
        <span className="text-[12px]  font-semibold">
          The Fern Leo Resort & Club, Junagadh, Gujarat
        </span>
      </div>
    </div>
  );
};

export default Address;
