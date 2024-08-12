import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { icons } from "../constants/index";

const Service = () => {
  return (
    <div className=" w-full bg-[#F6F8F7] min-h-[608px] flex justify-center items-center ">
      <div className="container service-container">
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        <ServiceCard
          icon={icons.Construction}
          title="Construction"
          otherStyles=""
          textStyles="text-[#2947A9]"
        />
        
      </div>
    </div>
  );
};
export default Service;
