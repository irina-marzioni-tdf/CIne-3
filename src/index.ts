let cantidadButacas: number = Number(
  prompt("ingrese la cantidad de butacas del cine")
);
let butacasCine: boolean[] = new Array(cantidadButacas);

function getRndInteger(min, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorioBoolean(): boolean {
  let nroAleatorio: number = getRndInteger(1, 2);
  switch (nroAleatorio) {
    case 1:
      return true;
    case 2:
      return false;
  }
}

function cargarVector(vector: boolean[], cantidad: number) {
  for (let indice = 0; indice < cantidad; indice++) {
    vector[indice] = aleatorioBoolean();
  }
}

function contarButacas(
  vector: boolean[],
  cantidad: number,
  estado: boolean
): number {
  let indice: number;
  let contador: number = 0;
  for (indice = 0; indice < cantidad; indice++) {
    if (vector[indice] === estado) {
      contador++;
    }
  }
  return contador;
}

cargarVector(butacasCine, butacasCine.length);
console.log(
  "cantidad Vacias",
  contarButacas(butacasCine, butacasCine.length, false)
);
console.log(
  "cantidad Ocupadas",
  contarButacas(butacasCine, butacasCine.length, true)
);
