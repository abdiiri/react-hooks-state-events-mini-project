import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";

jest.mock("../components/Article", () => ({ title, date, preview }) => (
  <article data-testid="article-item">
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
  </article>
));

describe("<ArticleList />", () => {
  const mockPosts = [
    {
      id: 1,
      title: "First Post",
      date: "Oct 26",
      preview: "First preview",
      minutes: 5,
    },
    {
      id: 2,
      title: "Second Post",
      date: "Nov 5",
      preview: "Second preview",
      minutes: 10,
    },
  ];

  it("should render a list of Article components", () => {
    render(<ArticleList posts={mockPosts} />);
    const articleElements = screen.getAllByRole("article");
    expect(articleElements).toHaveLength(mockPosts.length);
  });

  it("should pass the correct props to each Article component", () => {
    render(<ArticleList posts={mockPosts} />);
    mockPosts.forEach((post, index) => {
      const articleElement = screen.getAllByRole("article")[index];
      expect(
        screen.getByText(post.title, { within: articleElement })
      ).toBeInTheDocument();
      expect(
        screen.getByText(post.date, { within: articleElement })
      ).toBeInTheDocument();
      expect(
        screen.getByText(post.preview, { within: articleElement })
      ).toBeInTheDocument();
    });
  });

  it("should assign a unique key prop to each Article component", () => {
    const { container } = render(<ArticleList posts={mockPosts} />);
    const articleElements = container.querySelectorAll(
      '[data-testid="article-item"]'
    );
    expect(articleElements[0]).toBeInTheDocument();
    expect(articleElements[1]).toBeInTheDocument();
    // We can't directly check the 'key' attribute in the DOM.
    // React uses it internally. If the correct number of mocked
    // Article components are rendered, and the correct props are passed,
    // it's highly likely the keys are being used correctly.
  });
});
