import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container).not.toBeNull();
});
