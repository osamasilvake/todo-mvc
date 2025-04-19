import { ReactNode } from 'react';
import { ButtonVariantEnum } from './Button.enum';
import { Language } from '../../examples/Examples';


export interface ButtonInterface {
	children: ReactNode;
	variant?: ButtonVariantEnum;
	isDisabled?: boolean;
	label?: string;
	ariaPressed?: boolean;
	active?: string;
	onClickHandler?: () => void;
	buttonStyle?: string;
	language?: string;
	selectedLanguage?: Language,
	showUnderline?: boolean
}