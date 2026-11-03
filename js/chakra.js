/* Crystal Codex — chakra hub (index) and individual chakra detail rendering
   for chakras.html. Each chakra gets its own shareable URL via hash routing
   (chakras.html#heart), rendered as a full detail view in place of the hub
   grid -- functionally its own "page" without duplicating markup per chakra. */

function findChakra(id) {
  return CHAKRAS_DATA.find(c => c.id === id);
}

function findChakraCrystal(id) {
  return (typeof CRYSTALS !== "undefined" ? CRYSTALS : []).find(c => c.id === id);
}

/* Matches crystals tagged with this exact chakra, plus any crystal whose
   chakra field says "all chakras" (e.g. Clear Quartz) -- same wildcard
   convention the main Browse filters use. */
function matchingChakraCrystals(chakraName) {
  return (typeof CRYSTALS !== "undefined" ? CRYSTALS : [])
    .filter(c => c.chakra.some(ch => ch === chakraName || /^all /i.test(ch)))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function chakraHubCardHTML(chakra) {
  return `
    <a class="chakra-card" style="--card-accent:${chakra.colorHex}" href="chakras.html#${chakra.id}">
      <span class="chakra-symbol" style="background:${chakra.colorHex}"></span>
      <h3>${chakra.name}</h3>
      <div class="zodiac-dates">${chakra.sanskritName}</div>
      <div class="tag-row">
        <span class="tag">${chakra.location}</span>
      </div>
    </a>`;
}

function renderChakraHub() {
  const grid = document.getElementById("chakra-hub-grid");
  if (!grid) return;
  grid.innerHTML = CHAKRAS_DATA.map(chakraHubCardHTML).join("");
}

function chakraDetailHTML(chakra) {
  const crystals = matchingChakraCrystals(chakra.name);
  const power = findChakraCrystal(chakra.powerStone);

  const crystalGridHTML = crystals.map(c => `
    <a class="zodiac-crystal-card" href="index.html#${c.id}">
      ${c.photo ? `<div class="card-photo"><img src="${c.photo.file}" alt="${c.name}" loading="lazy"></div>` : `<div class="swatch-row">${c.colors.map(col => `<span class="swatch" style="background:${COLOR_HEX[col] || "#777"}"></span>`).join("")}</div>`}
      <h4>${c.name}</h4>
    </a>`).join("");

  return `
    <div class="zodiac-detail" style="--card-accent:${chakra.colorHex}">
      <a class="zodiac-back" href="chakras.html">&larr; All Chakras</a>
      <div class="zodiac-detail-hero">
        <span class="chakra-symbol chakra-symbol-large" style="background:${chakra.colorHex}"></span>
        <div>
          <h1 class="aura-text">${chakra.name}</h1>
          <div class="zodiac-dates">${chakra.sanskritName} &middot; ${chakra.location}</div>
        </div>
      </div>

      <div class="modal-grid zodiac-facts">
        <div class="fact"><dt>Element</dt><dd>${chakra.element}</dd></div>
        <div class="fact"><dt>Color</dt><dd>${chakra.colorName}</dd></div>
        <div class="fact"><dt>Life Themes</dt><dd>${chakra.lifeThemes.join(", ")}</dd></div>
      </div>

      <p class="zodiac-description">${chakra.description}</p>

      <div class="modal-grid chakra-states">
        <div class="fact chakra-state-balanced"><dt>When Balanced</dt><dd>${chakra.whenBalanced}</dd></div>
        <div class="fact chakra-state-blocked"><dt>When Blocked</dt><dd>${chakra.whenBlocked}</dd></div>
      </div>

      ${power ? `
      <div class="zodiac-power-stone" style="border-color:${chakra.colorHex}55;">
        <div class="moon-today-badge" style="background:${chakra.colorHex}; color:#15101f;">Power Stone</div>
        <a class="zodiac-power-link" href="index.html#${power.id}">
          ${power.photo ? `<img src="${power.photo.file}" alt="${power.name}">` : ""}
          <div>
            <h3 style="color:${chakra.colorHex}">${power.name}</h3>
            <p>One of the most classic stones used to open and balance the ${chakra.name} chakra.</p>
          </div>
        </a>
      </div>` : ""}

      <div class="modal-section">
        <h4>Crystals for the ${chakra.name} Chakra</h4>
        <div class="zodiac-crystal-grid">${crystalGridHTML}</div>
      </div>
    </div>`;
}

function renderChakraPage() {
  const hub = document.getElementById("chakra-hub");
  const detailContainer = document.getElementById("chakra-detail-container");
  if (!hub || !detailContainer) return;

  const id = location.hash.replace("#", "");
  const chakra = id ? findChakra(id) : null;

  if (chakra) {
    hub.style.display = "none";
    detailContainer.style.display = "block";
    detailContainer.innerHTML = chakraDetailHTML(chakra);
    document.title = `${chakra.name} Chakra — Crystal Codex`;
    window.scrollTo(0, 0);
  } else {
    hub.style.display = "";
    detailContainer.style.display = "none";
    detailContainer.innerHTML = "";
    document.title = "Chakra Guide — Crystal Codex";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderChakraHub();
  renderChakraPage();
  window.addEventListener("hashchange", renderChakraPage);
});
