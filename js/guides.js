/* Crystal Codex — rendering logic for pairing-guide.html, cleansing-guide.html, glossary.html */

function findCrystalById(id) {
  return CRYSTALS.find(c => c.id === id);
}

function crystalLinkChip(id) {
  const c = findCrystalById(id);
  if (!c) return "";
  return `<a class="tag" href="index.html#${id}">${c.name}</a>`;
}

function renderPairingGroups() {
  const container = byId2("pairing-groups");
  if (!container) return;
  container.innerHTML = PAIRING_GROUPS.map(group => `
    <article class="guide-card accent-${group.accent || "purple"}">
      <div class="card-title">
        <span class="card-icon"><svg class="icon"><use href="#${group.icon || "icon-crystal-point"}"></use></svg></span>
        <h3>${group.title}</h3>
      </div>
      <p>${group.description}</p>
      <div class="crystal-chip-row">${group.crystals.map(crystalLinkChip).join("")}</div>
      <p><strong>Why it works:</strong> ${group.why}</p>
    </article>
  `).join("");
}

function statusLabel(status) {
  if (status === "ok") return `<span class="status-ok">Safe</span>`;
  if (status === "caution") return `<span class="status-caution">Caution</span>`;
  return `<span class="status-no">Avoid</span>`;
}

function renderSafetyTable() {
  const tbody = byId2("safety-table-body");
  if (!tbody) return;
  const rows = CRYSTALS.slice().sort((a,b) => a.name.localeCompare(b.name));
  tbody.innerHTML = rows.map(c => {
    const flags = CARE_SAFETY[c.id] || { water: "caution", sun: "caution" };
    return `<tr>
      <td><a href="index.html#${c.id}">${c.name}</a></td>
      <td>${statusLabel(flags.water)}</td>
      <td>${statusLabel(flags.sun)}</td>
    </tr>`;
  }).join("");
}

function renderGlossary(filterText) {
  const container = byId2("glossary-list");
  if (!container) return;
  const q = (filterText || "").toLowerCase();
  const sorted = GLOSSARY.slice().sort((a,b) => a.term.localeCompare(b.term));
  const filtered = q ? sorted.filter(g => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)) : sorted;
  if (filtered.length === 0) {
    container.innerHTML = `<p class="empty-state">No glossary terms match "${filterText}".</p>`;
    return;
  }
  container.innerHTML = filtered.map(g => `<dt id="term-${slugify(g.term)}">${g.term}</dt><dd>${g.definition}</dd>`).join("");
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderAZNav() {
  const container = byId2("az-nav");
  if (!container) return;
  const letters = [...new Set(GLOSSARY.map(g => g.term[0].toUpperCase()))].sort();
  container.innerHTML = letters.map(l => {
    const first = GLOSSARY.filter(g => g.term[0].toUpperCase() === l).sort((a,b)=>a.term.localeCompare(b.term))[0];
    return `<a href="#term-${slugify(first.term)}">${l}</a>`;
  }).join("");
}

function renderPhotoCredits() {
  const tbody = byId2("credits-table-body");
  if (!tbody) return;
  if (typeof PHOTO_CREDITS === "undefined" || PHOTO_CREDITS.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">No photo credits yet.</td></tr>`;
    return;
  }
  const rows = PHOTO_CREDITS.slice().sort((a, b) => a.crystalName.localeCompare(b.crystalName));
  tbody.innerHTML = rows.map(c => `
    <tr>
      <td><a href="index.html#${c.crystalId}">${c.crystalName}</a></td>
      <td>${c.artist || "Unknown"}</td>
      <td>${c.licenseUrl ? `<a href="${c.licenseUrl}" target="_blank" rel="noopener">${c.license}</a>` : c.license}</td>
      <td><a href="${c.sourceUrl}" target="_blank" rel="noopener">Wikimedia Commons</a></td>
    </tr>
  `).join("");
}

function byId2(id) { return document.getElementById(id); }

function highlightActiveNav2() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav2();
  renderPairingGroups();
  renderSafetyTable();
  renderAZNav();
  renderGlossary("");

  const glossarySearch = byId2("glossary-search-input");
  if (glossarySearch) {
    glossarySearch.addEventListener("input", (e) => renderGlossary(e.target.value.trim()));
  }
});
