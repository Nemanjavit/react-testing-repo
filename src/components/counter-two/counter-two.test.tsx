import { render, screen } from "@testing-library/react";
import CounterTwo from "./counter-two";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const user = userEvent.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(handleIncrement).toBeCalledTimes(1);
    expect(handleDecrement).toBeCalledTimes(1);
  });
});
