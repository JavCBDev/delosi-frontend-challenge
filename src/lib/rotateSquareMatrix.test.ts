import { rotateSquareMatrix } from "./rotateSquareMatrix";

describe("rotateSquareMatrix", () => {
  it("rota correctamente una matriz 2x2", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [2, 4],
      [1, 3],
    ];

    expect(rotateSquareMatrix(matrix)).toEqual(expected);
  });

  it("rota correctamente una matriz 3x3", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];

    expect(rotateSquareMatrix(matrix)).toEqual(expected);
  });

  it("lanza error si la matriz no es cuadrada", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(() => rotateSquareMatrix(matrix)).toThrow("La matriz debe ser cuadrada");
  });

  it("lanza error si la matriz está vacía", () => {
    const matrix: number[][] = [];
    expect(() => rotateSquareMatrix(matrix)).toThrow("La matriz no puede estar vacía");
  });
});