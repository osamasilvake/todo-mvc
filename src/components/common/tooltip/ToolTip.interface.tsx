import { ReactNode } from 'react';

export interface TooltipInterface {
	children: ReactNode;
	position: string;
	tooltipStyle?: string;
	content?: string;
}