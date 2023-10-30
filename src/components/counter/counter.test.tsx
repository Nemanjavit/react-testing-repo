import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Counter component", () => {
  test("Counter component renders correctly", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();

    const buttonEl = screen.getByRole("button", { name: "Increment" });
    expect(buttonEl).toBeInTheDocument();
  });

  test("Renders count of 0", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("0");
  });

  test("Renders a count of one after clicking the increment button", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const buttonEl = screen.getByRole("button", { name: "Increment" });
    await act(() => user.click(buttonEl));
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });

  test("Renders a count of two after clicking the increment button two times", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const buttonEl = screen.getByRole("button", { name: "Increment" });
    await act(() => user.click(buttonEl));
    await act(() => user.click(buttonEl));
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });

  test("Renders a count of ten after clicking set button", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const inputEl = screen.getByRole("spinbutton");
    await act(() => user.type(inputEl, "10"));
    expect(inputEl).toHaveValue(10);

    const setButtonEl = screen.getByRole("button", { name: "Set" });
    const countEl = screen.getByRole("heading");
    await act(() => user.click(setButtonEl));
    expect(countEl).toHaveTextContent("10");
  });

  test("Elements are focused in the right order", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButtonEl = screen.getByRole("button", { name: "Increment" });
    const inputEl = screen.getByRole("spinbutton");
    const setButtonEl = screen.getByRole("button", { name: "Set" });

    await user.tab();
    expect(incrementButtonEl).toHaveFocus();

    await user.tab();
    expect(inputEl).toHaveFocus();

    await user.tab();
    expect(setButtonEl).toHaveFocus();
  });
});
