document.getElementById('notaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let parcial1 = parseFloat(document.getElementById('parcial1').value);
  let parcial2 = parseFloat(document.getElementById('parcial2').value);
  let proyectoFinal = parseFloat(document.getElementById('proyectoFinal').value);

  let notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (proyectoFinal * 0.4);
  let mensaje = `Nota final: ${notaFinal.toFixed(2)}<br>`;

  if (notaFinal >= 14) {
    mensaje += "<span class='text-success'>Resultado: Aprobado directamente ✅</span>";
  } else if (notaFinal >= 10) {
    mensaje += "<span class='text-warning'>Resultado: Va a recuperación ⚠️</span>";
  } else {
    mensaje += "<span class='text-danger'>Resultado: Pierde la materia ❌</span>";
  }

  document.getElementById('resultado').innerHTML = mensaje;
});
