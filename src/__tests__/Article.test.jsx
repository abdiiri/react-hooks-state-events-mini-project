import React from "react";
import { render } from "@testing-library/react";
import Article from "../components/Article";

test("renders a <article> element", () => {
  const { container } = render(
    <Article title="Components 101" date="December 15, 2020" />
  );
  expect(container.querySelector("article")).not.toBeNull();
});
