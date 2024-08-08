export interface RecursiveKeyValuePair<T> {
    [key: string]: T | RecursiveKeyValuePair<T>;
  }
  
export interface TailwindTheme {
    extend: {
      colors: RecursiveKeyValuePair<string>;
      fontFamily: RecursiveKeyValuePair<string[]>;
    };
  }
  
export interface TailwindConfig {
    content: string[];
    theme: TailwindTheme;
    plugins: any[];
  }
  
  