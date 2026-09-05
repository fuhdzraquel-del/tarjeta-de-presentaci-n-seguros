const WHATSAPP = '52441215877';

const products = {
  auto: {
    icon: '🚘', tag: 'Seguro de auto', title: 'Allianz Auto',
    subtitle: 'Protección para autos y pick ups particulares, con asistencia vial y defensa jurídica.',
    summary: 'Para vehículos particulares de hasta 20 años de antigüedad. Protección en México y EUA, con Responsabilidad Civil en Canadá.',
    highlights: [
      'Paquetes: Básico, Limitado, Amplio y Máster.',
      'Responsabilidad Civil por daños a terceros.',
      'Gastos Médicos para ocupantes.',
      'Robo Total desde paquete Limitado.',
      'Daños Materiales desde paquete Amplio.',
      'Asistencia vial: grúa, cambio de neumático, paso de corriente y envío de combustible.',
      'Defensa jurídica y apoyo en caso de accidente o robo.',
      'Opcionales según paquete: agencia, robo parcial, equipo especial y eliminación de deducible.'
    ],
    cta: 'Quiero cotizar mi seguro de auto'
  },
  ppr: {
    icon: '◈', tag: 'Retiro · PPR', title: 'OptiMaxx Plus',
    subtitle: 'Un plan personal de retiro para construir una meta de largo plazo con flexibilidad y posibles beneficios fiscales.',
    summary: 'Aportaciones desde $2,000 pesos en planes de 15 a 25 años; acceso a distintos portafolios y opciones de protección.',
    highlights: [
      'Edad mínima de contratación: 18 años.',
      'Plazos de 10 a 25 años, según esquema.',
      'Aportaciones desde $2,000 pesos en planes de 15 a 25 años.',
      'Periodo de descanso de hasta 12 meses, sujeto a condiciones.',
      '19 portafolios de inversión y posibilidad de diversificación.',
      'Liquidez a partir del mes 19, con condiciones y costo de retiro aplicable.',
      'Posibles beneficios fiscales según el artículo de ISR elegido y requisitos aplicables.',
      'Pensado para retiro, independencia financiera y metas de largo plazo.'
    ],
    cta: 'Quiero conocer mi PPR'
  },
  vida: {
    icon: '♡', tag: 'Protección familiar', title: 'OptiMaxx Protección',
    subtitle: 'Seguro de vida para proteger la estabilidad económica de tu familia y tus planes de vida.',
    summary: 'Opciones de contratación de 18 a 70 años, con distintos plazos, sumas aseguradas y coberturas adicionales.',
    highlights: [
      'Suma asegurada desde $500,000 hasta $20,000,000 pesos, sujeta a condiciones.',
      'Plazos de 1, 5, 10, 20 o 25 años.',
      'Prima nivelada durante el plazo contratado.',
      'Descuento para no fumadores, sujeto a requisitos.',
      'Valores garantizados bajo las condiciones de la póliza.',
      'Coberturas adicionales: muerte accidental, pérdidas orgánicas, invalidez y enfermedades graves.',
      'Asistencia funeraria y apoyo en traslados, según condiciones.'
    ],
    cta: 'Quiero proteger a mi familia'
  },
  patrimonial: {
    icon: '◉', tag: 'Inversión', title: 'OptiMaxx Patrimonial',
    subtitle: 'Una alternativa para patrimonios que buscan diversificación y un horizonte de inversión de largo plazo.',
    summary: 'Apertura desde $250,000 pesos, con alternativas de inversión en ETFs y posibilidad de aportaciones adicionales.',
    highlights: [
      'Monto mínimo de apertura: $250,000 pesos.',
      'Aportación única y aportaciones adicionales opcionales.',
      'Más de 50 alternativas de inversión en ETFs.',
      'Liquidez diseñada para un horizonte posterior al quinto año.',
      'Bono de fidelidad de 7.5% sobre la aportación inicial, sujeto a condiciones.',
      'Fideicomiso con beneficios de protección patrimonial.',
      'Seguro incluido contra muerte accidental con prima indicada en las condiciones.'
    ],
    cta: 'Quiero conocer OptiMaxx Patrimonial'
  },
  elite: {
    icon: '◆', tag: 'Inversión · Liquidez', title: 'OptiMaxx Elite',
    subtitle: 'Una alternativa de inversión para quienes buscan liquidez en el corto o mediano plazo y estrategia patrimonial.',
    summary: 'Apertura desde $300,000 pesos, con alternativas en pesos, dólares y euros.',
    highlights: [
      'Monto mínimo de apertura: $300,000 pesos.',
      'Aportación única y aportaciones adicionales opcionales desde $10,000.',
      'Disponibilidad del dinero en aproximadamente 72 horas, sujeto a condiciones.',
      '9 alternativas de inversión en 3 monedas.',
      'Cambio de alternativa una vez al mes sin costo, sujeto a condiciones.',
      'Posibles ventajas fiscales si se cumplen los requisitos aplicables.',
      'Seguro incluido contra muerte accidental con prima indicada en las condiciones.'
    ],
    cta: 'Quiero conocer OptiMaxx Elite'
  },
  residencial: {
    icon: '⌂', tag: 'Hogar', title: 'Allianz Residencial',
    subtitle: 'Protección para casa o departamento, pertenencias, familia y responsabilidades en el hogar.',
    summary: 'Tres modalidades: Propietario, Inquilino y Arrendador. Se ofrece en seis paquetes, incluido Premier.',
    highlights: [
      'Protección para propietarios, inquilinos y arrendadores, según modalidad.',
      'Incendio, rayo y explosión para edificio y contenidos, sujeto a sumas aseguradas.',
      'Responsabilidad Civil Familiar y Doméstica.',
      'Robo de menaje, objetos personales, joyas y otras coberturas según paquete.',
      'Equipo electrónico fijo y portátil según paquete.',
      'Asistencias 24/7: plomería, electricidad, cerrajero, fuga de gas y más.',
      'Opcionales: fenómenos hidrometeorológicos, terremoto y erupción volcánica.',
      'Beneficios adicionales de protección familiar y mascotas, según condiciones.'
    ],
    cta: 'Quiero cotizar mi seguro de hogar'
  }
};

