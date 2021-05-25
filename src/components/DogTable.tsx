import { MouseEvent, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import DogImages from "./DogImages";
import API from "../utils/API";
import { Status } from "../interfaces";

interface Props {
  dogs: string[];
}

function DogTable({ dogs }: Props) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setStatus("loading");
    const breed = event.currentTarget.innerText.toLowerCase();
    API.getImages(breed).then((results) => {
      const images = results.data.message;
      setImages(images);
    });
  };

  const [status, setStatus] = useState<Status>("ready");
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
      <DogImages images={images} status={status} setStatus={setStatus}></DogImages>
    </>
  );
}

export default DogTable;
