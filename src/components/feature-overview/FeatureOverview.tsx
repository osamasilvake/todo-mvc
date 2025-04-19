import Button from "../common/button/Button"
import { ButtonVariantEnum } from "../common/button/Button.enum"
import { TodosType } from "../todos-banner/TodosBanner.enum";
import { featureSections } from "./FeatureOverview.list";


const FeatureOverview = () => {
  return (
<section className="gap-10 py-4 flex flex-col md:flex-row">
  {featureSections.map((item) => (
    <div key={item.id} className="md:w-[33.33333333%]">
      <h2 className="text-[24px] pb-4">{item.title}</h2>
      <p className="whitespace-pre-line">{item.description}</p>

      {item.button && (
        <div className="mt-3">
          <Button
            label="button"
            isDisabled={false}
            buttonStyle="px-3 py-[2px] rounded-sm cursor-pointer"
            variant={ButtonVariantEnum.OUTLINED_IN_Gray}
            onClickHandler={() => window.open(TodosType.WIKI, '_blank')}
          >
        {item.button.label}
          </Button>
        </div>
      )}
    </div>
  ))}
</section>

  )
}

export default FeatureOverview
