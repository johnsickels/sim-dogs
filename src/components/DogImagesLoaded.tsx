import { Box, GridList, GridListTile } from "@material-ui/core";

interface IProps {
  images: string[];
}

function DogImagesLoaded({ images }: IProps) {
  return (
    <Box p={2} style={{ backgroundColor: "#dedede" }}>
      <GridList cellHeight={160} cols={4}>
        {images.map((src, index) => {
          return (
            <GridListTile key={index}>
              <img src={src} alt={`dog-${index}`} />
            </GridListTile>
          );
        })}
      </GridList>
    </Box>
  );
}

export default DogImagesLoaded;
