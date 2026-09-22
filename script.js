// ===================================================
// AUTO OUEST PLUS 13 — data + interactions
// Add/edit a car by editing the CARS array below.
// Each car needs: id, name, year, tag, video (optional), photos[], specs[]
// ===================================================

const CARS = [
  {
    id: "mercedes-c220d",
    name: "Mercedes C220d",
    year: "2025",
    tag: "Berline",
    coverPhoto: "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc1.JPG",
    video: "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc%20video.MOV",
    photos: [
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc1.JPG",
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc2.JPG",
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc3.JPG",
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/merc4.JPG"
    ],
    quickSpecs: [
      { label: "Puissance", value: "197 ch" },
      { label: "0-100 km/h", value: "7,3 s" },
      { label: "Boîte", value: "9G-TRONIC" },
      { label: "Transmission", value: "RWD / 4MATIC" }
    ],
    specs: [
      { label: "Année", value: "2025" },
      { label: "Moteur", value: "4 cylindres en ligne turbodiesel de 1 993 cm³ (bloc OM 654)" },
      { label: "Puissance thermique", value: "197 ch (145 kW) à 3 600 tr/min" },
      { label: "Assistance électrique (EQ Boost)", value: "Alterno-démarreur intégré : boost temporaire de 20 ch et 200 Nm au démarrage et à l'accélération" },
      { label: "Couple maximal", value: "440 Nm disponibles dès 1 800 tr/min" },
      { label: "Transmission", value: "Propulsion (RWD) ou intégrale (4MATIC), boîte automatique 9G-TRONIC à 9 rapports" },
      { label: "0 à 100 km/h", value: "7,3 secondes" },
      { label: "Vitesse maximale", value: "245 km/h" }
    ]
  },
  {
    id: "audi-rs3",
    name: "Audi RS3",
    year: "2025",
    tag: "Compacte sportive",
    coverPhoto: "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/audi2.jpg",
    video: null,
    photos: [
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/audi2.jpg",
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/audi3.jpg"
    ],
    quickSpecs: [
      { label: "Puissance", value: "400 ch" },
      { label: "0-100 km/h", value: "3,8 s" },
      { label: "Boîte", value: "S tronic 7 rap." },
      { label: "Transmission", value: "quattro" }
    ],
    specs: [
      { label: "Année", value: "2025" },
      { label: "Moteur", value: "5 cylindres en ligne turbocompressé 2,5L TFSI — ordre d'allumage 1-2-4-5-3, sonorité inimitable" },
      { label: "Puissance", value: "400 ch (294 kW) — 401 hp selon les normes nord-américaines" },
      { label: "Couple maximal", value: "500 Nm disponibles sur une large plage de régimes" },
      { label: "Transmission", value: "Boîte automatique double embrayage S tronic à 7 rapports + transmission intégrale permanente quattro" },
      { label: "0 à 100 km/h", value: "3,8 secondes (3,4 à 3,6 s pour le 0-60 mph selon les tests)" },
      { label: "Vitesse maximale", value: "250 km/h (extensible à 290 km/h avec les packs dynamiques)" }
    ]
  },
  {
    id: "ford-raptor-r",
    name: "Ford Raptor R",
    year: "2025",
    tag: "Pick-up performance",
    coverPhoto: "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/raptor1.JPG",
    video: "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/raptor%20video.MOV",
    photos: [
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/raptor1.JPG",
      "https://pub-527e4c33205944c28ce56503dfeaf3bf.r2.dev/raptor2.JPG"
    ],
    quickSpecs: [
      { label: "Puissance", value: "720 ch" },
      { label: "0-60 mph", value: "3,6 s" },
      { label: "Boîte", value: "Auto 10 rap." },
      { label: "Transmission", value: "4x4 permanent" }
    ],
    specs: [
      { label: "Année", value: "2025" },
      { label: "Moteur", value: "V8 5,2 litres suralimenté par compresseur (bloc \"Carnivore\")" },
      { label: "Puissance", value: "720 chevaux — en hausse de 20 ch depuis la mise à jour du capot mieux ventilé" },
      { label: "Couple maximal", value: "868 Nm (640 lb-ft) disponibles à 4 250 tr/min" },
      { label: "Transmission", value: "Boîte automatique électronique à 10 rapports, transmission intégrale permanente 4x4 (boîte de transfert 4A / 4H / 4L / 2H)" },
      { label: "0 à 60 mph (~96 km/h)", value: "3,6 secondes — exceptionnel pour un véhicule de près de 2,7 tonnes" }
    ]
  }
];

