import { useEffect } from "react";
import DogImagesSkeleton from "./DogImagesSkeleton";
import DogImagesLoaded from "./DogImagesLoaded";
import { Dispatcher, Status } from "../interfaces";

interface IProps {
  images: string[];
  imagesStatus: string;
  setImagesStatus: Dispatcher<Status>;
}

/**
 * Dog Images
 *
 * Loading, loaded, or no images
 * @param props
 * @returns
 */
function DogImages({ images, imagesStatus, setImagesStatus }: IProps) {
  // on load or status change
  useEffect(() => {
    // preload image
    const loadImage = (imageUrl: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);
        loadImg.onerror = (err) => reject(err);
      });
    };

    // wait for all images to load
    Promise.all(images.map((image) => loadImage(image)))
      .then(() => {
        if (images.length) {
          // if there are images
          setImagesStatus("loaded");
        } else {
          // else show nothing
          setImagesStatus("none");
        }
      })
      .catch((err) => console.log("Failed to load images", err));
    // dependendcies
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
