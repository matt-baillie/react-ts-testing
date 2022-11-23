import React from "react";
import { render, screen } from "@testing-library/react";
import Person from "./components/Person";

test("renders a name", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent(/name is jack/i);
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
