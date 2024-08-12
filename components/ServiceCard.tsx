import Image from "next/image";
import { StaticImageData } from "next/image";



interface ServiceCardProps {
    title: string;
    otherStyles?:string;
    textStyles?:string
    icon:string | StaticImageData
}

const ServiceCard:React.FC<ServiceCardProps> = ({
    title,
    textStyles,
    otherStyles,
    icon
}) =>{
    return(
        <div className={` ${otherStyles} w-[271px] h-[181px] bg-[#FFFFFF] flex flex-col rounded-[4px] items-center justify-center shadow`}>
            <div className="flex flex-col items-center justify-center">
                <Image src={icon} width={40} height={40} alt="Construction" />
                <div className="bg-[#E0E3EB] mt-4 w-[60px] h-[2px]"></div>
            </div>
            <div className="py-6">
                <p className={` ${textStyles} text-[20px] psemibold `}>{title}</p>
            </div>
        </div>
    )
}

export default ServiceCard