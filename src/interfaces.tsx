export interface DogsResponse {
    message: Dog[]
}

export interface ImagesResponse {
  message: string[]
}

export interface Dog {
  [breed: string]: string[];
}

export type Status = "ready" | "loading" | "loaded";