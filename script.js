// site interactions

// atualiza ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// NAV mobile toggle
const navBtn = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Lighbox gallery
const thumbs = document.querySelectorAll('.gallery .thumb');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbClose = document.getElementById('lbClose');

thumbs.forEach(t => t.addEventListener('click', e => {
  const src = e.currentTarget.dataset.full || e.currentTarget.src;
  lbImage.src = src;
  lbImage.alt = e.currentTarget.alt || 'Imagem';
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden','false');
}));

lbClose.addEventListener('click', closeLb);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLb(); });
function closeLb(){
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden','true');
  lbImage.src = '';
}

// Simple scroll reveal (for sections)
const reveals = document.querySelectorAll('section');
function revealOnScroll(){
  reveals.forEach(s => {
    const top = s.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      s.style.opacity = 1;
      s.style.transform = 'none';
      s.style.transition = 'all .7s ease';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// CALCULO FINANCEIRO
function calcularLucro(){
  const m2 = parseFloat(document.getElementById('m2').value) || 0;
  const preco = parseFloat(document.getElementById('preco').value) || 0;
  const custo = parseFloat(document.getElementById('custo').value) || 0;
  const invest = parseFloat(document.getElementById('invest').value) || 0;
  const resultado = document.getElementById('resultado');

  if(m2 <= 0 || preco <= 0 || custo < 0){
    resultado.innerHTML = '⚠️ Preencha valores válidos.';
    return;
  }

  const lucroMensal = (preco - custo) * m2;
  const meses = lucroMensal > 0 ? (invest / lucroMensal) : Infinity;

  resultado.innerHTML = `<strong>💰 Lucro mensal estimado:</strong> R$ ${Number(lucroMensal).toLocaleString('pt-BR')}<br>
                         <strong>⏳ Retorno do investimento:</strong> ${isFinite(meses) ? meses.toFixed(1) + ' meses' : 'Não recupera com esses valores'}<br>
                         <small>Valores são estimativas e não substituem uma cotação técnica.</small>`;
    }
