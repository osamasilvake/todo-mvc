import Button from "../../common/button/Button";
import { ButtonVariantEnum } from "../../common/button/Button.enum";
import ExamplesHeading from "../examples-heading/ExamplesHeading";
import { FrameworkEnum, Language } from "../Examples.enum";
import Framework from "../framework/Framework"
import { ExampleSectionInterface } from "./ExamplesSection.interface";


const ExamplesSection = (props: ExampleSectionInterface) => {
const {title, framework, frameworks,selectedLanguage, setSelectedLanguage}= props;
const type = framework ? FrameworkEnum.Framework : FrameworkEnum.NonFramework;

  return (
    <section>
        <header className="pb-4">
        <ExamplesHeading title={title} />
        </header>

        <div>
            {framework &&
         <div className="flex bg-[#f4f4f4] shadow-md">
         {Object.values(Language).map((language) => (
           <Button key={language} buttonStyle="border-none"
             variant={ButtonVariantEnum.OUTLINED_IN_Link}
             onClickHandler={() => setSelectedLanguage?.(language)}
             selectedLanguage={selectedLanguage}
             language={language}
           >
             {language}
           </Button>
       
         ))}
       </div>
            }
        </div>

      
      <Framework type={type} frameworks={frameworks}  />
    </section>
  )
}

export default ExamplesSection
