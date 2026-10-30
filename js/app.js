/* Crystal Codex — browse/search/filter/modal logic for index.html */

const COLOR_HEX = {
  "Purple": "#9b6fd1",
  "Blue": "#5a8fd6",
  "Green": "#5fae6e",
  "Black": "#2b2b33",
  "Orange": "#e0893f",
  "Yellow": "#e3c23c",
  "Pink": "#e79bc0",
  "White": "#e9e6f2",
  "Clear/White": "#e9e6f2",
  "Gray": "#9a97a3",
  "Brown": "#8a6a4a",
  "Gold": "#d4af5a",
  "Red": "#c0493f",
  "Multicolor": null
};

const ZODIAC_SIGNS = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
const CHAKRAS = ["Root","Sacral","Solar Plexus","Heart","Throat","Third Eye","Crown"];
const ELEMENTS = ["Earth","Air","Fire","Water"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const state = {
  search: "",
  colors: new Set(),
  zodiac: new Set(),
  chakra: new Set(),
  element: new Set(),
  birthMonth: new Set()
};

function byId(id) { return document.getElementById(id); }

function swatchStyle(colorName) {
  if (colorName === "Multicolor") {
    return "background: conic-gradient(from 90deg, #9b6fd1, #5a8fd6, #5fae6e, #e3c23c, #e0893f, #e79bc0, #9b6fd1);";
  }
  const hex = COLOR_HEX[colorName] || "#777";
  return `background:${hex};`;
}

function renderSwatches(colors) {
  return `<div class="swatch-row">${colors.map(c => `<span class="swatch" style="${swatchStyle(c)}" title="${c}"></span>`).join("")}</div>`;
}

/* A crystal field can carry a literal list, or a "wildcard" string like
   "all signs (master healer)" / "all chakras" meaning it matches any filter value. */
function fieldMatches(valueArray, selectedSet) {
  if (selectedSet.size === 0) return true;
  const isWildcard = valueArray.some(v => /^all /i.test(v) || / all chakras/i.test(v));
  if (isWildcard) return true;
  return valueArray.some(v => selectedSet.has(v));
}

function matchesFilters(crystal) {
  if (state.search) {
    const q = state.search.toLowerCase();
    const haystack = [crystal.name, ...(crystal.aliases || [])].join(" ").toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  if (!fieldMatches(crystal.colors, state.colors)) return false;
  if (!fieldMatches(crystal.zodiac, state.zodiac)) return false;
  if (!fieldMatches(crystal.chakra, state.chakra)) return false;
  if (!fieldMatches(crystal.element, state.element)) return false;
  if (!fieldMatches(crystal.birthMonth || [], state.birthMonth)) return false;
  return true;
}

function buildChipGroup(containerId, options, selectedSet, legendText) {
  const container = byId(containerId);
  container.innerHTML = `<legend>${legendText}</legend><div class="filter-options">${
    options.map(opt => {
      const safeId = containerId + "-" + opt.replace(/\s+/g, "-");
      return `<label class="chip" data-value="${opt}">
        <input type="checkbox" id="${safeId}" value="${opt}">${opt}
      </label>`;
    }).join("")
  }</div>`;

  container.querySelectorAll(".chip").forEach(chip => {
    const value = chip.dataset.value;
    const input = chip.querySelector("input");
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      if (selectedSet.has(value)) { selectedSet.delete(value); chip.classList.remove("active"); input.checked = false; }
      else { selectedSet.add(value); chip.classList.add("active"); input.checked = true; }
      renderGrid();
    });
  });
}

function renderFilters() {
  const allColors = [...new Set(CRYSTALS.flatMap(c => c.colors))].sort();
  buildChipGroup("filter-colors", allColors, state.colors, "Color");
  buildChipGroup("filter-zodiac", ZODIAC_SIGNS, state.zodiac, "Zodiac Sign");
  buildChipGroup("filter-chakra", CHAKRAS, state.chakra, "Chakra");
  buildChipGroup("filter-element", ELEMENTS, state.element, "Element");
  buildChipGroup("filter-month", MONTHS, state.birthMonth, "Birth Month");
}

function clearFilters() {
  state.colors.clear(); state.zodiac.clear(); state.chakra.clear(); state.element.clear(); state.birthMonth.clear();
  state.search = "";
  byId("search-input").value = "";
  renderFilters();
  renderGrid();
}