const carGrid = document.getElementById("carGrid");
const overlay = document.getElementById("carOverlay");
const overlayContent = document.getElementById("overlayContent");
const overlayClose = document.getElementById("overlayClose");

function isVideoUrl(url){
  return /\.(mov|mp4|webm)$/i.test(url);
}

// ---------- Build car cards ----------
function renderCards(){
  carGrid.innerHTML = CARS.map(car => `
    <article class="car-card" data-id="${car.id}" tabindex="0" role="button" aria-label="Voir la fiche ${car.name}">
      <div class="car-card-media">
        <span class="car-card-tag">${car.tag}</span>
        <img src="${car.coverPhoto}" alt="${car.name}" loading="lazy">
      </div>
      <div class="car-card-body">
        <div>
          <div class="car-card-name">${car.name}</div>
          <div class="car-card-year">${car.year}</div>
        </div>
        <div class="car-card-specs">
          ${car.quickSpecs.map(s => `<div><strong>${s.value}</strong>${s.label}</div>`).join("")}
        </div>
        <div class="car-card-cta">Voir la fiche complète →</div>
      </div>
    </article>
  `).join("");

  carGrid.querySelectorAll(".car-card").forEach(card => {
    card.addEventListener("click", () => openCar(card.dataset.id));
    card.addEventListener("keypress", e => {
      if (e.key === "Enter") openCar(card.dataset.id);
    });
  });
}

// ---------- Open detail overlay (no page reload) ----------
function openCar(id){
  const car = CARS.find(c => c.id === id);
  if (!car) return;

  const mediaItems = [];
  if (car.video) mediaItems.push({ type: "video", src: car.video });
  car.photos.forEach(p => mediaItems.push({ type: "image", src: p }));

  overlayContent.innerHTML = `
    <p class="detail-eyebrow">${car.tag}</p>
    <h2 class="detail-title">${car.name}</h2>
    <p class="detail-year">Année ${car.year}</p>

    <div class="detail-gallery">
      <div class="main-media" id="mainMedia"></div>
      <div class="thumb-col" id="thumbCol"></div>
    </div>

    <div class="detail-body">
      <table class="spec-table">
        ${car.specs.map(s => `<tr><th>${s.label}</th><td>${s.value}</td></tr>`).join("")}
      </table>
      <aside class="detail-side">
        <h3>Intéressé par ce véhicule ?</h3>
        <p>Contactez-nous par téléphone pour organiser un essai ou obtenir plus d'informations.</p>
        <a class="btn btn-primary" href="tel:0770676795">Appeler le 0770 67 67 95</a>
      </aside>
    </div>
  `;

  const mainMedia = document.getElementById("mainMedia");
  const thumbCol = document.getElementById("thumbCol");

  function showMedia(item){
    if (item.type === "video"){
      mainMedia.innerHTML = `<video src="${item.src}" controls playsinline></video>`;
    } else {
      mainMedia.innerHTML = `<img src="${item.src}" alt="${car.name}">`;
    }
  }

  thumbCol.innerHTML = mediaItems.map((item, i) => `
    <div class="thumb ${item.type === "video" ? "video-thumb" : ""} ${i === 0 ? "active" : ""}" data-index="${i}">
      <img src="${item.type === "video" ? car.coverPhoto : item.src}" alt="">
    </div>
  `).join("");

  thumbCol.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbCol.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      showMedia(mediaItems[Number(thumb.dataset.index)]);
    });
  });

  showMedia(mediaItems[0]);

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".overlay-scroll").scrollTop = 0;
  history.pushState({ car: id }, "", `#${id}`);
}

function closeOverlay(){
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  const main = document.getElementById("mainMedia");
  if (main) main.innerHTML = "";
  if (location.hash) history.pushState({}, "", location.pathname + location.search);
}

overlayClose.addEventListener("click", closeOverlay);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("is-open")) closeOverlay();
});
window.addEventListener("popstate", () => {
  if (overlay.classList.contains("is-open")) closeOverlay();
});

// ---------- Mobile nav ----------
const burgerBtn = document.getElementById("burgerBtn");
burgerBtn.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("is-open");
});

// ---------- Init ----------
renderCards();

// Open a car directly if the page is loaded with a matching hash
window.addEventListener("DOMContentLoaded", () => {
  const id = location.hash.replace("#", "");
  if (CARS.some(c => c.id === id)) openCar(id);
});
