import { MouseEvent, useState } from "react";
import DogImages from "./DogImages";
import API from "../utils/API";
import { Dispatcher, Status } from "../interfaces";
import DogButtons from "./DogButtons";

interface IProps {
  dogs: string[];
  buttonsStatus: Status;
  imagesStatus: string,
  activeDog: string,
  setActiveDog: Dispatcher<string>,
  setImagesStatus: Dispatcher<Status>,
}

function DogTable({
  dogs,
  activeDog,
  buttonsStatus,
  imagesStatus,
  setActiveDog,
  setImagesStatus,
}: IProps) {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setImagesStatus("loading");
    const breed = event.currentTarget.innerText.toLowerCase();
    API.getImages(breed).then((results) => {
      const images = results.data.message;
      setImages(images);
    });
  };

  const [images, setImages] = useState<string[]>([]);

  return (
    <>
      <DogButtons
        dogs={dogs}
        activeDog={activeDog}
        buttonsStatus={buttonsStatus}
        handleClick={handleClick}
        setActiveDog={setActiveDog}
      ></DogButtons>
      <DogImages
        images={images}
        imagesStatus={imagesStatus}
        setImagesStatus={setImagesStatus}
      ></DogImages>
    </>
  );
}

export default DogTable;
