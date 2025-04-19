import { useState } from 'react';

import { TooltipInterface } from './ToolTip.interface';
import { ToolTipPositionEnum } from './ToolTip.enum';
import "./ToolTip.css";

const ToolTip = (props: TooltipInterface) => {
	const { children, content, position } = props;
	const [isVisible, setIsVisible] = useState(false);

	const mouseEnter = () => setIsVisible(true);
	const mouseLeave = () => setIsVisible(false);

	const classes = {
		top: position === ToolTipPositionEnum.TOP ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+15px)] z-20' : '',
		bottom: position === ToolTipPositionEnum.BOTTOM ? 'left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-20' : '',
		left: position === ToolTipPositionEnum.LEFT ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]' : '',
		right: position === ToolTipPositionEnum.RIGHT ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]' : ''
	};

	const tooltipPosition = {
		top:
			position === ToolTipPositionEnum.TOP
				? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)]  border-b border-r  '
				: '',
		bottom:
			position === ToolTipPositionEnum.BOTTOM
				? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t border-b-neutral-900 dark:border-b-white'
				: '',
		left:
			position === ToolTipPositionEnum.LEFT
				? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r border-l-neutral-900'
				: '',
		right:
			position === ToolTipPositionEnum.RIGHT
				? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l border-r-neutral-900'
				: ''
	};

	return (
		<div className="relative cursor-pointer" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			{children}
			{isVisible && (
				<>
					<div
						className={`absolute shadow-lg rounded border border-gray-300 shadow-s z-10 bg-white 
               text-black w-64 text-[17px] whitespace-normal break-words
              ${classes.top} ${classes.bottom} ${classes.left} ${classes.right}`}>
				<h3 className="popover-title">
					<span className="absolute right-6 text-[13px]">Welcome</span>
				</h3>
						<p className="px-2 py-2.5">{content}</p>
					</div>
					{/* <span
						className={`absolute z-20 border-10 dark:border-b-0 dark:border-transWparent
              ${tooltipPosition.top} ${tooltipPosition.bottom}
              ${tooltipPosition.left} ${tooltipPosition.right}`}
					/> */}
	<span
	className={`
    absolute w-[15px] h-[15px] rotate-45 bg-white 
     border-gray-300 z-20
    ${tooltipPosition.top} ${tooltipPosition.bottom}
    ${tooltipPosition.left} ${tooltipPosition.right}
  `}/>

				</>
			)}
		</div>
	);
};

export default ToolTip;