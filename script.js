const products = {
  auto: {
    kicker: "ALLIANZ AUTO",
    title: "Allianz Auto",
    symbol: "🚗",
    lead: "Protección para autos y pickups particulares, para que puedas manejar con mayor tranquilidad.",
    highlights: [["3.5 t", "hasta el límite indicado"], ["20 años", "antigüedad máxima"], ["24/7", "asistencia"]],
    bullets: [
      "Opciones Básico, Limitado, Amplio y Máster.",
      "Responsabilidad civil y gastos médicos para ocupantes.",
      "Robo total desde paquete Limitado y daños materiales desde Amplio.",
      "Asistencia vial y defensa legal.",
      "Opciones de auto sustituto/movilidad, equipo especial, adaptaciones y otras coberturas según paquete.",
      "Reparación en agencia hasta 5 años, sujeto a condiciones."
    ],
    note: "La cobertura final depende del paquete contratado, vehículo, zona, deducibles y condiciones de la póliza.",
    message: "Hola Raquel, me interesa cotizar Allianz Auto. ¿Me puedes ayudar con una cotización?"
  },
  ppr: {
    kicker: "OPTIMAXX PLUS · PPR",
    title: "OptiMaxx Plus",
    symbol: "📈",
    lead: "Una estrategia de ahorro de mediano y largo plazo pensada para construir recursos para tu retiro.",
    highlights: [["$2,000", "aportación mínima"], ["10–25", "años de plazo"], ["19", "portafolios"]],
    bullets: [
      "Aportaciones desde $2,000, de acuerdo con el plazo y esquema.",
      "Primeros 18 meses sin liquidez; desde el mes 19 puedes disponer bajo las condiciones aplicables.",
      "Puedes pausar aportaciones hasta 12 meses.",
      "Bono de lealtad que puede llegar hasta 100% de las aportaciones del primer año, según plazo y monto.",
      "Posibilidad de beneficios fiscales conforme a los artículos 93, 151 y 185 de ISR, sujeto a requisitos.",
      "Diferentes alternativas de inversión para construir tu estrategia."
    ],
    note: "Los beneficios fiscales, rendimientos, bonos, comisiones y condiciones dependen del plan y de los requisitos aplicables. No constituyen una garantía de rendimiento.",
    message: "Hola Raquel, me interesa conocer OptiMaxx Plus (PPR) para mi retiro. ¿Me puedes orientar?"
  },
  vida: {
    kicker: "OPTIMAXX PROTECCIÓN",
    title: "Seguro de Vida",
    symbol: "🛡️",
    lead: "Protege económicamente a quienes más quieres ante los eventos que contempla tu póliza.",
    highlights: [["18–70", "edad de aceptación"], ["500 mil+", "sumas aseguradas"], ["1–25", "años según opción"]],
    bullets: [
      "Opciones de plazo de 1, 5, 10, 20 y 25 años.",
      "Sumas aseguradas desde $500 mil y opciones superiores, sujetas a suscripción.",
      "Prima nivelada durante el plazo contratado.",
      "Opciones para no fumadores y valores garantizados, de acuerdo con el plan.",
      "Beneficio para gastos finales después de 2 años, sujeto a condiciones.",
      "Coberturas adicionales opcionales como muerte accidental, invalidez total y permanente y enfermedades graves."
    ],
    note: "Edad, suma asegurada, primas y coberturas disponibles están sujetas a suscripción y condiciones del producto.",
    message: "Hola Raquel, me interesa cotizar OptiMaxx Protección (seguro de vida). ¿Me puedes orientar?"
  },
  patrimonial: {
    kicker: "OPTIMAXX PATRIMONIAL",
    title: "OptiMaxx Patrimonial",
    symbol: "💼",
    lead: "Una alternativa de inversión patrimonial con enfoque moderado-dinámico y opciones de diversificación.",
    highlights: [["$250 mil+", "aportación inicial"], ["50+", "alternativas ETF"], ["72 h", "liquidez indicada"]],
    bullets: [
      "Aportación inicial desde $250,000 y aportaciones adicionales desde $50,000/$100,000 según condiciones.",
      "Liquidez a partir del quinto año.",
      "En emergencias, posibilidad de disposición anticipada hasta el porcentaje permitido, con comisión aplicable.",
      "Más de 50 alternativas de ETF.",
      "Bono de lealtad de 7.5% al quinto aniversario si se cumplen las condiciones y no hay retiros.",
      "Incluye cobertura por muerte accidental bajo las condiciones del producto."
    ],
    note: "Comisiones, disponibilidad, impuestos y condiciones de retiro dependen del plan contratado.",
    message: "Hola Raquel, me interesa conocer OptiMaxx Patrimonial. ¿Me puedes orientar?"
  },
  elite: {
    kicker: "OPTIMAXX ELITE",
    title: "OptiMaxx Elite",
    symbol: "◈",
    lead: "Una opción de inversión de perfil conservador, pensada para plazos cortos y medios con liquidez.",
    highlights: [["$300 mil+", "aportación inicial"], ["72 h", "liquidez indicada"], ["9", "alternativas de inversión"]],
    bullets: [
      "Aportación única desde $300,000.",
      "Aportaciones adicionales desde $10,000.",
      "Sin comisión de retiro de Allianz, sujeto a las condiciones del producto.",
      "Liquidez indicada de 72 horas y saldo mínimo de $15,000.",
      "Alternativas de inversión en MXN, USD y EUR.",
      "Beneficios fiscales posibles bajo requisitos y condiciones aplicables."
    ],
    note: "La retención fiscal, comisiones y disponibilidad dependen de las condiciones del plan y de la situación fiscal aplicable.",
    message: "Hola Raquel, me interesa conocer OptiMaxx Elite. ¿Me puedes orientar?"
  },
  residencial: {
    kicker: "ALLIANZ RESIDENCIAL",
    title: "Allianz Residencial",
    symbol: "⌂",
    lead: "Protección para casa o departamento, con opciones para propietario, inquilino o arrendador.",
    highlights: [["3", "modalidades"], ["6", "paquetes"], ["24/7", "asistencia hogar"]],
    bullets: [
      "Modalidades para propietario, inquilino y arrendador.",
      "Paquetes I, II, III, IV, V y Premier.",
      "Protecciones ante incendio, rayo, explosión, remoción de escombros y gastos extraordinarios, según paquete.",
      "Responsabilidad civil familiar y doméstica.",
      "Opciones adicionales para fenómenos hidrometeorológicos, terremoto y erupción volcánica.",
      "Asistencia para el hogar 24/7 y beneficios adicionales sujetos al plan."
    ],
    note: "La vivienda debe cumplir las características de aceptación y uso establecidas. No aplica para ciertos usos comerciales, Airbnb, inmuebles desocupados u otras situaciones restringidas.",
    message: "Hola Raquel, me interesa cotizar Allianz Residencial para mi hogar. ¿Me puedes orientar?"
  }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const homeView = $("#homeView");
const productsView = $("#productsView");
const detailView = $("#detailView");

function show(view) {
  [homeView, productsView, detailView].forEach(v => v.classList.add("hidden"));
  view.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
}

function openProducts(){ show(productsView); }
function goHome(){ show(homeView); }
function goProducts(){ show(productsView); }

function openProduct(key){
  const p = products[key];
  if(!p) return;
  $("#detailSymbol").textContent = p.symbol;
  $("#detailKicker").textContent = p.kicker;
  $("#detailTitle").textContent = p.title;
  $("#detailLead").textContent = p.lead;

  $("#detailHighlights").innerHTML = p.highlights.map(([a,b]) =>
    `<div class="highlight"><b>${a}</b><span>${b}</span></div>`
  ).join("");

  $("#detailBullets").innerHTML = p.bullets.map(x => `<li>${x}</li>`).join("");
  $("#detailNote").textContent = p.note;
  $("#quoteBtn").href = "https://wa.me/52441215877?text=" + encodeURIComponent(p.message);
  show(detailView);
}

$$("[data-open-products]").forEach(el => el.addEventListener("click", openProducts));
$$("[data-go-home]").forEach(el => el.addEventListener("click", goHome));
$$("[data-go-products]").forEach(el => el.addEventListener("click", goProducts));
$$("[data-product]").forEach(el => el.addEventListener("click", () => openProduct(el.dataset.product)));

const shareTop = $("#shareTop");
shareTop.addEventListener("click", async () => {
  const shareData = {
    title: "Lic. Raquel Fuentes | Agente de seguros",
    text: "Conoce mis productos de seguros e inversión.",
    url: window.location.href
  };
  try{
    if(navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(window.location.href);
      $("#toast").classList.add("show");
      setTimeout(() => $("#toast").classList.remove("show"), 1800);
    }
  }catch(e){}
});

// Cover carousel: subtle automatic change.
const covers = $$(".cover-img");
const dots = $("#coverDots");
covers.forEach((_, i) => {
  const dot = document.createElement("i");
  if(i === 0) dot.classList.add("active");
  dots.appendChild(dot);
});
const coverDots = [...dots.children];
let coverIndex = 0;
setInterval(() => {
  covers[coverIndex].classList.remove("active");
  coverDots[coverIndex].classList.remove("active");
  coverIndex = (coverIndex + 1) % covers.length;
  covers[coverIndex].classList.add("active");
  coverDots[coverIndex].classList.add("active");
}, 4500);

// Initial loading screen.
window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 950);
});
