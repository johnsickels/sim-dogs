import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import DogTable from "./DogTable";
import DogHeader from "./DogHeader";
import API from "../utils/API";
import { useQuery } from "../hooks/useQuery";
import { DogsResponse, Status } from "../interfaces";

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
  const [imagesStatus, setImagesStatus] = useState<Status>("ready");
  const [activeDog, setActiveDog] = useState<string>("");

  const {
    error,
    status: buttonsStatus,
    data,
    setStatus: setButtonsStatus,
  } = useQuery<DogsResponse>({
    apiCall: API.getDogs,
    initialStatus: "loading",
  });

  useEffect(() => {
    if (data?.message) {
      const dogsArray = Object.keys(data.message);
      setAllDogs(dogsArray);
      setFilteredDogs(dogsArray);
    }
  }, [data]);

  if (error){
    // set status to complain
  }

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
