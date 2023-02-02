import { render } from "@testing-library/react";

import { Header } from ".";

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
    useSession() {
      return [null, false];
    }
  };
});

describe("Header component", () => {
  it("Renders correctly", () => {
    const { getByText } = render(<Header />);

    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("news")).toBeInTheDocument();
  });
});
