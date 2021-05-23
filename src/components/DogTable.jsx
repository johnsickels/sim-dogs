import { Button, Grid } from "@material-ui/core";

function DogTable({ dogs }) {
  

  return (
    <Grid container spacing={3}>
      {dogs.map((breed, index) => {
          return (
              <Grid item xs={3}>
                <Button key={index} variant="contained">{breed}</Button>
              </Grid>
          )
      })}
    </Grid>
  );
}

export default DogTable;
