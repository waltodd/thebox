import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { icons } from "../constants/index";

const Service = () => {
  return (
    <div className=" w-full bg-[#F6F8F7] min-h-[608px]  flex flex-col justify-center items-center ">
      <div className="py-6">
        <p className="w-[151px] h-[42px] text-[#292E3D] text-[36px] font-bold">Service</p>
      </div>
      <div className="container service-container py-[10px]">
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles="bg-[#FFFFFF]"
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Renovation}
          title="Renovation"
          otherStyles="bg-[#2947A9]"
          textStyles="text-[#FFFFFF]"
        />
        <ServiceCard
          icon={icons.Consulting}
          title="Consulting"
          otherStyles="bg-[#FFFFFF]"
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Repair}
          title="Repair Service"
          otherStyles="bg-[#2947A9]"
          textStyles="text-[#FFFFFF]"
        />
        <ServiceCard
          icon={icons.Architecture}
          title="Architecture"
          otherStyles="bg-[#FFFFFF]"
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Electric}
          title="Electric"
          otherStyles="bg-[#2947A9]"
          textStyles="text-[#FFFFFF]"
        />
        
      </div>
    </div>
  );
};
export default Service;
