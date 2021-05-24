export interface DogsResponse {
    message: Dog[]
}

export interface ImagesResponse {
  message: string[]
}

export interface Dog {
  [breed: string]: string[];
}
