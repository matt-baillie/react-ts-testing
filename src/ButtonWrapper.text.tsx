import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWrapper from "./components/ButtonWrapper";

// test("Handles Click ", () => {
//   //   const user = userEvent.setup()

//   const onClick = jest.fn();
//   render(<ButtonWrapper onClick={onClick} title="Add Item" />);
//   const buttonElement = screen.getByText("Add Item");
//   fireEvent.click(buttonElement);
//   expect(onClick).toHaveBeenCalledTimes(0);
// });
test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
