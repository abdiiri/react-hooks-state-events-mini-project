import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the App component", () => {
  render(<App />);
  // Use getByRole to specifically target the <h1> element
  expect(
    screen.getByRole("heading", { level: 1, name: /my awesome blog/i })
  ).toBeInTheDocument();
});
