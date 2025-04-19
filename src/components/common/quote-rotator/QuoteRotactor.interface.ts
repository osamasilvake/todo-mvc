
export interface Quote {
    id: number;
    text: string;
    image: string;
    author: string;
  };
  
  export interface QuoteRotatorProps {
    quotes: Quote[];
    interval?: number; 
  }