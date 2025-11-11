"use client";

import Head from "next/head";
import { useState } from "react";

export default function RotateMatrix() {

  const [matrixSize, setMatrixSize] = useState(2);
  const [error, setError] = useState<string | null>('');
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [rotatedMatrix, setRotatedMatrix] = useState<number[][] | null>(null)

  const createMatrix = () => {
    if(matrixSize <= 0 || matrixSize % 1 !== 0){
      setError('El tamaño de la matriz debe ser un valor entero y mayor a 0');
      return;
    }
    setError(null);
    setMatrix(Array.from({ length: matrixSize }, () => Array(matrixSize).fill(0)));
    setRotatedMatrix(null);
  }

  const handleMatrixInputChange = (row: number, col: number, value: string) => {
    const newMatrix = matrix.map(m => [...m]);
    newMatrix[row][col] = Number(value);
    setMatrix(newMatrix);
  }

  const handleRotate = () => {
    if(matrix.length === 0){
      setError('Primero crea una matriz.');
      return;
    }
    const isSquare = matrix.every((row) => row.length === matrix.length);
    const hasInvalid = matrix.some((row) => row.some((v) => Number.isNaN(v)));

    if (!isSquare) {
      setError("La matriz debe ser cuadrada.");
      setRotatedMatrix(null);
      return;
    }

    if (hasInvalid) {
      setError("Todos los elementos deben ser números válidos.");
      setRotatedMatrix(null);
      return;
    }

    setError(null);
    const rotatedMatrix = rotateMatrix(matrix);
    setRotatedMatrix(rotatedMatrix);
  }

  const rotateMatrix = (matrix: number[][]): number[][] => {
    const N = matrix.length;
    const rotated: number[][] = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        rotated[N - j - 1][i] = matrix[i][j];
      }
    }
    return rotated;
  }

  return (
    <>
      <Head>
        <title>Rotar matriz | Recursos y Herramientas WEB</title>
        <meta name="description" content="Rotar matriz en sentido anti-horario" />
        <meta property="og:title" content="Rotar matriz" />
        <meta property="og:description" content="Rota una matriz de números en sentido anti-horario" />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="text-5xl font-bold mb-6">Rotar matriz</h1>
      <section>
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="matrixSize">Tamaño de la matriz (NxN):</label>
          <input type="number" min={1} name="matrixSize" id="matrixSize" className="border rounded w-16 px-2 py-1" value={matrixSize} onChange={e => setMatrixSize(Number(e.target.value))}/>
          <button className="bg-blue-500 text-white rounded cursor-pointer px-3 py-1 hover:bg-blue-600" onClick={createMatrix}>Crear Matriz</button>
        </div>
        { matrix.length > 0 && !error && (
          <div className="mb-4">
            {matrix.map((row, i) => (
              <div key={i} className="flex gap-2 mb-1">
                {row.map((value, j) => (
                  <input key={j} type="number" className="border rounded px-2 py-1 w-16 text-center" value={value} onChange={e => handleMatrixInputChange(i, j, e.target.value)} />
                ))}
              </div>
            ))}
          </div>
        )}
        { error && <span className="text-red-500 font-bold">{error}</span>}
        { matrix.length > 0 && !error && <button className="bg-green-500 text-white px-4 py-2 mb-4 rounded hover:bg-green-600 cursor-pointer" onClick={handleRotate}>Rotar Matriz</button>}

        {rotatedMatrix && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Matriz Rotada 90º (anti-horario)</h2>
            {rotatedMatrix.map((row, i) => (
              <div key={i} className="flex gap-2 mb-1">
                {row.map((value, j) => (
                  <div key={j} className="w-16 h10 flex items-center justify-center border rounded bg-gray-100">{value}</div>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}