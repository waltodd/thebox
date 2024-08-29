"use client";
import React, {  useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import {wrap} from "popmotion"
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { slides } from "@/constants";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (

    <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
      <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
        <div

          style={{
            backgroundImage: `url('${slides[currentIndex].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-[646px] w-full flex flex-col justify-center"
        >
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
                {slides[currentIndex].projectName}
                </p>
              </div>
              <div
                style={{
                  flex: 0.7,
                }}
                className="flex justify-between items-center bg-[#292E3D] bottom-0"
              >
                <Button
                onClick={handlePrev} className="w-full flex justify-center items-center text-center text-white font-regular text-[18px]">
                  <ArrowLeftIcon className="w-[26px] h-[17px] text-white" />
                  Back
                </Button>
                <Button
                onClick={handleNext} className="w-full flex justify-center items-center text-center text-white font-regular text-[18px]">
                  Next
                  <ArrowRightIcon className="w-[26px] h-[17px] text-white" />
                </Button>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
        </div>
    </div>
  );
};

export default Hero;
