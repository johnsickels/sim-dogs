import { Box, GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

function DogImagesSkeleton() {
  return (
    <Box m={1} p={1}>
      <GridList cellHeight={160} cols={4}>
        {Array(8)
          .fill(null)
          .map((_, index) => {
            return (
              <GridListTile key={index}>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={160}
                ></Skeleton>
              </GridListTile>
            );
          })}
      </GridList>
    </Box>
  );
}

export default DogImagesSkeleton;
