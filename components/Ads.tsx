import { icons, images } from "../constants/index";
import { Button } from "@/components/ui/button";
const Ads = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${images.BG.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[300px] flex items-center justify-center text-[#121212] text-2xl"
    >
      <div className="container flex justify-between items-center  sm:flex flex-col md:flex-row lg:flex-row">
        <div>
          <p className="text-[36px] font-bold text-[#FFFFFF] ">
            Free consultation with exceptional quality
          </p>
          <p className="text-[24px] font-regular text-[#FFFFFF] ">
            Just one call away:{" "}
            <a href="#" className="">
              +84 1102 2703
            </a>
          </p>
        </div>
        <Button className="bg-transparent py-[20px] px-[10px] border-[#FFFFFF] border-[1px] rounded-none text-[18px] font-semibold text-[#FFFFFF] hover:bg-[#F9995D]">
          Get your consultation
        </Button>
      </div>
    </div>
  );
};

export default Ads;
