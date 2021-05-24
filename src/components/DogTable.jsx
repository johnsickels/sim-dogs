import { Button, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

function DogTable({ dogs }) {
  return dogs.length ? (
    <Grid container spacing={3}>
      {dogs.map((breed, index) => {
        return (
          <Grid item key={index} xs={3}>
            <Button variant="contained" fullWidth={true}>
              {breed}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <Grid container spacing={3}>
      {Array(12)
        .fill()
        .map((_, index) => {
          return (
            <Grid item key={index} xs={3}>
              <Skeleton
                animation="wave"
                variant="text"
                width="100%"
                height={40}
              ></Skeleton>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default DogTable;
