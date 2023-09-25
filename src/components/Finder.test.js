import { render, screen } from "@testing-library/react";
import Finder from "./Finder";

describe("Finder component", () => {
  test("Renders heading", () => {
    render(<Finder />);
    const headingEle = screen.getByText("This is the heading");

    expect(headingEle).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(
      /This is the heading/i
    );
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
    // expect(screen.getAllPlaceholderText("Another test")).toBeInTheDocument();
    expect(screen.getByTitle("sum").textContent).toBe("9");
  });
});