const catalogOrder = ['auto', 'ppr', 'vida', 'patrimonial', 'elite', 'residencial'];

function whatsappUrl(productName) {
  const text = `Hola Raquel, me interesa recibir una cotización o asesoría sobre ${productName}.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = catalogOrder.map(key => {
    const p = products[key];
    const popular = key === 'auto' || key === 'ppr';
    return `<button class="catalog-item" data-product-open="${key}">
      <div class="ci-icon">${p.icon}</div>
      <div class="ci-tag">${popular ? 'Destacado · ' : ''}${p.tag}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
    </button>`;
  }).join('');
}

function renderDetail(key) {
  const p = products[key];
  document.getElementById('productDetail').innerHTML = `
    <div class="detail-top">
      <div class="detail-icon">${p.icon}</div>
      <div>
        <div class="detail-tag">${p.tag}</div>
        <h2 class="detail-title" id="productTitle">${p.title}</h2>
        <p class="detail-subtitle">${p.subtitle}</p>
      </div>
    </div>
    <div class="detail-layout">
      <div>
        <h4>Lo más importante</h4>
        <ul>${p.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <aside class="detail-side">
        <h4>¿Quieres una cotización?</h4>
        <p>Cuéntame qué necesitas y te contacto por WhatsApp para revisar tu caso y explicarte las opciones disponibles.</p>
        <a class="quote-btn" href="${whatsappUrl(p.title)}" target="_blank" rel="noopener">${p.cta} →</a>
      </aside>
    </div>
    <div class="detail-note">Información general para orientación comercial. La contratación, coberturas, exclusiones, sumas aseguradas, costos, rendimientos, beneficios fiscales, aceptación y demás condiciones dependen de la documentación contractual vigente y del análisis correspondiente de Allianz.</div>
  `;
}

function openModal(id) {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  const modal = document.getElementById(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModals() {
  document.querySelectorAll('.modal').forEach(m => { m.classList.remove('open'); m.setAttribute('aria-hidden','true'); });
  document.body.style.overflow = '';
}

renderCatalog();
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('click', (event) => {
  const catalogButton = event.target.closest('[data-open-catalog]');
  const productButton = event.target.closest('[data-product-open]');
  const closeButton = event.target.closest('[data-close-modal]');
  if (catalogButton) openModal('catalogModal');
  if (productButton) { renderDetail(productButton.dataset.productOpen); openModal('productModal'); }
  if (closeButton) closeModals();
});

document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModals(); });

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 6500);

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1450);
});
