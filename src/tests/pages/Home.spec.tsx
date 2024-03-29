import { render, screen } from "@testing-library/react";

import Home, { getStaticProps } from "../../pages";
import { stripe } from "../../services/stripe";

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

jest.mock("../../services/stripe");

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

  it("Loads initial data", async () => {
    const retrieveStripePricesMocked = jest.mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockReturnValueOnce({
      id: "fake-price-id",
      unit_amount: 1000
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fake-price-id",
            amount: "$10.00"
          }
        }
      })
    );
  });
});
