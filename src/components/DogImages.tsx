import { useEffect } from "react";
import DogImagesSkeleton from "./DogImagesSkeleton";
import DogImagesLoaded from "./DogImagesLoaded";
import { Dispatcher, Status } from "../interfaces";

interface IProps {
  images: string[];
  imagesStatus: string;
  setImagesStatus: Dispatcher<Status>;
}

function DogImages({ images, imagesStatus, setImagesStatus }: IProps) {
  useEffect(() => {
    const loadImage = (imageUrl: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => {
        if (images.length) {
          setImagesStatus("loaded");
        } else {
          setImagesStatus("none")
        }
      })
      .catch((err) => console.log("Failed to load images", err));
  }, [images, setImagesStatus]);

  switch (imagesStatus) {
    case "loading":
      return <DogImagesSkeleton></DogImagesSkeleton>;
    case "loaded":
      return <DogImagesLoaded images={images}></DogImagesLoaded>;
    default:
      return null;
  }
}

export default DogImages;
