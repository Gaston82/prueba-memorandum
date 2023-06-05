import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      const expectedTitle = /popular titles/i;

      render(<HomePage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
