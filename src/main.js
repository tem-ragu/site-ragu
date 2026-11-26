import './style.css';
import { iniciarAnalytics, track } from './analytics.js';

iniciarAnalytics();

// Vídeos do Instagram: só carregam quando a pessoa clica (mais rápido e
// nenhum dado vai para o Instagram antes disso).
document.querySelectorAll('[data-reel]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const id = botao.getAttribute('data-reel');
    if (!/^[A-Za-z0-9_-]{5,20}$/.test(id || '')) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.instagram.com/reel/${id}/embed/`;
    iframe.title = botao.getAttribute('aria-label') || 'Vídeo do Instagram';
    iframe.loading = 'lazy';
    iframe.allow = 'encrypted-media; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
    botao.replaceWith(iframe);
  });
});

// Pedido de acesso: monta a mensagem e abre o WhatsApp. Nada é salvo no site.
const form = document.querySelector('[data-form-acesso]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dados = new FormData(form);
    const limpa = (v) => String(v || '').replace(/[\u0000-\u001F]/g, ' ').trim().slice(0, 120);
    const nome = limpa(dados.get('nome'));
    const casa = limpa(dados.get('casa'));
    const whats = limpa(dados.get('whatsapp'));
    if (!nome || !casa) return;
    track('pedido_acesso');
    const texto = `Olá! Quero testar a ferramenta da Ragù.\nNome: ${nome}\nEstabelecimento: ${casa}\nWhatsApp: ${whats}`;
    window.open(`https://wa.me/5548988730018?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  });
}

document.querySelectorAll('[data-ano]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

// Menu do celular
const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
if (menuBtn && menu) {
  const fechar = () => { menu.classList.remove('aberto'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', String(aberto));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', fechar));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar(); });
}
