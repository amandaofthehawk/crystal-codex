/* Crystal Codex — current lunar phase calculation and moon-phases.html rendering. */

const SYNODIC_MONTH_DAYS = 29.53058867;
const KNOWN_NEW_MOON_UTC = Date.UTC(2000, 0, 6, 18, 14, 0);

/* Returns { phaseIndex (0-7, matches MOON_PHASES order), fraction (0-1 through the cycle),
   illumination (0-100, approx % lit), ageDays } for a given Date (defaults to now). */
function getCurrentMoonPhase(date) {
  date = date || new Date();
  const diffDays = (date.getTime() - KNOWN_NEW_MOON_UTC) / 86400000;
  let fraction = (diffDays % SYNODIC_MONTH_DAYS) / SYNODIC_MONTH_DAYS;
  if (fraction < 0) fraction += 1;
  const phaseIndex = Math.floor(((fraction + 0.0625) % 1) / 0.125);
  const illumination = Math.round((1 - Math.cos(2 * Math.PI * fraction)) / 2 * 100);
  const ageDays = fraction * SYNODIC_MONTH_DAYS;
  return { phaseIndex, fraction, illumination, ageDays };
}

function findMoonCrystal(id) {
  return (typeof CRYSTALS !== "undefined" ? CRYSTALS : []).find(c => c.id === id);
}

function moonPhaseCardHTML(phase, isToday) {
  const pairs = (phase.crystals || []).map(id => {
    const c = findMoonCrystal(id);
    const name = c ? c.name : id;
    return `<a class="tag" href="index.html#${id}">${name}</a>`;
  }).join("");

  return `
    <article class="moon-card accent-${phase.accent || "purple"}${isToday ? " moon-card-today" : ""}">
      ${isToday ? `<div class="moon-today-badge">Tonight's Moon</div>` : ""}
      <div class="card-title">
        <span class="card-icon moon-icon"><svg class="icon"><use href="#${phase.icon}"></use></svg></span>
        <h3>${phase.name}</h3>
      </div>
      <p class="moon-energy">${phase.energy}</p>
      <p>${phase.description}</p>
      <div class="crystal-chip-row">${pairs}</div>
      <p><strong>Ritual:</strong> ${phase.ritual}</p>
    </article>`;
}

function renderMoonPhases() {
  const grid = document.getElementById("moon-grid");
  if (!grid) return;

  const { phaseIndex, illumination } = getCurrentMoonPhase();
  const todayPhase = MOON_PHASES[phaseIndex];

  const todayContainer = document.getElementById("moon-today");
  if (todayContainer) {
    todayContainer.innerHTML = moonPhaseCardHTML(todayPhase, true) +
      `<p class="moon-illumination">${illumination}% of the moon is currently illuminated.</p>`;
  }

  grid.innerHTML = MOON_PHASES.map(p => moonPhaseCardHTML(p, false)).join("");
}

document.addEventListener("DOMContentLoaded", renderMoonPhases);
