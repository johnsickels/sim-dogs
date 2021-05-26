import { MouseEvent } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { Dispatcher } from "../interfaces";
import DogButtonLoaded from "./DogButtonLoaded";

interface IProps {
  dogs: string[];
  activeDog: string;
  setActiveDog: Dispatcher<string>;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

function DogButtonsLoaded({
  dogs,
  activeDog,
  setActiveDog,
  handleClick,
}: IProps) {

  return (
    <GridList cellHeight={50} cols={4}>
      {dogs.map((dog, index) => {
        return (
          <GridListTile key={index}>
            <DogButtonLoaded
              dog={dog}
              activeDog={activeDog}
              setActiveDog={setActiveDog}
              handleClick={handleClick}
            ></DogButtonLoaded>
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default DogButtonsLoaded;
