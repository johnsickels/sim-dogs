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

/**
 * Dog Buttons
 *
 * All buttons - empty, loading, or loaded
 * @param props
 * @returns
 */
function DogButtons({
  dogs,
  activeDog,
  buttonsStatus,
  setActiveDog,
  handleClick,
}: IProps) {
  // Conditional render
  switch (buttonsStatus) {
    // API has responded and filter has dogs
    case "loaded":
      return (
        <DogButtonsLoaded
          dogs={dogs}
          activeDog={activeDog}
          handleClick={handleClick}
          setActiveDog={setActiveDog}
        ></DogButtonsLoaded>
      );
    // API has responded, but filter matches no dogs
    case "none":
      return (
        <Alert severity="warning">No dogs found! Try another search...</Alert>
      );
    // API is pending, this has to be last to avoid a flicker on initial load
    default:
      return <DogButtonsSkeleton></DogButtonsSkeleton>;
  }
}

export default DogButtons;
