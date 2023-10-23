import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "Javascript", "CSS"];

  test("Renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });
  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 },
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
