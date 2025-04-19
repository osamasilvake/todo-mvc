import todologo from "../../assets/logo.svg";
import writetodo from "../../assets/logo-icon.png";
import "./TodosBanner.css";
import Button from "../common/button/Button";
import { actionButtons } from "./TodosBanner.list";



const TodosBanner = () => {
  return (
    <div className="flex flex-col-reverse mt-6 justify-between md:flex-row">
        <div className="md:w-[66.66666667%] pt-20">
        <img src={todologo} alt="todo-mvc" />
        <p className="text-[30px] pt-6 pb-7 leading-10 lg:leading-0">Helping you <strong>select</strong> an MV* framework</p>
        <div className="flex gap-2.5 pt-2">
        {/* <Button
					label="button"
					isDisabled={true}
					variant={ButtonVariantEnum.OUTLINED_IN_RED}
					>
					Download
				</Button>
        <Button
					label="button"
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => window.open(TodosType.GITHUB, '_blank')}
					>
					View on Github
				</Button>
        <Button
					label="button"
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => window.open(TodosType.BLOG, '_blank')}
					>
					Blog
				</Button> */}
				{
					actionButtons.map((btn) => {
						return <Button 
						key={btn.label}
						variant={btn.variant}
						isDisabled={btn.isDisabled}
						onClickHandler={btn.onClickHandler}
						>
                        {btn.label}
						</Button>
					})
				}
        </div>
        </div>
        <img src={writetodo} alt="todo" />
      </div>
  )
}

export default TodosBanner