function crystalCardHTML(crystal) {
  return `
    <button class="crystal-card" data-id="${crystal.id}" aria-label="View details for ${crystal.name}">
      ${renderSwatches(crystal.colors)}
      <h3>${crystal.name}</h3>
      ${crystal.aliases && crystal.aliases.length ? `<div class="aka">${crystal.aliases.join(", ")}</div>` : ""}
      <div class="tag-row">
        ${crystal.chakra.slice(0,2).map(c => `<span class="tag">${c}</span>`).join("")}
        ${crystal.zodiac.slice(0,2).map(z => `<span class="tag">${z}</span>`).join("")}
      </div>
    </button>`;
}

function renderGrid() {
  const results = CRYSTALS.filter(matchesFilters).sort((a,b) => a.name.localeCompare(b.name));
  byId("results-count").textContent = `${results.length} crystal${results.length === 1 ? "" : "s"}`;
  const grid = byId("crystal-grid");
  if (results.length === 0) {
    grid.innerHTML = `<div class="empty-state">No crystals match those filters yet. Try clearing a few.</div>`;
    return;
  }
  grid.innerHTML = results.map(crystalCardHTML).join("");
  grid.querySelectorAll(".crystal-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function findCrystal(id) { return CRYSTALS.find(c => c.id === id); }

function modalContentHTML(crystal) {
  const pairs = (crystal.pairsWith || []).map(findCrystal).filter(Boolean);
  return `
    <button class="modal-close" aria-label="Close">&times;</button>
    ${renderSwatches(crystal.colors)}
    <h2>${crystal.name}</h2>
    ${crystal.aliases && crystal.aliases.length ? `<div class="aka">Also known as: ${crystal.aliases.join(", ")}</div>` : ""}
    <p>${crystal.meaning}</p>
    <div class="affirmation">&ldquo;${crystal.affirmation}&rdquo;</div>

    <div class="modal-section">
      <h4>Properties</h4>
      <div class="property-pills">${crystal.properties.map(p => `<span class="tag">${p}</span>`).join("")}</div>
    </div>

    <div class="modal-grid">
      <div class="fact"><dt>Mineral Class</dt><dd>${crystal.mineralClass}</dd></div>
      <div class="fact"><dt>Hardness (Mohs)</dt><dd>${crystal.hardness}</dd></div>
      <div class="fact"><dt>Origin</dt><dd>${crystal.origin.join(", ")}</dd></div>
      <div class="fact"><dt>Chakra</dt><dd>${crystal.chakra.join(", ")}</dd></div>
      <div class="fact"><dt>Zodiac</dt><dd>${crystal.zodiac.join(", ")}</dd></div>
      <div class="fact"><dt>Element</dt><dd>${crystal.element.join(", ")}</dd></div>
      <div class="fact"><dt>Planet</dt><dd>${crystal.planet.join(", ")}</dd></div>
      <div class="fact"><dt>Birth Month</dt><dd>${(crystal.birthMonth && crystal.birthMonth.length) ? crystal.birthMonth.join(", ") : "—"}</dd></div>
    </div>

    <div class="modal-section">
      <h4>Formation</h4>
      <p>${crystal.formation}</p>
    </div>

    <div class="modal-section">
      <h4>Ways to Use</h4>
      <ul class="plain-list">${crystal.uses.map(u => `<li>${u}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>Care &amp; Cleansing Notes</h4>
      <p>${crystal.careNotes}</p>
    </div>

    ${pairs.length ? `
    <div class="modal-section">
      <h4>Pairs Well With</h4>
      <div class="pairs-row">${pairs.map(p => `<button data-id="${p.id}">${p.name}</button>`).join("")}</div>
    </div>` : ""}
  `;
}

function openModal(id) {
  const crystal = findCrystal(id);
  if (!crystal) return;
  byId("modal-content").innerHTML = modalContentHTML(crystal);
  byId("modal-backdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", "#" + id);

  byId("modal-content").querySelector(".modal-close").addEventListener("click", closeModal);
  byId("modal-content").querySelectorAll(".pairs-row button").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });
}

function closeModal() {
  byId("modal-backdrop").classList.remove("open");
  document.body.style.overflow = "";
  history.replaceState(null, "", location.pathname + location.search);
}

function initModalShell() {
  byId("modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function highlightActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();

  if (byId("crystal-grid")) {
    renderFilters();
    renderGrid();
    initModalShell();

    byId("search-input").addEventListener("input", (e) => {
      state.search = e.target.value.trim();
      renderGrid();
    });
    byId("clear-filters-btn").addEventListener("click", clearFilters);

    const initialId = location.hash.replace("#", "");
    if (initialId && findCrystal(initialId)) openModal(initialId);

    window.addEventListener("hashchange", () => {
      const id = location.hash.replace("#", "");
      if (id && findCrystal(id)) openModal(id);
      else closeModal();
    });
  }
});
