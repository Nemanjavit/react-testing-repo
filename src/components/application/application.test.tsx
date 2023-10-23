import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);
    const headingEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingEl).toBeInTheDocument();

    const sectionHeadingEl = screen.getByRole("heading", { level: 2 });
    expect(sectionHeadingEl).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", { name: /name/i });
    expect(nameEl).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("Name");
    expect(nameEl2).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", { name: "Bio" });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsAndConditionsEl = screen.getByRole("checkbox");
    expect(termsAndConditionsEl).toBeInTheDocument();

    const termsEl2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsEl2).toBeInTheDocument();

    const submitButtonEl = screen.getByRole("button");
    expect(submitButtonEl).toBeInTheDocument();

    const paragraphEl = screen.getByText("All fields are mandatory");
    expect(paragraphEl).toBeInTheDocument();
  });
});
