import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greetings Component", () => {
  test("Render Hello on the  Screen", () => {
    render(<Greetings />);
    const helloElement = screen.getByText("Hello", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });
  test("Renders its good to see you on screen if button not clicked", () => {
    render(<Greetings />);
    const paraElement = screen.getByText("Good to see you", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
  });
  // test('renders "Changed" if button is clicked', () => {
  //   render(<Greetings />);
  //   const buttonElem = screen.getByRole("button");
  //   //action
  //   userEvent.click(buttonElem);

  //   const changedElement = screen.getByText("Changed", { exact: false });
  //   expect(changedElement).toBeInTheDocument();
  // });
});
