import { Dispatch, SetStateAction, useEffect } from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Status } from "../interfaces";

interface Props {
  images: string[];
  status: string;
  setStatus: Dispatch<SetStateAction<Status>>;
}

function DogImages({ images, status, setStatus }: Props) {
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
      .then(() => setStatus("loaded"))
      .catch((err) => console.log("Failed to load images", err));
  }, [images, setStatus]);

  switch (status) {
    case "loading":
      return (
        <Box m={1} p={1}>
          <GridList cellHeight={160} cols={4}>
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <GridListTile key={index}>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      height={160}
                    ></Skeleton>
                  </GridListTile>
                );
              })}
          </GridList>
        </Box>
      );
    case "loaded":
      return (
        <Box m={1} p={1}>
          <GridList cellHeight={160} cols={4}>
            {images.map((src, index) => {
              return (
                <GridListTile key={index}>
                  <img src={src} alt={`dog-${index}`} />
                </GridListTile>
              );
            })}
          </GridList>
        </Box>
      );
    default:
      return null;
  }
}

export default DogImages;
