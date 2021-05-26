import { GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

function DogButtonsSkeleton() {
  return (
    <GridList cellHeight={40} cols={4}>
      {Array(12)
        .fill(null)
        .map((_, index) => {
          return (
            <GridListTile key={index}>
              <Skeleton
                animation="wave"
                variant="text"
                width="100%"
                height={40}
              ></Skeleton>
            </GridListTile>
          );
        })}
    </GridList>
  );
}

export default DogButtonsSkeleton;
