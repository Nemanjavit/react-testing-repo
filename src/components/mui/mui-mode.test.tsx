import { render, screen } from "../../test-utils";
import MuiMode from "./mui-mode";
import AppProviders from "../providers/app-providers";

describe("MuiMode", () => {
  test("Renders text correctly", () => {
    render(<MuiMode />);

    const headingEl = screen.getByRole("heading");
    expect(headingEl).toHaveTextContent("dark mode");
  });
});
