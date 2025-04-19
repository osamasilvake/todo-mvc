import { useNavigate } from "react-router-dom";
import { Framework as FrameworkType } from "../Examples.interface";
import ToolTip from "../../common/tooltip/ToolTip";
import { ToolTipPositionEnum } from "../../common/tooltip/ToolTip.enum";

export interface FrameworkProps {
    frameworks: FrameworkType[];
  }

const Framework = ({frameworks}: FrameworkProps) => {
    const route =  useNavigate();

    const navigateToDetails = (id: number) => {
        route(`/framework/${id}`); 
      };

  return (
    <ul className="grid grid-cols-3 my-6">
        {frameworks.map((framework) => (
             <li key={framework.id} onClick={() => navigateToDetails(framework.id)} className="pb-5 cursor-pointer  flex gap-2">
             <div className="hover:bg-black/10 w-96 rounded-md px-2 pt-1 pb-2">
            <ToolTip position={ToolTipPositionEnum.TOP} content={framework.description}>
         <div className="flex gap-2">
         <p className="text-[17px]">{framework.name}</p>
             {
              framework.new_item && (
                  <span className="bg-green-800 rounded-sm text-white text-[11px] px-2 py-0 font-[200]">{framework.new_item}</span>
              )
             }  
         </div>
            </ToolTip>
             </div>
                  </li>
          ))}
    </ul>
  )
}

export default Framework
