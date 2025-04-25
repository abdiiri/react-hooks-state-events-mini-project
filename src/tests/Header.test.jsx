import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("<Header />", () => {
  it("should render the blog name", () => {
    const blogName = "My Awesome Blog";
    render(<Header name={blogName} />);
    const headingElement = screen.getByRole("heading", { name: blogName });
    expect(headingElement).toBeInTheDocument();
  });
});
