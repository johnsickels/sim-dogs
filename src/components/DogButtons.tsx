import { MouseEvent } from "react";
import { Alert } from "@material-ui/lab";
import DogButtonsLoaded from "./DogButtonsLoaded";
import DogButtonsSkeleton from "./DogButtonsSkeleton";
import { Dispatcher, Status } from "../interfaces";

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
        <Alert severity="warning">No dogs found! Try another search...</Alert>
      );
    default:
      return <DogButtonsSkeleton></DogButtonsSkeleton>;
  }
}

export default DogButtons;
