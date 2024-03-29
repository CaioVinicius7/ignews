import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";

import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("SignInButton component", () => {
  it("Renders correctly when user is not authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated"
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("Renders correctly when user is not authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "CaioVinicius7",
          email: "caio1525pereira@gmail.com"
        },
        expires: "fake expires"
      },
      status: "authenticated"
    });

    render(<SignInButton />);

    expect(screen.getByText("CaioVinicius7")).toBeInTheDocument();
  });
});
