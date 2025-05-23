console.log('Sistema para Evaluar el Rendimiento Académico');

// Declaramos las notas obtenidas por un estudiante en cada evaluación
let parcial1 = 12;           // Nota del primer parcial (30%)
let parcial2 = 15;           // Nota del segundo parcial (30%)
let proyectoFinal = 18;      // Nota del proyecto final (40%)

//Mostramos las notas en pantalla
console.log('Nota Parcial 1:'+ parcial1);
console.log('Nota Parcial 2:'+ parcial2);
console.log('Nota Proyecto Final:'+ proyectoFinal);

// Calculamos la nota final segun los pesos establecidos
let notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (proyectoFinal * 0.4);

// Mostramos la nota final obtenida
console.log('Nota final:'+notaFinal);

// Evaluamos el resultado según las reglas establecidas
if (notaFinal >= 14) {
  // Si la nota es 14 o más, el estudiante aprueba directamente
  console.log("Resultado: Aprobado directamente");
  
} else if (notaFinal >= 10) {
  // Si la nota está entre 10 y 13.9, debe ir a recuperación
  console.log("Resultado: Va a recuperación");
} else {
  // Si la nota es menor a 10, pierde la materia
  console.log("Resultado: Pierde la materia");
}

