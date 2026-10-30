/* Crystal Codex — quick-reference safety flags for the Cleansing & Charging Guide.
   water/sun: "ok" | "caution" | "no". Derived from each crystal's careNotes in crystals.js. */

const CARE_SAFETY = {
  "amethyst":          { water: "caution", sun: "no" },
  "angelite":          { water: "no",      sun: "no" },
  "aventurine":        { water: "ok",      sun: "ok" },
  "azurite":           { water: "no",      sun: "no" },
  "black-tourmaline":  { water: "ok",      sun: "ok" },
  "blue-lace-agate":   { water: "ok",      sun: "ok" },
  "calcite":           { water: "no",      sun: "caution" },
  "carnelian":         { water: "ok",      sun: "ok" },
  "celestite":         { water: "no",      sun: "no" },
  "charoite":          { water: "caution", sun: "caution" },
  "citrine":           { water: "ok",      sun: "caution" },
  "clear-quartz":      { water: "ok",      sun: "ok" },
  "fluorite":          { water: "no",      sun: "no" },
  "hematite":          { water: "caution", sun: "ok" },
  "howlite":           { water: "no",      sun: "caution" },
  "kunzite":           { water: "caution", sun: "no" },
  "labradorite":       { water: "ok",      sun: "caution" },
  "lapis-lazuli":      { water: "caution", sun: "no" },
  "lavender-quartz":   { water: "ok",      sun: "no" },
  "lepidolite":        { water: "no",      sun: "caution" },
  "malachite":         { water: "no",      sun: "caution" },
  "moldavite":         { water: "caution", sun: "ok" },
  "moonstone":         { water: "caution", sun: "ok" },
  "onyx":              { water: "ok",      sun: "ok" },
  "peridot":           { water: "caution", sun: "caution" },
  "prehnite":          { water: "caution", sun: "no" },
  "rhodochrosite":     { water: "caution", sun: "no" },
  "rose-quartz":       { water: "ok",      sun: "caution" },
  "selenite":          { water: "no",      sun: "ok" },
  "stilbite":          { water: "no",      sun: "caution" },
  "tanzanite":         { water: "caution", sun: "no" },
  "tigers-eye":        { water: "ok",      sun: "ok" },
  "topaz":             { water: "ok",      sun: "ok" },
  "turquoise":         { water: "no",      sun: "caution" }
};

if (typeof module !== "undefined" && module.exports) module.exports = CARE_SAFETY;
