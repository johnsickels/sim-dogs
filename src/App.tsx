import { Box, Container, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DogTable from "./components/DogTable";
import { Status } from "./interfaces";
import API from "./utils/API";

function App() {
  const [allDogs, setAllDogs] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);
  const [buttonsStatus, setButtonsStatus] = useState<Status>("ready");
  const [imagesStatus, setImagesStatus] = useState<Status>("ready");

  useEffect(() => {
    setButtonsStatus("loading");
    API.getDogs().then((results) => {
      const dogsArray = Object.keys(results.data.message);
      setAllDogs(dogsArray);
      setFilteredDogs(dogsArray);
      setButtonsStatus("loaded");
    });
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagesStatus("ready")
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
    <div className="App">
      <Container>
        <Box display="flex" justifyContent="space-between" p={1} m={1}>
          <Box p={1}>
            <Typography variant="h1">Dogs!</Typography>
          </Box>
          <Box p={1} m={1}>
            <TextField
              id="search-breeds"
              label="Search"
              onChange={handleSearchChange}
            />
          </Box>
        </Box>
        <DogTable
          dogs={filteredDogs.slice(0, 12)}
          buttonsStatus={buttonsStatus}
          imagesStatus={imagesStatus}
          setImagesStatus={setImagesStatus}
        />
      </Container>
    </div>
  );
}

export default App;
