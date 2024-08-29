import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const Hero = () => {
  return (
    <div className="bg-[#ddd] min-h-[646px] w-full flex flex-col justify-center">
      <div className="container">
        <h1 className="text-[#292E3D] text-[72px] font-semibold">
          Building things <br /> is our mission.
        </h1>
      </div>
      <div className=" bg-[#ddd] flex ">
        <div
          className="w-[416px] h-[190px] bg-[#3559C7] flex flex-col mt-6 absolute right-0 "
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              flex: 2,
            }}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-center text-white font-bold text-[20px] py-1">
              Feature Projects
            </p>
            <p className="text-center text-white font-regular text-[24px]">
              The National University of Architecture
            </p>
          </div>
          <div
            style={{
              flex: 0.5,
            }}
            className="flex justify-between items-center bg-[#292E3D] bottom-0"
          >
            <Button className="w-full flex justify-center items-center text-center text-white font-regular text-[18px]">
              <ArrowLeftIcon className="w-[26px] h-[17px] text-white" />
              Back
            </Button>
            <Button className="w-full flex justify-center items-center text-center text-white font-regular text-[18px]">
              Next
              <ArrowRightIcon className="w-[26px] h-[17px] text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
