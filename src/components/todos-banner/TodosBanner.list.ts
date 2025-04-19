import { ButtonVariantEnum } from "../common/button/Button.enum";
import { TodosType } from "./TodosBanner.enum";

export const actionButtons = [
	{
	  label: 'Download',
	  isDisabled: true,
	  variant: ButtonVariantEnum.OUTLINED_IN_RED,
	  onClickHandler: undefined,
	},
	{
	  label: 'View on Github',
	  isDisabled: false,
	  variant: ButtonVariantEnum.OUTLINED_IN_DEFAULT,
	  onClickHandler: () => window.open(TodosType.GITHUB, '_blank'),
	},
	{
	  label: 'Blog',
	  isDisabled: false,
	  variant: ButtonVariantEnum.OUTLINED_IN_DEFAULT,
	  onClickHandler: () => window.open(TodosType.BLOG, '_blank'),
	},
  ];