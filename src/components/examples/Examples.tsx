import { useEffect, useState } from "react";
import Button from "../common/button/Button";
import { ButtonVariantEnum } from "../common/button/Button.enum";
import { Framework as FrameworkInterface } from "./Examples.interface";
import { Language } from "./Examples.enum";
import NonFramework from "./non-framework/NonFramework";
import Framework from "./framework/Framework";
import axios from "axios";

const Examples = () => {
  const [frameworks, setFrameworks] = useState<FrameworkInterface[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.JavaScript);

  useEffect(() => {
    const fetchFrameworks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/frameworks", {
          params: {
            language: selectedLanguage
          }
        });
        const data = await response.data;
        console.log(`Fetched frameworks for ${selectedLanguage}`, data);
        setFrameworks(data);
      } catch (error) {
        console.error("Error fetching frameworks:", error);
      }
    };

    fetchFrameworks();
  }, [selectedLanguage]);



  return (
    <div className="flex-1">

      <h2 className="text-[24px] pb-4">Examples</h2>

      <div className="flex bg-[#f4f4f4] shadow-md">
        {Object.values(Language).map((language) => (
          <Button key={language} buttonStyle="border-none"
            variant={ButtonVariantEnum.OUTLINED_IN_Link}
            onClickHandler={() => setSelectedLanguage(language)}
            selectedLanguage={selectedLanguage}
            language={language}
          >
            {language}
          </Button>

        ))}
      </div>
      <Framework frameworks={frameworks} />
      <hr />

      <div>
        <h2 className="text-[24px] py-4">Compare these to a non-framework implementation</h2>
        <NonFramework />
      </div>

      <hr />
      <div className="flex gap-1">
        <span className="bg-green-800 rounded-sm text-white text-[11px] px-2 py-0 font-[200]">New</span>
        <p>= New or updated app</p>
      </div>
    </div>
  )
}

export default Examples
