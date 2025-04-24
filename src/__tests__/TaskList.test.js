import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASKS} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(TASKS.length);
});
