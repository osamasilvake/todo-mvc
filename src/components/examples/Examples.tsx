import { useEffect, useState } from "react";
import { Framework as FrameworkInterface } from "./Examples.interface";
import { Language } from "./Examples.enum";
import axios from "axios";
import ExamplesSection from "./examples-section/ExamplesSection";
import { ExamplesHeadingEnum } from "./examples-heading/ExamplesHeading.enum";

const Examples = () => {
  const [frameworks, setFrameworks] = useState<FrameworkInterface[]>([]);
  const [nonFrameworks, setNonFrameworks] = useState<FrameworkInterface[]>([]);
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


  const fetchNonFrameworks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/nonFrameworks");
      const data = await response.data;
      setNonFrameworks(data);
    } catch (error) {
      console.error("Error fetching non-frameworks:", error);
    }
  };

  useEffect(() => {
    fetchNonFrameworks();
  }, []);

  return (
    <div className="flex-1">

      <div>
       <ExamplesSection 
        title={ExamplesHeadingEnum.Framework_Heading}
        frameworks={frameworks}
        framework={true}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
         />
      </div>
      <hr />

      <div>
        <ExamplesSection 
        title={ExamplesHeadingEnum.Non_Framework_Heading}
        frameworks={nonFrameworks}
         />
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
