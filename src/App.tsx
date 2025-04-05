import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { FrameworkDetail } from "./FrameworkDetail";

// Enum for programming languages
enum Language {
  JavaScript = "JavaScript",
  Python = "Python",
  Java = "Java",
}

// Framework interface with an extended data structure
export interface Framework {
  id: number;
  name: string;
  description: string;
  language: Language;
}

// Framework List Component
function FrameworkList() {
 const route =  useNavigate();
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.JavaScript);

  useEffect(() => {
    fetch(`http://localhost:5000/frameworks?language=${selectedLanguage}`)
      .then((response) => response.json())
      .then((data) => setFrameworks(data));
  }, [selectedLanguage]);

  const navigateToDetails = (id: number) => {
    route(`/framework/${id}`); // Similar to Vue’s `this.router.push(...)`
  };

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
        {frameworks.map((framework) => (
          <li onClick={() => navigateToDetails(framework.id)} key={framework.id} className="text-blue-600 cursor-pointer hover:underline">
            {framework.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



// App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrameworkList />} />
        <Route path="/framework/:id" element={<FrameworkDetail />} />
      </Routes>
    </Router>
  );
}
