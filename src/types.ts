export interface Series {
  title: string;
  description: string;
  programType: "series" | "movies";
  images: Images;
  releaseYear: number;
}

export interface Images {
  "Poster Art": {
    url: string;
    width: number;
    height: number;
  };
}
