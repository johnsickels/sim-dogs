import { Dispatch, SetStateAction } from "react";

export interface DogsResponse {
  message: Dog[];
}

export interface ImagesResponse {
  message: string[];
}

export interface Dog {
  [breed: string]: string[];
}

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type Status = "ready" | "loading" | "loaded" | "none";
