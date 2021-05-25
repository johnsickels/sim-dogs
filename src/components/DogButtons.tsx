import { MouseEvent } from "react";
import { Button, Grid } from "@material-ui/core";
import { Alert, Skeleton } from "@material-ui/lab";
import { Status } from "../interfaces";

interface IProps {
  dogs: string[];
  buttonsStatus: Status;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function DogButtons({ dogs, buttonsStatus, handleClick }: IProps) {
  switch (buttonsStatus) {
    case "loaded":
      return (
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
      );
    case "none":
      return (
        <Alert severity="warning">No dogs found! Try another search</Alert>
      );
    default:
      return (
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
      );
  }
}

export default DogButtons;
