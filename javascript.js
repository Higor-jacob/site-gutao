// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in, .slide-up");
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// =========================
// CARROSSEL DE PROJETOS PDF
// =========================

const projetosPDF = [
  {
    titulo: "Indicação 001",
    descricao: "Criação de áreas de lazer nos bairros afastados.",
    pdf: "pdfs/projeto1.pdf",
    thumb: "thumbs/projeto1.png",
  },
  {
    titulo: "Indicação 002",
    descricao: "Implantação de ar-condicionado no Hospital Municipal.",
    pdf: "pdfs/projeto2.pdf",
    thumb: "thumbs/projeto2.png",
  },
  {
    titulo: "Indicação 003",
    descricao: "Programa de incentivo ao primeiro emprego.",
    pdf: "pdfs/projeto3.pdf",
    thumb: "thumbs/projeto3.png",
  },
  {
    titulo: "Indicação 004",
    descricao: "Revitalização de praças públicas.",
    pdf: "pdfs/projeto4.pdf",
    thumb: "thumbs/projeto4.png",
  },
];

// Criar card para cada PDF
function criarCardPDF(projeto) {
  const div = document.createElement("div");
  div.classList.add("projeto-card");
  div.setAttribute("data-aos", "zoom-in");
  div.innerHTML = `
    <a href="${projeto.pdf}" target="_blank" class="card-link">
      <img src="${projeto.thumb}" alt="${projeto.titulo}" class="img-card" />
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </a>
  `;
  return div;
}

// Ao carregar o DOM, montar os cards e ativar rolagem infinita
window.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselProjetos");

  if (carousel) {
    // Duplicar projetos para efeito de carrossel contínuo
    [...projetosPDF, ...projetosPDF].forEach((p) => {
      carousel.appendChild(criarCardPDF(p));
    });

    iniciarRolagemInfinita(carousel);
  }
});

// =========================
// Função de rolagem infinita lateral
// =========================
function iniciarRolagemInfinita(container) {
  let scrollSpeed = 1;
  let pause = false;

  container.addEventListener("mouseenter", () => (pause = true));
  container.addEventListener("mouseleave", () => (pause = false));

  function rolar() {
    if (!pause) {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
    requestAnimationFrame(rolar);
  }

  rolar();
}
