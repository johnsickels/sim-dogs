import { Box, GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

interface IProps {
  images: string[];
}

function DogImages({ images }: IProps) {
  return (
    <Box m={1} p={1}>
      {images.length ? (
        <GridList cellHeight={160} cols={4}>
          {images.map((src, index) => {
            return (
              <GridListTile key={index}>
                <img src={src} alt={`dog-${index}`} />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
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
      )}
    </Box>
  );
}

export default DogImages;
