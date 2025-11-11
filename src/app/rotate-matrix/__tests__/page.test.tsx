import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RotateMatrixPage from "../page";

describe("RotateMatrixPage", () => {
  it("should show correct heading", () => {
    render(<RotateMatrixPage />);
    expect(screen.getByText(/Rotar Matriz/i)).toBeInTheDocument();
  });

  it("should create a square matrix based on the size", async () => {
    render(<RotateMatrixPage />);
    const user = userEvent.setup();

    const sizeInput = screen.getByLabelText(/tamaño/i);
    const createButton = screen.getByRole("button", { name: /crear matriz/i });

    await user.clear(sizeInput);
    await user.type(sizeInput, "3");
    await user.click(createButton);

    const inputs = screen.getAllByRole("spinbutton");
    expect(inputs).toHaveLength(10);
  });

  it("should rotate correctly a matrix of 2x2", async () => {
    render(<RotateMatrixPage />);
    const user = userEvent.setup();

    const sizeInput = screen.getByLabelText(/tamaño/i);
    const createButton = screen.getByRole("button", { name: /crear matriz/i });

    await user.clear(sizeInput);
    await user.type(sizeInput, "2");
    await user.click(createButton);

    const allInputs = screen.getAllByRole("spinbutton").slice(1);

    await user.clear(allInputs[0]); await user.type(allInputs[0], "1");
    await user.clear(allInputs[1]); await user.type(allInputs[1], "2");
    await user.clear(allInputs[2]); await user.type(allInputs[2], "3");
    await user.clear(allInputs[3]); await user.type(allInputs[3], "4");

    const rotateButton = screen.getByRole("button", { name: /rotar matriz/i });
    await user.click(rotateButton);

    const rotatedValues = ["2", "4", "1", "3"];
    rotatedValues.forEach(value => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});