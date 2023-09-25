import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login Component", () => {
  test("Render Login component", () => {
    render(<Login />);
    const usernameEle = screen.getByPlaceholderText(/username/i);
    expect(usernameEle).toBeInTheDocument();
  });

  test("Password input should be rendered", () => {
    render(<Login />);
    const passwordEle = screen.getByPlaceholderText(/password/i);
    expect(passwordEle).toBeInTheDocument();
  });
  test("Button input should be rendered", () => {
    render(<Login />);
    const btnEle = screen.getByRole("button");
    expect(btnEle).toBeInTheDocument();
  });
  test("username input should be empty", () => {
    render(<Login />);
    const usernameEl = screen.getByPlaceholderText(/username/i);

    expect(usernameEl.value).toBe("");
  });
  test("button should you disable", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
  test("error is invisible", () => {
    render(<Login />);
    expect(screen.getByTestId("error")).not.toBeVisible();
  });
  test("username input changes", () => {
    render(<Login />);
    const inputEle = screen.getByPlaceholderText(/username/i);
    const textValue = "testing";
    fireEvent.change(inputEle, { target: { value: textValue } });
    expect(inputEle.value).toBe(textValue);
  });
  test("password input changes", () => {
    render(<Login />);
    const passwordEle = screen.getByPlaceholderText(/password/i);
    const passwordValue = "emmanuel";
    fireEvent.change(passwordEle, { target: { value: passwordValue } });
    expect(passwordEle.value).toBe(passwordValue);
  });
  test("button is not disabled when there is an input", () => {
    render(<Login />);
    const buttonEle = screen.getByRole("button");
    const usernameEl = screen.getByPlaceholderText(/username/i);
    const passwordEle = screen.getByPlaceholderText(/password/i);
    const testVal = "testing";
    fireEvent.change(usernameEl, { target: { value: testVal } });
    fireEvent.change(passwordEle, { target: { value: testVal } });

    expect(buttonEle).not.toBeDisabled;
  });
  test("Loading is not displayed on the button", () => {
    render(<Login />);
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).not.toHaveTextContent(/loading../i);
  });
  test("Loading text is displayed when button is clicked", () => {
    render(<Login />);
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).toHaveTextContent(/click me/i);
  });
});
