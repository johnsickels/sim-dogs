import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import DogTable from "../components/DogTable";
import DogHeader from "./DogHeader";
import API from "../utils/API";
import { Status } from "../interfaces";

function DogDashboard() {
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

  return (
    <Container>
      <DogHeader
        allDogs={allDogs}
        setButtonsStatus={setButtonsStatus}
        setImagesStatus={setImagesStatus}
        setFilteredDogs={setFilteredDogs}
      ></DogHeader>
      <DogTable
        dogs={filteredDogs.slice(0, 12)}
        buttonsStatus={buttonsStatus}
        imagesStatus={imagesStatus}
        setImagesStatus={setImagesStatus}
      />
    </Container>
  );
}

export default DogDashboard;
