/* Crystal Codex — the 8 lunar phases, their traditional energetic
   associations, and suggested crystal rituals drawn from the Codex. */

const MOON_PHASES = [
  {
    id: "new-moon",
    accent: "purple",
    name: "New Moon",
    icon: "icon-moon-new",
    energy: "Beginnings, a blank slate, inward reflection.",
    description: "The moon is dark and invisible from Earth — traditionally the moment to plant a seed rather than tend one already growing. Energy turns inward before the next cycle begins.",
    crystals: ["moonstone", "labradorite", "clear-quartz"],
    ritual: "Write down your intentions for the cycle ahead. Hold moonstone while journaling, then set your written intention somewhere you'll see it daily."
  },
  {
    id: "waxing-crescent",
    accent: "blue",
    name: "Waxing Crescent",
    icon: "icon-moon-waxing-crescent",
    energy: "First steps, gentle momentum, nurturing what's new.",
    description: "A sliver of light returns. This is a fragile, early-growth phase — intentions are still tender and benefit from small, consistent action rather than big pushes.",
    crystals: ["aventurine", "citrine", "carnelian"],
    ritual: "Carry a small stone as a reminder of your new-moon intention, and take one small, concrete action toward it today."
  },
  {
    id: "first-quarter",
    accent: "green",
    name: "First Quarter",
    icon: "icon-moon-first-quarter",
    energy: "Decision points, friction, the courage to push through.",
    description: "Exactly half-lit, the first quarter moon traditionally marks the first real test — obstacles tend to surface here, asking for a decisive choice rather than avoidance.",
    crystals: ["tigers-eye", "carnelian", "hematite"],
    ritual: "Hold a grounding stone and name one obstacle in your way, then one concrete action to move past it."
  },
  {
    id: "waxing-gibbous",
    accent: "yellow",
    name: "Waxing Gibbous",
    icon: "icon-moon-waxing-gibbous",
    energy: "Refinement, patience, adjusting course before culmination.",
    description: "Nearly full — the hardest part is behind you, but this is a phase for fine-tuning and patience rather than declaring victory early.",
    crystals: ["fluorite", "clear-quartz", "lepidolite"],
    ritual: "Review what's shifted since the new moon. Meditate with fluorite to gain clarity on what still needs adjusting before the full moon."
  },
  {
    id: "full-moon",
    accent: "yellow",
    name: "Full Moon",
    icon: "icon-moon-full",
    energy: "Peak illumination, culmination, release, charging.",
    description: "The moon is fully lit and traditionally at its most energetically potent — a night for celebrating what's bloomed, releasing what no longer serves you, and recharging crystals under its light.",
    crystals: ["selenite", "clear-quartz", "moonstone"],
    ritual: "Charge your crystal collection in the moonlight overnight. Write down what you're ready to release, then safely burn or discard the paper."
  },
  {
    id: "waning-gibbous",
    accent: "rose",
    name: "Waning Gibbous",
    icon: "icon-moon-waning-gibbous",
    energy: "Gratitude, sharing abundance, giving back.",
    description: "Also called the \"disseminating\" moon — light is still strong but beginning to recede, traditionally a phase for sharing what you've gained rather than gathering more.",
    crystals: ["rose-quartz", "rhodochrosite", "citrine"],
    ritual: "Journal what you're grateful for from this cycle's insights, and share support, a resource, or a kindness with someone else."
  },
  {
    id: "last-quarter",
    accent: "blue",
    name: "Last Quarter",
    icon: "icon-moon-last-quarter",
    energy: "Release, letting go, forgiveness, clearing.",
    description: "Half-lit again on the opposite side, the last quarter moon is traditionally a release valve — a natural point to forgive, declutter, and clear space before the dark moon returns.",
    crystals: ["black-tourmaline", "onyx", "selenite"],
    ritual: "Name one habit, grudge, or pattern you're ready to release. Cleanse your space and your crystals, and physically declutter one small area."
  },
  {
    id: "waning-crescent",
    accent: "purple",
    name: "Waning Crescent",
    icon: "icon-moon-waning-crescent",
    energy: "Rest, surrender, deep reflection.",
    description: "Also called the \"balsamic\" moon — the last sliver before darkness, traditionally the quietest phase of the cycle and a time to rest rather than start anything new.",
    crystals: ["amethyst", "lepidolite", "angelite"],
    ritual: "Slow down deliberately. Meditate with a calming stone and rest, without pressure to be productive, as you prepare for the next new moon."
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = MOON_PHASES;
