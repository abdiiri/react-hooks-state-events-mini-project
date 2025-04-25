import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

describe("<Article />", () => {
  const mockArticle = {
    title: "Test Article",
    date: "Dec 1, 2023",
    preview: "This is a test preview.",
    minutes: 7,
  };

  it("should render the title", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
        minutes={mockArticle.minutes}
      />
    );
    const titleElement = screen.getByRole("heading", {
      name: mockArticle.title,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the date", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
        minutes={mockArticle.minutes}
      />
    );
    const dateElement = screen.getByText(new RegExp(mockArticle.date), {
      selector: "small",
    });
    expect(dateElement).toBeInTheDocument();
  });

  it("should render the default date if no date prop is provided", () => {
    render(
      <Article
        title={mockArticle.title}
        preview={mockArticle.preview}
        minutes={mockArticle.minutes}
      />
    );
    const defaultDateElement = screen.getByText(/January 1, 1970/i, {
      selector: "small",
    });
    expect(defaultDateElement).toBeInTheDocument();
  });

  it("should render the preview", () => {
    render(
      <Article
        title={mockArticle.title}
        date={mockArticle.date}
        preview={mockArticle.preview}
        minutes={mockArticle.minutes}
      />
    );
    const previewElement = screen.getByText(mockArticle.preview);
    expect(previewElement).toBeInTheDocument();
  });

  it("should render the minutes to read with coffee cups for short articles", () => {
    render(
      <Article
        title="Short Article"
        date="Today"
        preview="Short preview"
        minutes={7}
      />
    );
    const minutesElement = screen.getByText(/☕️☕️ 7 min read/i, {
      selector: "small",
    });
    expect(minutesElement).toBeInTheDocument();
  });

  it("should render the minutes to read with bento boxes for long articles", () => {
    render(
      <Article
        title="Long Article"
        date="Today"
        preview="Long preview"
        minutes={35}
      />
    );
    const minutesElement = screen.getByText(/🍱🍱🍱🍱 35 min read/i, {
      selector: "small",
    });
    expect(minutesElement).toBeInTheDocument();
  });
});
