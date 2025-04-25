import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("<About />", () => {
  it("should render the image with default src and alt text", () => {
    render(<About about="Some about text" />);
    const imageElement = screen.getByAltText("blog logo");
    expect(imageElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/215"
    );
  });

  it("should render the image with provided src", () => {
    const imageUrl = "https://example.com/image.png";
    render(<About image={imageUrl} about="Some about text" />);
    const imageElement = screen.getByAltText("blog logo");
    expect(imageElement).toHaveAttribute("src", imageUrl);
  });

  it("should render the about text", () => {
    const aboutText = "A blog about coding";
    render(<About image="url" about={aboutText} />);
    const paragraphElement = screen.getByText(aboutText);
    expect(paragraphElement).toBeInTheDocument();
  });
});
