import { render, screen } from "@testing-library/react";

import Posts, { getStaticProps } from "../../pages/posts";
import { getPrismicClient } from "../../services/prismic";

const posts = [
  {
    slug: "my-new-post",
    title: "My New Post",
    excerpt: "post excerpt",
    updatedAt: "March, 10"
  }
];

jest.mock("../../services/prismic");

describe("Posts page", () => {
  it("Renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
    expect(screen.getByText("post excerpt")).toBeInTheDocument();
    expect(screen.getByText("March, 10")).toBeInTheDocument();
  });

  it("Loads initial data", async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "my-new-post",
            data: {
              title: [
                {
                  type: "heading",
                  text: "My New Post"
                }
              ],
              content: [
                {
                  type: "paragraph",
                  text: "Post excerpt"
                }
              ]
            },
            last_publication_date: "04-01-2021"
          }
        ]
      })
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "my-new-post",
              title: "My New Post",
              excerpt: "Post excerpt",
              updatedAt: "01 de abril de 2021"
            }
          ]
        }
      })
    );
  });
});
