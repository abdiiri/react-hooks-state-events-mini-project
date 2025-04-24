import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("renders the correct child components", () => {
  render(<App />);
  expect(screen.getByText("Task List")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: CATEGORIES[0] })
  ).toBeInTheDocument();
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("form")).toBeInTheDocument();
});
