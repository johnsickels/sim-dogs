import { Dispatch, SetStateAction } from "react";

export interface DogsResponse {
  message: DogJSONBody[];
}

export interface ImagesResponse {
  message: string[];
}

interface DogJSONBody{
  [breed: string]: string[];
}

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type Status = "ready" | "loading" | "loaded" | "none";
