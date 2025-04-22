import React from "react"; // Add this line
import { render } from "@testing-library/react";
import About from "../components/About";

test("renders a <aside> element", () => {
  const { container } = render(<About />);
  expect(container.querySelector("aside")).not.toBeNull();
});
