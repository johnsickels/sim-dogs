import { Grid } from "@material-ui/core";
import { Alert, Skeleton } from "@material-ui/lab";
import { MouseEvent } from "react";
import { Dispatcher, Status } from "../interfaces";
import DogButtonsLoaded from "./DogButtonsLoaded";

interface IProps {
  dogs: string[];
  activeDog: string;
  buttonsStatus: Status;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  setActiveDog: Dispatcher<string>;
}

function DogButtons({
  dogs,
  activeDog,
  buttonsStatus,
  setActiveDog,
  handleClick,
}: IProps) {
  switch (buttonsStatus) {
    case "loaded":
      return (
        <DogButtonsLoaded
          dogs={dogs}
          activeDog={activeDog}
          handleClick={handleClick}
          setActiveDog={setActiveDog}
        ></DogButtonsLoaded>
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
