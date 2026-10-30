/* Crystal Codex — curated pairing/combination guide, grouped by intention.
   Each group lists crystal ids (must match data/crystals.js ids) that work
   well together for that purpose, plus why. */

const PAIRING_GROUPS = [
  {
    title: "Protection & Grounding",
    accent: "green",
    icon: "icon-shield",
    description: "A classic stack for creating an energetic boundary and staying anchored to the present moment — ideal by a front door, at a desk, or carried into draining environments.",
    crystals: ["black-tourmaline", "hematite", "onyx", "selenite"],
    why: "Black tourmaline and onyx deflect and absorb negative energy, hematite anchors focus and willpower, and selenite keeps the whole stack energetically clear so it doesn't get \"full\" over time."
  },
  {
    title: "Love & Heart Healing",
    accent: "rose",
    icon: "icon-heart",
    description: "For opening the heart, practicing self-love, or healing after heartbreak.",
    crystals: ["rose-quartz", "rhodochrosite", "kunzite", "aventurine"],
    why: "Rose quartz offers unconditional love, rhodochrosite and kunzite address self-love and old emotional wounds, and green aventurine softens the heart while clearing emotional baggage."
  },
  {
    title: "Communication & Truth",
    accent: "blue",
    icon: "icon-speech",
    description: "For speaking honestly and calmly — public speaking, hard conversations, or simply learning to voice your needs.",
    crystals: ["blue-lace-agate", "celestite", "lapis-lazuli", "angelite"],
    why: "All four are Throat-chakra stones, but with different intensities: blue lace agate and angelite soften anxiety around speaking, while lapis lazuli and celestite add depth and conviction to what's said."
  },
  {
    title: "Intuition & Third Eye",
    accent: "purple",
    icon: "icon-eye",
    description: "For meditation, dreamwork, and strengthening intuitive insight.",
    crystals: ["amethyst", "labradorite", "moonstone", "azurite"],
    why: "Amethyst calms the mind for meditation, labradorite and azurite sharpen intuitive perception, and moonstone connects insight to emotional and cyclical awareness."
  },
  {
    title: "Abundance & Manifestation",
    accent: "yellow",
    icon: "icon-sparkle",
    description: "For career goals, financial intentions, and motivation to pursue opportunity.",
    crystals: ["citrine", "aventurine", "tigers-eye", "carnelian"],
    why: "Citrine and aventurine are the two classic prosperity stones, while tiger's eye and carnelian add the confidence and motivation needed to act on opportunities rather than just attract them."
  },
  {
    title: "Deep Transformation",
    accent: "purple",
    icon: "icon-spiral",
    description: "For major life transitions, spiritual awakening, or breaking old patterns — a higher-intensity combination best approached gradually.",
    crystals: ["moldavite", "charoite", "labradorite", "azurite"],
    why: "Moldavite is the most intense accelerant of change; charoite supports the courage to accept it, labradorite eases the transformation itself, and azurite helps release the old beliefs being left behind. Pair with a grounding stone (see Protection & Grounding) if the energy feels like too much at once."
  },
  {
    title: "Calm & Stress Relief",
    accent: "blue",
    icon: "icon-leaf",
    description: "For anxiety, overwhelm, and winding down before sleep.",
    crystals: ["howlite", "lepidolite", "angelite", "blue-lace-agate"],
    why: "All four are gentle, low-intensity calming stones well suited to bedside use or carrying through a stressful day — none of them are overstimulating."
  },
  {
    title: "Cleansing & Charging Companions",
    accent: "green",
    icon: "icon-crystal-cluster",
    description: "Stones used to clear and recharge the energy of other crystals, rather than for a specific intention themselves.",
    crystals: ["selenite", "clear-quartz"],
    why: "Both are considered self-cleansing and safe to use as a base or cluster to recharge other crystals placed nearby — see the Cleansing & Charging Guide for method-by-method detail."
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = PAIRING_GROUPS;
