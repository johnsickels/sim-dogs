import { MouseEvent, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import DogImages from "./DogImages";
import API from "../utils/API"

interface IProps {
  dogs: string[];
}

function DogTable({ dogs }: IProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const breed = event.currentTarget.innerText.toLowerCase()
    API.getImages(breed).then(results => {
      const images = results.data.message
      console.log(images);
      setImages(images)
    })
  };

  const [images, setImages] = useState<string[]>([]);

  return (
    <>
      {dogs.length ? (
        <Grid container spacing={3}>
          {dogs.map((breed, index) => {
            return (
              <Grid item key={index} xs={3}>
                <Button
                  variant="contained"
                  fullWidth={true}
                  onClick={handleClick}
                >
                  {breed}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {Array(12)
            .fill(null)
            .map((_, index) => {
              return (
                <Grid item key={index} xs={3}>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width="100%"
                    height={40}
                  ></Skeleton>
                </Grid>
              );
            })}
        </Grid>
      )}
      <DogImages images={images}></DogImages>
    </>
  );
}

export default DogTable;
