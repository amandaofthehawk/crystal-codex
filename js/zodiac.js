/* Crystal Codex — zodiac hub (index) and individual sign detail rendering
   for zodiac.html. Each sign gets its own shareable URL via hash routing
   (zodiac.html#aries), rendered as a full detail view in place of the hub
   grid -- functionally its own "page" without duplicating markup per sign. */

const ELEMENT_ACCENT = { "Fire": "yellow", "Earth": "green", "Air": "blue", "Water": "rose" };

function findZodiacSign(id) {
  return ZODIAC_SIGNS_DATA.find(s => s.id === id);
}

function findZodiacCrystal(id) {
  return (typeof CRYSTALS !== "undefined" ? CRYSTALS : []).find(c => c.id === id);
}

function matchingCrystals(signName) {
  return (typeof CRYSTALS !== "undefined" ? CRYSTALS : [])
    .filter(c => c.zodiac.some(z => z === signName))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function zodiacHubCardHTML(sign) {
  const accent = ELEMENT_ACCENT[sign.element] || "purple";
  return `
    <a class="zodiac-card accent-${accent}" href="zodiac.html#${sign.id}">
      <span class="zodiac-symbol">${sign.symbol}</span>
      <h3>${sign.name}</h3>
      <div class="zodiac-dates">${sign.dateRange}</div>
      <div class="tag-row">
        <span class="tag">${sign.element}</span>
        <span class="tag">${sign.modality}</span>
      </div>
    </a>`;
}

function renderZodiacHub() {
  const grid = document.getElementById("zodiac-hub-grid");
  if (!grid) return;
  grid.innerHTML = ZODIAC_SIGNS_DATA.map(zodiacHubCardHTML).join("");
}

function zodiacDetailHTML(sign) {
  const accent = ELEMENT_ACCENT[sign.element] || "purple";
  const crystals = matchingCrystals(sign.name);
  const power = findZodiacCrystal(sign.powerStone);

  const crystalGridHTML = crystals.map(c => `
    <a class="zodiac-crystal-card" href="index.html#${c.id}">
      ${c.photo ? `<div class="card-photo"><img src="${c.photo.file}" alt="${c.name}" loading="lazy"></div>` : `<div class="swatch-row">${c.colors.map(col => `<span class="swatch" style="background:${COLOR_HEX[col] || "#777"}"></span>`).join("")}</div>`}
      <h4>${c.name}</h4>
    </a>`).join("");

  return `
    <div class="zodiac-detail accent-${accent}">
      <a class="zodiac-back" href="zodiac.html">&larr; All Signs</a>
      <div class="zodiac-detail-hero">
        <span class="zodiac-symbol zodiac-symbol-large">${sign.symbol}</span>
        <div>
          <h1 class="aura-text">${sign.name}</h1>
          <div class="zodiac-dates">${sign.dateRange}</div>
        </div>
      </div>

      <div class="modal-grid zodiac-facts">
        <div class="fact"><dt>Element</dt><dd>${sign.element}</dd></div>
        <div class="fact"><dt>Modality</dt><dd>${sign.modality}</dd></div>
        <div class="fact"><dt>Ruling Planet</dt><dd>${sign.rulingPlanet}</dd></div>
        <div class="fact"><dt>Traits</dt><dd>${sign.traits.join(", ")}</dd></div>
      </div>

      <p class="zodiac-description">${sign.description}</p>

      ${power ? `
      <div class="zodiac-power-stone">
        <div class="moon-today-badge">Power Stone</div>
        <a class="zodiac-power-link" href="index.html#${power.id}">
          ${power.photo ? `<img src="${power.photo.file}" alt="${power.name}">` : ""}
          <div>
            <h3>${power.name}</h3>
            <p>Ruled by ${power.planet.join(" & ")} — the same planetary energy as ${sign.name} itself.</p>
          </div>
        </a>
      </div>` : ""}

      <div class="modal-section">
        <h4>Crystals for ${sign.name}</h4>
        <div class="zodiac-crystal-grid">${crystalGridHTML}</div>
      </div>
    </div>`;
}

function renderZodiacPage() {
  const hub = document.getElementById("zodiac-hub");
  const detailContainer = document.getElementById("zodiac-detail-container");
  if (!hub || !detailContainer) return;

  const id = location.hash.replace("#", "");
  const sign = id ? findZodiacSign(id) : null;

  if (sign) {
    hub.style.display = "none";
    detailContainer.style.display = "block";
    detailContainer.innerHTML = zodiacDetailHTML(sign);
    document.title = `${sign.name} — Crystal Codex`;
    window.scrollTo(0, 0);
  } else {
    hub.style.display = "";
    detailContainer.style.display = "none";
    detailContainer.innerHTML = "";
    document.title = "Zodiac & Crystals — Crystal Codex";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderZodiacHub();
  renderZodiacPage();
  window.addEventListener("hashchange", renderZodiacPage);
});
