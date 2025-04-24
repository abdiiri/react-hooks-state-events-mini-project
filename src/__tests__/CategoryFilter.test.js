import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryFilter from "../components/CategoryFilter";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

describe("CategoryFilter", () => {
  test("renders the 'All' button as selected initially (if 'All' is the initial selectedCategory)", () => {
    render(
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={jest.fn()}
        selectedCategory={"All"}
      />
    );
    const allButton = screen.getByRole("button", { name: "All" });
    expect(allButton.classList.contains("selected")).toBe(true);
  });

  test("renders a different button as selected if a different selectedCategory is provided", () => {
    render(
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={jest.fn()}
        selectedCategory={"Code"}
      />
    );
    const codeButton = screen.getByRole("button", { name: "Code" });
    expect(codeButton.classList.contains("selected")).toBe(true);
    const allButton = screen.getByRole("button", { name: "All" });
    expect(allButton.classList.contains("selected")).toBe(false);
  });

  test("calls the onCategorySelect callback and adds 'selected' class on click", async () => {
    const onCategorySelectMock = jest.fn();
    render(
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={onCategorySelectMock}
        selectedCategory={"All"}
      />
    );

    const codeButton = screen.getByRole("button", { name: "Code" });
    fireEvent.click(codeButton);

    // Verify the callback is called with the correct argument
    expect(onCategorySelectMock).toHaveBeenCalledWith("Code");

    // Verify the 'selected' class is applied to the clicked button
    const updatedCodeButton = await screen.findByRole("button", {
      name: "Code",
    });
    expect(updatedCodeButton.classList.contains("selected")).toBe(true);
  });
});
