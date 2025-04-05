import { useState } from "react";

// Define an enum for programming languages
enum Language {
  JavaScript = "JavaScript",
  Python = "Python",
  CPlusPlus = "C++",
}

// Define a type for framework data
const frameworkData: Record<Language, string[]> = {
  [Language.JavaScript]: ["React", "Angular", "Vue"],
  [Language.Python]: ["Django", "Flask", "FastAPI"],
  [Language.CPlusPlus]: ["Qt", "Boost", "POCO"],
};

export default function Filter() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Language.JavaScript
  );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Select a Language</h2>
      <div className="flex gap-2 mb-4">
        {Object.values(Language).map((language) => (
          <button
            key={language}
            className={`px-4 py-2 rounded-lg text-white transition-colors duration-200 ${
              selectedLanguage === language ? "bg-blue-500" : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>
      <h3 className="text-lg font-semibold">Frameworks:</h3>
      <ul className="mt-2 list-disc pl-5">
        {frameworkData[selectedLanguage].map((framework) => (
          <li key={framework} className="text-gray-700">
            {framework}
          </li>
        ))}
      </ul>
    </div>
  );
}
