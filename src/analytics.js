// Google Analytics com aviso de cookies (LGPD).
// O GA só carrega depois que a pessoa aceita. A escolha vale para o site e o app
// (cookie no domínio temragu.com.br).
const GA_ID = 'G-1M0CCTGP6M';
const NOME = 'ragu_consent';
let carregado = false;

function lerEscolha() {
  const m = document.cookie.match(/(?:^|; )ragu_consent=(\w+)/);
  return m ? m[1] : null;
}

function salvarEscolha(valor) {
  const dominio = location.hostname.endsWith('temragu.com.br') ? '; domain=.temragu.com.br' : '';
  const seguro = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${NOME}=${valor}; path=/; max-age=31536000; SameSite=Lax${dominio}${seguro}`;
}

function carregarGA() {
  if (carregado) return;
  carregado = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function track(evento, params = {}) {
  if (carregado && window.gtag) window.gtag('event', evento, params);
}

function mostrarAviso() {
  const aviso = document.createElement('div');
  aviso.className = 'aviso-cookies';
  aviso.setAttribute('role', 'region');
  aviso.setAttribute('aria-label', 'Aviso de cookies');
  aviso.innerHTML = `
    <p>Usamos cookies do Google Analytics para entender como as pessoas usam o site. Tudo bem?</p>
    <div class="aviso-cookies-botoes">
      <button type="button" data-escolha="denied">recusar</button>
      <button type="button" data-escolha="granted" class="aceitar">aceitar</button>
    </div>`;
  aviso.addEventListener('click', (e) => {
    const escolha = e.target.closest('[data-escolha]')?.getAttribute('data-escolha');
    if (!escolha) return;
    salvarEscolha(escolha);
    aviso.remove();
    if (escolha === 'granted') carregarGA();
  });
  document.body.appendChild(aviso);
}

export function iniciarAnalytics() {
  const escolha = lerEscolha();
  if (escolha === 'granted') carregarGA();
  else if (!escolha) mostrarAviso();

  // Cliques que importam
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const texto = (a.textContent || '').trim().slice(0, 60);
    if (/wa\.me|whatsapp\.com/.test(href)) track('clique_whatsapp', { texto });
    else if (href.includes('app.temragu.com.br')) track('clique_app', { texto });
    else if (href.startsWith('mailto:')) track('clique_email');
    else if (href.includes('instagram.com')) track('clique_instagram');
  });
}
