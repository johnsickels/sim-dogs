import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import DogTable from "./DogTable";
import DogHeader from "./DogHeader";
import API from "../utils/API";
import { Status } from "../interfaces";

/**
 * Dog Dashboard
 * 
 * Main component
 * @returns 
 */
function DogDashboard() {
  // state
  const [allDogs, setAllDogs] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);
  const [buttonsStatus, setButtonsStatus] = useState<Status>("ready");
  const [imagesStatus, setImagesStatus] = useState<Status>("ready");
  const [activeDog, setActiveDog] = useState<string>("");

  // when component mounts
  useEffect(() => {
    // show skeleton buttons
    setButtonsStatus("loading");

    // get all dog breed names
    API.getDogs().then((results) => {
      // create an array of main breed names, not worried about sub breeds
      const dogsArray = Object.keys(results.data.message);

      // the source of truth
      setAllDogs(dogsArray);

      // the filtered dogs to display
      setFilteredDogs(dogsArray);

      // remove skeleton and show buttons
      setButtonsStatus("loaded");
    });

    // no dependency
  }, []);

  return (
    <Container>
      <DogHeader
        allDogs={allDogs}
        setButtonsStatus={setButtonsStatus}
        setImagesStatus={setImagesStatus}
        setFilteredDogs={setFilteredDogs}
        setActiveDog={setActiveDog}
      ></DogHeader>
      <DogTable
        dogs={filteredDogs.slice(0, 12)}
        activeDog={activeDog}
        buttonsStatus={buttonsStatus}
        imagesStatus={imagesStatus}
        setActiveDog={setActiveDog}
        setImagesStatus={setImagesStatus}
      />
    </Container>
  );
}

export default DogDashboard;
