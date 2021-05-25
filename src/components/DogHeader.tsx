import { Box, TextField, Typography } from "@material-ui/core";
import { Dispatcher, Status } from "../interfaces";

interface IProps {
  allDogs: string[];
  setButtonsStatus: Dispatcher<Status>;
  setImagesStatus: Dispatcher<Status>;
  setFilteredDogs: Dispatcher<string[]>;
}
function DogHeader({ allDogs, setButtonsStatus, setImagesStatus, setFilteredDogs }: IProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagesStatus("ready");
    const filter = event.target.value.toLowerCase();
    const filteredList = allDogs.filter((dog) => {
      return dog.indexOf(filter) !== -1;
    });
    if (!filteredList.length) {
      setButtonsStatus("none");
    } else {
      setButtonsStatus("loaded");
    }
    setFilteredDogs(filteredList);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={1} m={1}>
      <Box p={1}>
        <Typography variant="h2">Dogs!</Typography>
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
