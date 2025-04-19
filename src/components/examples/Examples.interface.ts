import { Language } from "./Examples.enum";

export interface Framework {
    id: number;
    name: string;
    description: string;
    language: Language;
    new_item: string;
    framework_details: string;
  }

export interface nonFrameworkInterface {
 id: number;
 text: string;
 new_item?: string;
 intro?: string
  }