import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { images } from "../constants/index";

const AboutUs = () => {
  return (
    <div className=" w-full bg-[#FFFFFF] min-h-[945px]  flex flex-col justify-center items-start ">
      <div className="container flex justify-center items-start">
        <div className="w-full h-full">
        <Image src={images.About} width={902} height={669} alt="about us" />
        </div>

        <div>
        <div className=" mt-[50px] mr-[000px] w-[488px] relative h-[523px] bg-[#2947A9] rounded-[2px]">
          rigght
        </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
