document.getElementById('calcBtn').addEventListener('click', () => {
  const m = parseFloat(document.getElementById('meters').value);
  const p = parseFloat(document.getElementById('price').value);
  const c = parseFloat(document.getElementById('cost').value);
  const i = parseFloat(document.getElementById('initial').value);

  const lucroPorM2 = p - c;
  const lucroMensal = m * lucroPorM2;
  const retorno = (i / lucroMensal).toFixed(1);

  document.getElementById('resultado').innerHTML = `
    Lucro por m²: R$ ${lucroPorM2.toLocaleString()}<br>
    Lucro mensal: R$ ${lucroMensal.toLocaleString()}<br>
    Retorno do investimento: ${retorno} meses
  `;
});
