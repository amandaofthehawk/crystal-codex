/* Crystal Codex — the 12 zodiac signs, their astrological profile, and a
   hand-picked "power stone" (chosen where its planetary ruler in
   data/crystals.js matches the sign's own ruling planet). Matching crystals
   for each sign are computed at render time from CRYSTALS, not hardcoded,
   so this list always stays in sync with the main collection. */

const ZODIAC_SIGNS_DATA = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    dateRange: "March 21 – April 19",
    element: "Fire",
    modality: "Cardinal",
    rulingPlanet: "Mars",
    traits: ["Bold", "Energetic", "Pioneering", "Competitive", "Direct"],
    description: "Aries opens the zodiac wheel as its first sign, and it acts like it — bold, fast-moving, and allergic to hesitation. Ruled by Mars, the planet of action and drive, Aries is most alive when starting something new, competing for something that matters, or simply moving faster than everyone else in the room.",
    powerStone: "hematite"
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    dateRange: "April 20 – May 20",
    element: "Earth",
    modality: "Fixed",
    rulingPlanet: "Venus",
    traits: ["Grounded", "Patient", "Sensual", "Loyal", "Steady"],
    description: "Taurus is ruled by Venus, and it shows in a deep appreciation for comfort, beauty, and the simple pleasure of things done well and built to last. Fixed and earthy, Taurus moves at its own unhurried pace, valuing loyalty and stability over speed or spectacle.",
    powerStone: "rose-quartz"
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    dateRange: "May 21 – June 20",
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    traits: ["Curious", "Communicative", "Adaptable", "Witty", "Quick"],
    description: "Gemini is ruled by Mercury, the planet of communication, and carries that quicksilver energy into everything — conversation, ideas, plans that change direction overnight. Endlessly curious and mentally restless, Gemini thrives on variety and gets bored faster than any other sign in the zodiac.",
    powerStone: "blue-lace-agate"
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    dateRange: "June 21 – July 22",
    element: "Water",
    modality: "Cardinal",
    rulingPlanet: "Moon",
    traits: ["Nurturing", "Intuitive", "Protective", "Emotional", "Home-loving"],
    description: "Cancer is ruled by the Moon, and its emotional tides run accordingly — deep, cyclical, and impossible to fake. Fiercely protective of the people and spaces it loves, Cancer builds a sense of home wherever it goes, leading with intuition long before logic catches up.",
    powerStone: "moonstone"
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    dateRange: "July 23 – August 22",
    element: "Fire",
    modality: "Fixed",
    rulingPlanet: "Sun",
    traits: ["Confident", "Generous", "Warm", "Dramatic", "Creative"],
    description: "Leo is ruled by the Sun, and it carries that same warm, impossible-to-ignore presence into a room. Generous, dramatic, and deeply loyal to the people it loves, Leo is happiest when creating something worth being proud of — and sharing the spotlight generously once it gets there.",
    powerStone: "sunstone"
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    dateRange: "August 23 – September 22",
    element: "Earth",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    traits: ["Analytical", "Practical", "Meticulous", "Humble", "Helpful"],
    description: "Virgo is ruled by Mercury, channeled through an earth sign's practical lens — less about fast talk and more about getting the details exactly right. Modest and service-minded, Virgo finds real satisfaction in solving a problem, refining a system, or quietly taking care of what everyone else overlooked.",
    powerStone: "amazonite"
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    dateRange: "September 23 – October 22",
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Venus",
    traits: ["Diplomatic", "Harmonious", "Fair-minded", "Social", "Aesthetic"],
    description: "Libra is ruled by Venus and seeks balance the way other signs seek victory — weighing every angle, smoothing every rough edge, genuinely uncomfortable with unresolved conflict. Socially fluent and drawn to beauty in all its forms, Libra does its best work in true partnership rather than alone.",
    powerStone: "rose-quartz"
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    dateRange: "October 23 – November 21",
    element: "Water",
    modality: "Fixed",
    rulingPlanet: "Pluto",
    traits: ["Intense", "Passionate", "Transformative", "Private", "Magnetic"],
    description: "Scorpio is ruled by Pluto, the planet of transformation and the underworld, and little about this sign stays on the surface for long. Intensely private yet magnetically compelling, Scorpio is drawn to whatever's real underneath the performance — and isn't afraid of the depths that scare everyone else off.",
    powerStone: "obsidian"
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    dateRange: "November 22 – December 21",
    element: "Fire",
    modality: "Mutable",
    rulingPlanet: "Jupiter",
    traits: ["Adventurous", "Philosophical", "Optimistic", "Honest", "Free-spirited"],
    description: "Sagittarius is ruled by Jupiter, the planet of expansion, and approaches life accordingly — always reaching for the next horizon, the bigger question, the trip not yet taken. Blunt to a fault and allergic to being fenced in, Sagittarius trades comfort for meaning almost every time.",
    powerStone: "lapis-lazuli"
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    dateRange: "December 22 – January 19",
    element: "Earth",
    modality: "Cardinal",
    rulingPlanet: "Saturn",
    traits: ["Disciplined", "Ambitious", "Patient", "Practical", "Reserved"],
    description: "Capricorn is ruled by Saturn, the planet of structure and discipline, and treats long-term ambition less like a dream and more like a plan already in motion. Patient and famously hard-working, Capricorn builds slowly and durably, trusting results over reassurance.",
    powerStone: "black-tourmaline"
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    dateRange: "January 20 – February 18",
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus",
    traits: ["Innovative", "Independent", "Humanitarian", "Unconventional", "Intellectual"],
    description: "Aquarius is ruled by Uranus, the planet of sudden change and invention, and it shows in a genuine discomfort with doing things the way they've always been done. Fiercely independent but deeply concerned with the collective, Aquarius tends to care about humanity in the abstract as much as the people right in front of it.",
    powerStone: "angelite"
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    dateRange: "February 19 – March 20",
    element: "Water",
    modality: "Mutable",
    rulingPlanet: "Neptune",
    traits: ["Dreamy", "Compassionate", "Intuitive", "Artistic", "Empathetic"],
    description: "Pisces closes the zodiac wheel and carries a bit of every sign that came before it, ruled by Neptune, the planet of dreams, illusion, and boundless empathy. Deeply intuitive and often genuinely psychic-feeling in its read on a room, Pisces can struggle to tell where it ends and someone else's feelings begin.",
    powerStone: "aquamarine"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = ZODIAC_SIGNS_DATA;
