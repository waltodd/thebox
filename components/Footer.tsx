import { icons, images } from "../constants/index";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="w-full bg-[#FFFFFF] min-h-[377px]">
        <div className="container footer-links min-h-[377px] flex justify-start items-center">
          <div className="w-full h-full flex flex-col justify-center items-start">
            <div className="flex justify-start items-start py-2">
              <p className="font-medium text-[16px] text-[#2947A9] uppercase">
                Address :{" "}
              </p>
              <span className="text-[#121212] text-[16px] pl-3">
                {" "}
                6391 Elgin St. Celina, Delaware 10299
              </span>
            </div>
            <div className="flex justify-start items-start py-2">
              <p className="font-medium text-[16px] text-[#2947A9] uppercase">
                Phone :{" "}
              </p>
              <span className="text-[#121212] text-[16px] pl-3">
                {" "}
                +84 1102 2703
              </span>
            </div>
            <div className="flex justify-start items-start py-2">
              <p className="font-medium text-[16px] text-[#2947A9] uppercase">
                email :{" "}
              </p>
              <span className="text-[#121212] text-[16px] pl-3 ">
                {" "}
                hello@thebox.com
              </span>
            </div>
            <div className="flex justify-start items-start py-2">
              <Image src={images.Logo} width={112} height={250} alt="logo" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-start">
          <p className="font-medium text-[16px] text-[#2947A9] uppercase">
                news letter:
              </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button className="bg-[#F9995D] text-[#FFFFFF]" type="submit">Subscribe</Button>
            </div>
            <div className="py-4 mt-3">
            <p className="font-medium text-[16px] text-[#2947A9] uppercase">
                social media:
              </p>
              <div className="flex gap-x-3 justify-start items-center">
                <a href="#">
                <Image src={icons.Facebook} width={38.4} height={38.4} alt="facebook" /> 
                </a>
                <a href="#">
                <Image src={icons.Linkedin} width={38.4} height={38.4} alt="facebook" /> 
                </a>
                <a href="#">
                <Image src={icons.Twitter} width={38.4} height={38.4} alt="facebook" /> 
                </a>
                
                </div> 
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2947A9] h-[70px] justify-center items-center">
        <div className="container flex justify-start items-center h-full">
          <p className="text-[#ffffff]">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
