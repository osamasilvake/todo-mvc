import { ButtonVariantEnum } from "./Button.enum";
import { ButtonInterface } from "./Button.interface";


const Button = (props: ButtonInterface) => {
	const {
		children,
		active,
		variant = ButtonVariantEnum.OUTLINED_IN_DEFAULT,
		isDisabled,
		onClickHandler,
		buttonStyle,
		label,
		ariaPressed,
		language,
		selectedLanguage
	} = props;

	const variants = {
		disabled: isDisabled ? 'opacity-50 cursor-progress' : '',
		button: buttonStyle || 'px-2.5 py-2.5 rounded-md',

		outlinedInDefault:

			variant === ButtonVariantEnum.OUTLINED_IN_DEFAULT
				? 'border-[1px] border-gray-400 bg-[#f4f4f4] text-black text-[20px] font-[300] cursor-pointer text-shadow-sm'
				: '',
				outlinedInRed:

				variant === ButtonVariantEnum.OUTLINED_IN_RED
					? 'border-[1px] border-[#777] bg-[#B12D2B] text-white text-[20px] font-[300] cursor-pointer text-shadow-sm'
					: '',
		outlinedInGray:
			variant === ButtonVariantEnum.OUTLINED_IN_Gray
				? 'px-3 py-[2px] bg-[#f4f4f4] inline-block rounded-sm border border-gray-300'
				: '',
				outlinedInLink: variant === ButtonVariantEnum.OUTLINED_IN_Link ?
				'w-1/2 h-14 text-gray-800 hover:text-white hover:bg-[#AF2F2F]': '',
	};

	return (
		<button
			aria-label={label}
			aria-pressed={ariaPressed}
			disabled={isDisabled}
			onClick={onClickHandler}
			className={`${variants.disabled}
			  ${variants.button} 
			 ${variants.outlinedInDefault}
			 	 ${variants.outlinedInRed}
			   ${variants.outlinedInGray} ${variants.outlinedInLink} ${active}`}>
			{children}

			{selectedLanguage === language && variant === ButtonVariantEnum.OUTLINED_IN_Link && (
     <div className="relative flex-1">
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[3px] w-[100%] bg-[#AF2F2F]" />
	  </div>
    )}
	
		</button>
	);
};

export default Button;