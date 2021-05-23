export interface AxiosDogs {
    message: Dog[]
}

export interface Dog {
  [breed: string]: string[];
}
