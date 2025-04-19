
import ToolTip from "../../common/tooltip/ToolTip"
import { ToolTipPositionEnum } from "../../common/tooltip/ToolTip.enum"
import { nonFrameworksList } from "../Examples.list"

const NonFramework = () => {



  return (
    <ul className="mt-4 grid grid-cols-3">
          {
                nonFrameworksList.map((nonFramework) => {
                    return <li key={nonFramework.id} className="pb-5 cursor-pointer  flex gap-2">
                   <div className="hover:bg-black/10 w-96 rounded-md px-2 pt-1 pb-2">
                  <ToolTip position={ToolTipPositionEnum.TOP} content={nonFramework.intro}>
               <div className="flex gap-2">
               <p className="text-[17px]">{nonFramework.text}</p>
                   {
                    nonFramework.new_item && (
                        <span className="bg-green-800 rounded-sm text-white text-[11px] px-2 py-0 font-[200]">{nonFramework.new_item}</span>
                    )
                   }  
               </div>
                  </ToolTip>
                   </div>
                        </li>
                })
            }
    </ul>
  )
}

export default NonFramework
