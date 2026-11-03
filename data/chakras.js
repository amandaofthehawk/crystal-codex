/* Crystal Codex — the 7 chakras, their traditional meaning, and a hand-picked
   "power stone" per chakra. Matching crystals for each chakra are computed
   at render time from CRYSTALS, not hardcoded, so this list always stays in
   sync with the main collection. */

const CHAKRAS_DATA = [
  {
    id: "root",
    name: "Root",
    sanskritName: "Muladhara",
    location: "Base of the spine",
    element: "Earth",
    colorName: "Red",
    colorHex: "#c0493f",
    lifeThemes: ["Safety", "Survival", "Stability", "Belonging"],
    description: "The Root chakra is the foundation of the entire energy system — literally and figuratively the base everything else is built on. It governs your basic sense of safety: whether your needs are met, whether you feel steady in your body, whether the ground beneath you — financially, physically, emotionally — feels solid.",
    whenBalanced: "Grounded, secure, and physically at ease, with a steady sense that your basic needs are met.",
    whenBlocked: "Anxious, scattered, or chronically unsafe-feeling, often alongside financial or physical insecurity.",
    powerStone: "black-tourmaline"
  },
  {
    id: "sacral",
    name: "Sacral",
    sanskritName: "Svadhisthana",
    location: "Lower abdomen, below the navel",
    element: "Water",
    colorName: "Orange",
    colorHex: "#e0893f",
    lifeThemes: ["Creativity", "Pleasure", "Emotion", "Sensuality"],
    description: "The Sacral chakra governs how freely you feel, create, and enjoy — it's the seat of emotional fluidity and creative expression, as well as sensuality and pleasure in the broadest sense. Where the Root asks whether you're safe, the Sacral asks whether you're allowed to feel good.",
    whenBalanced: "Emotionally fluid and creatively alive, comfortable with pleasure and change.",
    whenBlocked: "Emotionally numb or overwhelmed, creatively blocked, or uneasy with pleasure and intimacy.",
    powerStone: "carnelian"
  },
  {
    id: "solar-plexus",
    name: "Solar Plexus",
    sanskritName: "Manipura",
    location: "Upper abdomen, below the chest",
    element: "Fire",
    colorName: "Yellow",
    colorHex: "#eed48f",
    lifeThemes: ["Confidence", "Willpower", "Personal power", "Self-esteem"],
    description: "The Solar Plexus chakra is the body's engine of personal power — confidence, willpower, and the sense that you can act on your own behalf rather than simply react to what happens to you. It's directly tied to self-esteem and the ability to set and hold a boundary.",
    whenBalanced: "Confident and self-directed, able to assert yourself without needing to dominate others.",
    whenBlocked: "Insecure, people-pleasing, or prone to either passivity or controlling behavior.",
    powerStone: "citrine"
  },
  {
    id: "heart",
    name: "Heart",
    sanskritName: "Anahata",
    location: "Center of the chest",
    element: "Air",
    colorName: "Green",
    colorHex: "#74d9ab",
    lifeThemes: ["Love", "Compassion", "Connection", "Forgiveness"],
    description: "The Heart chakra sits at the literal and symbolic center of the entire system, bridging the three lower, more physical chakras with the three upper, more spiritual ones. It governs love in every direction — romantic, platonic, self-directed — along with compassion, grief, and the capacity to forgive.",
    whenBalanced: "Open, compassionate, and able to give and receive love without losing yourself.",
    whenBlocked: "Guarded, isolated, or swinging between emotional shutdown and overwhelming neediness.",
    powerStone: "rose-quartz"
  },
  {
    id: "throat",
    name: "Throat",
    sanskritName: "Vishuddha",
    location: "The throat",
    element: "Sound / Ether",
    colorName: "Blue",
    colorHex: "#74c2e8",
    lifeThemes: ["Communication", "Truth", "Self-expression", "Listening"],
    description: "The Throat chakra governs the gap between what you feel internally and what actually gets said out loud — honest communication, creative self-expression, and just as importantly, the ability to really listen. A blocked Throat chakra often shows up less as silence and more as saying something other than what's true.",
    whenBalanced: "Able to speak honestly and listen fully, with words that match what you actually feel.",
    whenBlocked: "Struggling to speak up, prone to people-pleasing speech, or alternately blunt to the point of harm.",
    powerStone: "lapis-lazuli"
  },
  {
    id: "third-eye",
    name: "Third Eye",
    sanskritName: "Ajna",
    location: "Center of the forehead, between the eyebrows",
    element: "Light",
    colorName: "Indigo",
    colorHex: "#8f7fe8",
    lifeThemes: ["Intuition", "Insight", "Imagination", "Clarity"],
    description: "The Third Eye chakra governs perception beyond the five physical senses — intuition, imagination, and the ability to see a situation clearly rather than through the distortion of fear or wishful thinking. It's often associated with meditation and the kind of insight that arrives all at once rather than through step-by-step reasoning.",
    whenBalanced: "Clear-headed and intuitive, able to trust your own insight without needing constant external validation.",
    whenBlocked: "Stuck in overthinking, cut off from intuition, or prone to confusion and poor judgment.",
    powerStone: "amethyst"
  },
  {
    id: "crown",
    name: "Crown",
    sanskritName: "Sahasrara",
    location: "The top of the head",
    element: "Thought / Cosmic Consciousness",
    colorName: "Violet",
    colorHex: "#d4b8ff",
    lifeThemes: ["Spiritual connection", "Higher awareness", "Unity", "Transcendence"],
    description: "The Crown chakra sits at the very top of the system, governing connection to something larger than the individual self — however that's defined, whether as spirituality, universal consciousness, or simply a sense of meaning beyond day-to-day concerns. It's the chakra most associated with meditation, insight, and a felt sense of unity rather than separateness.",
    whenBalanced: "Connected to a sense of meaning and purpose beyond yourself, at peace with life's bigger questions.",
    whenBlocked: "Disconnected, cynical, or feeling as though life lacks any larger meaning or direction.",
    powerStone: "selenite"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = CHAKRAS_DATA;
