let butacasCine: boolean[] = new Array(200);

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

function cargarVector(v: boolean[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = aleatorioBoolean();
  }
}

function contarButacas(
  v: boolean[],
  cantidad: number,
  estado: boolean
): number {
  let indice: number;
  let contador: number = 0;
  for (indice = 0; indice < cantidad; indice++) {
    if (v[indice] === estado) {
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
