import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-[#F6F8F7] w-full min-h-[632px] flex flex-col justify-center items-center">
  
        <h4 className="text-center h-[42px] font-bold text-[36px] mb-4">What can us do for you?</h4>
        <p className="text-center font-medium text-[#292E3D]  h-[46px] mb-2">
          We are ready to work on a project of any complexity, <br /> whether
          it’s commercial or residential.
        </p>

        <div>
          <div className="flex ctd-card justify-between items-center gap-x-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Your Name <span className="text-[#ED6565]">*</span></Label>
              <Input type="email" id="email" placeholder="Your Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email <span className="text-[#ED6565]">*</span></Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="flex ctd-card justify-between items-center gap-x-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Reason for contacting <span className="text-[#ED6565]">*</span></Label>
              <Input type="email" id="email" placeholder="Reason for contacting" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Phone <span className="text-[#ED6565]">*</span></Label>
              <Input type="email" id="email" placeholder="Phones" />
            </div>
          </div>
          <div className="flex justify-start flex-col items-start gap-x-4 pt-2">
            <Textarea placeholder="Type your message here." />
            <div className="flex justify-start  items-start gap-x-4 py-4">
            <span className="text-[#ED6565]">*</span><label>Indicates a required field</label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-4 pt-2">
            <Button className="w-[271px] h-[53px] bg-[#2947A9] text-[#FFFFFF] text-[18px] font-semibold">Submit</Button>
          </div>
        </div>
      </div>
   
  );
};

export default CTA;
