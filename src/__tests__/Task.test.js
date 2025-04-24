import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";
import { TASKS } from "../data"; // Import TASKS

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const taskElement = screen.getByText(/Buy rice/i);
  const deleteButton = taskElement.parentElement.querySelector(".delete");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/i)).not.toBeInTheDocument();
});
