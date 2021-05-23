# SimDogs

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview

Create a single-page application that allows a user to:
- Search for a specific breed of dog.
- If the search field is empty, display a list of the first 12 breeds available, sorted alpha-
betically.
- If the search field does not match any breeds, display a message that no breeds were found.
- While the list of breeds is loading, display a message that the breeds are loading.
- Select one of the matching results and view pictures of that breed.
- When a result is selected, mark the selection visually as being active.
- While the images of the selected breed are loading, display a message that the images are loading.

## Notes

- Deciding on position, going to use Material-UI because that's what the client wants
- Deciding on positioning, going with flexbox because I always use grid and need to finally learn it
- Deciding if I should try fp or just hack it first and transfer to fs later
  - If I hack it, I get the gratitude that I can do it quickly
  - If I run through fp it might make me appreciate and understand it from the beginning instead of used as a translation
- Not finding anything familiar, some are recommending avoiding hooks, getting scared