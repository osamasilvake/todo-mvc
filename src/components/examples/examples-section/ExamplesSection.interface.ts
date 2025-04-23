import { Language } from "../Examples.enum";
import { Framework } from "../Examples.interface";

export interface ExampleSectionInterface {
    title: string;
    framework?: boolean;
    frameworks: Framework[];
    selectedLanguage?:Language;
    setSelectedLanguage?: (language: Language) => void;
     }