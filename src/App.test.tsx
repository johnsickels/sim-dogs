import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

test("renders page title", async () => {
  render(<App />);

  // ready
  const h2Element = screen.getByText(/Dogs!/i);
  expect(h2Element).toBeInTheDocument();
  
  // loading
  const skeletonButtonElements = document.querySelector(".MuiSkeleton-root");
  expect(skeletonButtonElements).toBeInTheDocument();
  await waitForElementToBeRemoved(document.querySelector(".MuiSkeleton-root"));

  //loaded
  const firstButtonElement = screen.getByText(/affenpinscher/gi);
  expect(firstButtonElement).toBeInTheDocument();
});
