import { Button } from "@material-ui/core";
import { MouseEvent } from "react";
import { Dispatcher } from "../interfaces";

interface IProps {
  dog: string;
  activeDog: string;
  setActiveDog: Dispatcher<string>;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * Loaded Dog Button
 * 
 * Single dog button
 * @param props
 * @returns 
 */
function DogButtonLoaded({
  dog,
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
    <Button
      fullWidth
      variant="contained"
      aria-label={dog}
      onClick={handleActiveDog}
      style={
        dog === activeDog
          ? {
              background: "linear-gradient(to right, #bb82fe, #554fff)",
              color: "white",
              textTransform: "lowercase",
            }
          : { textTransform: "lowercase" }
      }
    >
      {dog}
    </Button>
  );
}

export default DogButtonLoaded;
