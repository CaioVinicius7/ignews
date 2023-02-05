import { render, screen } from "@testing-library/react";

import Home from "../../pages";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/"
      };
    }
  };
});

jest.mock("next-auth/react", () => {
  return {
    useSession: () => {
      return {
        data: null,
        status: "loading"
      };
    }
  };
});

describe("Home page", () => {
  it("Renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "fake-price-id",
          amount: "$ 10,00"
        }}
      />
    );

    expect(screen.getByText("for $ 10,00 month")).toBeInTheDocument();
  });
});
