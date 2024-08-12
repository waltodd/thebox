import Image from "next/image";
import Contruction from '@/assets/icons/Construction.png'
const ServiceCard = () =>{
    return(
        <div className="w-[271px] h-[181px] bg-[#FFFFFF] flex flex-col rounded-[4px] items-center justify-center shadow">
            <div className="flex flex-col items-center justify-center">
                <Image src={Contruction} width={40} height={40} alt="Construction" />
                <div className="bg-[#E0E3EB] mt-4 w-[60px] h-[2px]"></div>
            </div>
            <div className="py-6">
                <p className="psemibold text-[#2947A9]">Construction</p>
            </div>
        </div>
    )
}

export default ServiceCard