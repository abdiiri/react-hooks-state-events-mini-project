import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

test("renders without crashing", () => {
  const mockPosts = [
    { id: 1, title: "Post 1", date: "2025-04-22", preview: "Preview 1" },
    { id: 2, title: "Post 2", date: "2025-04-21", preview: "Preview 2" },
  ];

  const { container } = render(<ArticleList posts={mockPosts} />);
  expect(container).not.toBeNull();
});
