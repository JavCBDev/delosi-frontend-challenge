export function rotateSquareMatrix(matrix: number[][]): number[][] {
  const n = matrix.length;

  if (n === 0) {
    throw new Error("La matriz no puede estar vacía");
  }

  if (matrix.some(row => row.length !== n)) {
    throw new Error("La matriz debe ser cuadrada");
  }

  const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[n - j - 1][i] = matrix[i][j];
    }
  }

  return rotated;
}