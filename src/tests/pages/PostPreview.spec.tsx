import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import PostPreview, { getStaticProps } from "../../pages/posts/preview/[slug]";
import { getPrismicClient } from "../../services/prismic";

const post = {
  slug: "my-new-post",
  title: "My New Post",
  content: "<p>post content</p>",
  updatedAt: "March, 10"
};

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn()
  };
});
jest.mock("next-auth/react");
jest.mock("../../services/prismic");

describe("Post Preview page", () => {
  it("Renders correctly", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "loading"
    });

    render(<PostPreview post={post} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
    expect(screen.getByText("post content")).toBeInTheDocument();
    expect(screen.getByText("Wanna continue reading?")).toBeInTheDocument();
  });

  it("Redirects user to full post when user is subscribed", async () => {
    const useSessionMocked = jest.mocked(useSession);
    const useRouterMocked = jest.mocked(useRouter);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce({
      data: {
        activeSubscription: "fake-active-subscription"
      }
    } as any);
    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any);

    render(<PostPreview post={post} />);

    expect(pushMock).toHaveBeenCalledWith("/posts/my-new-post");
  });

  it("Loads initial data", async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
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
              text: "Post content"
            }
          ]
        },
        last_publication_date: "04-01-2021"
      })
    } as any);

    const response = await getStaticProps({
      params: {
        slug: "my-new-post"
      }
    });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: "my-new-post",
            title: "My New Post",
            content: "<p>Post content</p>",
            updatedAt: "01 de abril de 2021"
          }
        }
      })
    );
  });
});
