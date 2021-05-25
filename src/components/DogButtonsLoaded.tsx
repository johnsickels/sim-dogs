import { MouseEvent } from "react";
import { Button, GridList, GridListTile } from "@material-ui/core";
import { Dispatcher } from "../interfaces";

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
  const handleActiveDog = (event: MouseEvent<HTMLElement>) => {
    const newActiveDog = event.currentTarget.innerText.toLowerCase();
    handleClick(event);
    setActiveDog(newActiveDog);
  };

  return (
    <GridList cellHeight={50} cols={4}>
      {dogs.map((dog, index) => {
        return (
          <GridListTile key={index}>
            <Button
              fullWidth
              variant="contained"
              aria-label={dog}
              onClick={handleActiveDog}
              style={dog === activeDog ? { backgroundColor: "violet" } : {}}
            >
              {dog}
            </Button>
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default DogButtonsLoaded;
