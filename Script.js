// Cálculo de lucro
function calcularLucro() {
    const m2 = parseFloat(document.getElementById("m2").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const custo = parseFloat(document.getElementById("custo").value);

    if (isNaN(m2) || isNaN(preco) || isNaN(custo)) {
        document.getElementById("resultado").innerHTML = "⚠️ Preencha todos os campos corretamente.";
        return;
    }

    const lucroPorUnidade = preco - custo;
    const lucroMensal = lucroPorUnidade * m2;
    const investimentoInicial = 45000;
    const mesesParaRetorno = investimentoInicial / lucroMensal;

    document.getElementById("resultado").innerHTML =
        `💰 Lucro mensal estimado: <strong>R$ ${lucroMensal.toFixed(2)}</strong><br>` +
        `⏳ Retorno do investimento em aproximadamente <strong>${mesesParaRetorno.toFixed(1)}</strong> meses.`;
}

// Animação de fade-in ao rolar a página
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fader.classList.add('show');
        }
    });
});
