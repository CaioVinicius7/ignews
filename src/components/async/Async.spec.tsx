import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";

import { Async } from ".";

describe("Async Example", () => {
  it("Should be able to renders correctly and wait for button to be appears", async () => {
    render(<Async />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();

    expect(
      await screen.findByText(
        "First Button",
        {},
        {
          timeout: 3000
        }
      )
    ).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText("First Button")).toBeInTheDocument();
      },
      {
        timeout: 3000
      }
    );
  });

  it("Should be able to wait for button to be removed", async () => {
    render(<Async />);

    await waitForElementToBeRemoved(screen.queryByText("Second Button"), {
      timeout: 3000
    });
  });
});
