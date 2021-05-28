import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders skeleton, then buttons", async () => {
  render(<App />);

  // ready
  const h2Element = screen.getByText(/Dogs!/i);
  expect(h2Element).toBeInTheDocument();

  // loading
  const skeletonButtonElements = document.querySelector(".MuiSkeleton-root");
  expect(skeletonButtonElements).toBeInTheDocument();
  await waitForElementToBeRemoved(document.querySelector(".MuiSkeleton-root"));

  // loaded
  const firstButtonElement = screen.getByText(/affenpinscher/gi);
  expect(firstButtonElement).toBeInTheDocument();
});

test("filters buttons on input change", async () => {
  render(<App />);

  await waitForElementToBeRemoved(document.querySelector(".MuiSkeleton-root"));

  const allDogButtons = screen.getAllByRole("button");
  expect(allDogButtons.length).toBe(12);

  userEvent.type(screen.getByRole("textbox"), "corgi");

  const oneDogButton = screen.getAllByRole("button");
  expect(oneDogButton.length).toBe(1);
});

test("shows images when clicked", async () => {
  render(<App />);

  await waitForElementToBeRemoved(document.querySelector(".MuiSkeleton-root"));

  const allDogButtons = screen.getAllByRole("button");
  const firstDogButton = allDogButtons[0];

  fireEvent.click(firstDogButton);

  setTimeout(() => {
    const allDogImages = screen.getAllByRole("image");
    expect(allDogImages.length).toBeGreaterThan(1);
  }, 3000);
});
