import { Box, Container, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DogTable from "./components/DogTable";
import API from "./utils/API";

function App() {
  const [allDogs, setAllDogs] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);

  useEffect(() => {
    API.getDogs().then((results) => {
      const dogsArray = Object.keys(results.data.message);
      setAllDogs(dogsArray)
      setFilteredDogs(dogsArray)
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <Box display="flex" justifyContent="space-between" p={1} m={1}>
          <Box p={1}>
            <Typography variant="h1">Dogs!</Typography>
          </Box>
          <Box p={1} m={1}>
            <TextField id="search-breeds" label="Search" />
          </Box>
        </Box>
        <DogTable dogs={filteredDogs.slice(0, 12)} />
      </Container>
    </div>
  );
}

export default App;
