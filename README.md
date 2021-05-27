# SimDogs

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Node.js CI](https://github.com/johnsickels/sim-dogs/actions/workflows/node.js.yml/badge.svg)](https://github.com/johnsickels/sim-dogs/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/johnsickels/sim-dogs/branch/main/graph/badge.svg)](https://codecov.io/gh/johnsickels/sim-dogs)

## Challenge

Create a single-page application that allows a user to:
- Search for a specific breed of dog.
- If the search field is empty, display a list of the first 12 breeds available, sorted alpha-
betically.
- If the search field does not match any breeds, display a message that no breeds were found.
- While the list of breeds is loading, display a message that the breeds are loading.
- Select one of the matching results and view pictures of that breed.
- When a result is selected, mark the selection visually as being active.
- While the images of the selected breed are loading, display a message that the images are loading.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# production
$ yarn deploy
```

## Testing

```bash
$ yarn test
```

## Technology

- React Hooks
  - useState
  - useEffect
  - useQuery
- TypeScript
- MaterialUI

## Feedback / Contributing

- Author - [John Sickels](https://github.com/johnsickels)

## Notes

- Deciding on position, going to use Material-UI because that's what the client wants
- Deciding on positioning, going with flexbox because I always use grid and need to finally learn it
- Deciding if I should try fp or just hack it first and transfer to fs later
  - If I hack it, I get the gratitude that I can do it quickly
  - If I run through fp it might make me appreciate and understand it from the beginning instead of used as a translation
- Not finding anything familiar, some are recommending avoiding hooks, getting scared
- Deciding on skeletons for my loading indicator, Step 1 done
- Found GridList much more useful than balancing Flexbox and Grid
- Got images on click, need to consider lazy loading, so0o many images come back from the response
- Although the endpoint is different from the spec, `images/random/8` has better performance and better UX with fresh images on clicks of the same breed
  - It also opens the opportunity to lazy load
- Preloading images before setting state to "loaded" allows a cleaner image load UX
- Filter was easy, does `allDogs` even need state or should it be a constant variable?
- Need to clear images when a new filter is entered
  - Pushes state to a higher order component
- Active button
  - Tried with material-ui's ToggleButton component, but DOES NOT like to work with Grid
  - Either lose grid layout or lose function
  - Writing another state for activeButton
    - Unfortunately, this has to be higher order as well so we can clear active button when new search is entered
    - At this point, when is state _complex_ and should use Redux?
- Stlye button to match gradient in spec, ternary styles are ugly, moving to it's own component
- Refactors, comments, organizing
- Learning about useQuery, refactor my useEffect in main dash for button loading/error/data
  - Should not ( cannot? ) use it in my button onClick api call for images
    