import { Box, TextField, Typography } from "@material-ui/core";
import { Dispatcher, Status } from "../interfaces";

interface IProps {
  allDogs: string[];
  setButtonsStatus: Dispatcher<Status>;
  setImagesStatus: Dispatcher<Status>;
  setFilteredDogs: Dispatcher<string[]>;
  setActiveDog: Dispatcher<string>;
}

/**
 * Dog Header
 * 
 * Header and search input
 * @param props
 * @returns 
 */
function DogHeader({
  allDogs,
  setButtonsStatus,
  setImagesStatus,
  setFilteredDogs,
  setActiveDog,
}: IProps) {
  // when the user types inthe search input field
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // clear the image component
    setImagesStatus("ready");

    // clear the active dog
    setActiveDog("");

    // capture user input
    const filter = event.target.value.toLowerCase();

    // an array of dogs that match the search
    const filteredList = allDogs.filter((dog) => {
      return dog.indexOf(filter) !== -1;
    });

    // if match
    if (filteredList.length) {
      setButtonsStatus("loaded");
      // if no match
    } else {
      setButtonsStatus("none");
    }

    // set the array, even if empty
    setFilteredDogs(filteredList);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={1} m={1}>
      <Box p={1}>
        <Typography variant="h3" style={{ color: "#5f67fe" }}>
          Dogs!
        </Typography>
      </Box>
      <Box p={1} m={1}>
        <TextField
          id="search-breeds"
          label="Search"
          onChange={handleSearchChange}
        />
      </Box>
    </Box>
  );
}
export default DogHeader;
