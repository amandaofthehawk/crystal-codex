/* Crystal Codex — crystal dataset.
   Metaphysical fields (properties/meaning/affirmation/uses) reflect traditional
   crystal-healing lore, not scientific claims. Physical fields (hardness, origin,
   mineral class) reflect standard mineralogical references. */

const CRYSTALS = [
  {
    id: "amethyst",
    name: "Amethyst",
    photo: { file: "assets/photos/amethyst.webp" },
    aliases: ["Purple Quartz"],
    colors: ["Purple"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "Uruguay", "Zambia", "South Korea"],
    chakra: ["Third Eye", "Crown"],
    zodiac: ["Pisces", "Virgo", "Aquarius", "Capricorn"],
    element: ["Air", "Water"],
    planet: ["Jupiter", "Neptune"],
    birthMonth: ["February"],
    formation: "Six-sided quartz crystal colored violet by trace iron and natural irradiation; often found lining geodes.",
    properties: ["Calming", "Intuition", "Spiritual protection", "Clarity", "Sobriety support"],
    meaning: "Amethyst is one of the most recognized metaphysical stones, long associated with sobriety, spiritual awareness, and calm. It's said to quiet an overactive mind, ease anxiety, and open the Third Eye for clearer intuition and meditation.",
    affirmation: "My mind is calm, my spirit is clear, and I trust what I know.",
    uses: ["Place under your pillow to ease insomnia and restless dreams", "Hold during meditation to deepen focus", "Keep on a desk during stressful work to stay level-headed"],
    careNotes: "Sunlight will fade its color over time — keep out of direct sun for long periods. Safe for brief water contact, but avoid prolonged soaking.",
    pairsWith: ["clear-quartz", "rose-quartz", "selenite", "labradorite"],
    deepDive: {
      history: "Amethyst has been prized for over 2,000 years. Its name comes from the Greek amethystos, \"not intoxicated\" — ancient Greeks carved wine goblets from it in the belief it warded off drunkenness. Medieval bishops wore amethyst rings as a symbol of piety, and until massive deposits were discovered in Brazil in the 19th century, it was valued alongside ruby and emerald as one of the rarest gemstones known.",
      narrative: "Beyond its reputation for calm, amethyst is considered a stone of spiritual protection — a kind of psychic filter that softens chaotic or overwhelming energy before it fully takes hold. It's traditionally kept in meditation spaces to deepen practice, and its tie to the Third Eye is less about abstract \"intuition\" and more about a specific, practical ability: the pause before reacting, the moment of clarity before a situation gets reflexively misread. That's part of why it's so closely tied to sobriety and breaking unwanted patterns — it doesn't suppress an impulse so much as create enough stillness to choose differently in the moment it arises.",
      propertyGroups: {
        "Emotional": ["Soothes anxiety", "Eases grief", "Encourages patience"],
        "Mental": ["Sharpens focus", "Quiets racing thoughts", "Supports clear decision-making"],
        "Spiritual": ["Opens the Third Eye", "Deepens meditation", "Connects to higher guidance"],
        "Protective": ["Shields against emotional overwhelm", "Guards against addictive or compulsive patterns"]
      },
      extendedUses: [
        "Place a cluster in a meditation or prayer space to deepen practice",
        "Keep by the bed to ease insomnia and anxious dreaming",
        "Hold during a moment of temptation or compulsive urge as a grounding pause",
        "Wear as jewelry when navigating emotionally charged environments",
        "Build into a crystal grid for spiritual protection around the home",
        "Gift to someone moving through grief or a difficult transition"
      ]
    }
  },
  {
    id: "angelite",
    name: "Angelite",
    photo: { file: "assets/photos/angelite.webp" },
    aliases: ["Blue Anhydrite"],
    colors: ["Blue"],
    mineralClass: "Anhydrite (sulfate)",
    hardness: 3.5,
    origin: ["Peru"],
    chakra: ["Throat", "Third Eye"],
    zodiac: ["Aquarius"],
    element: ["Air"],
    planet: ["Uranus"],
    birthMonth: [],
    formation: "Compressed, dehydrated form of celestite that developed a soft powder-blue color over millions of years.",
    properties: ["Peace", "Angelic connection", "Compassionate communication", "Inner awareness"],
    meaning: "Angelite is considered a stone of serenity and communication with higher guidance — many use it to feel supported during grief or big transitions, and to speak truthfully with compassion rather than reaction.",
    affirmation: "I am supported, I am at peace, and my words carry compassion.",
    uses: ["Hold during moments of grief or anxiety for a sense of being held", "Place near the throat area during meditation to encourage gentle, honest speech"],
    careNotes: "Very soft and water-soluble — never cleanse with water. Avoid direct sunlight, which can fade the blue. Handle gently; it chips easily.",
    pairsWith: ["celestite", "blue-lace-agate", "selenite"],
    deepDive: {
      history: "Unlike most stones in this collection, angelite has almost no ancient lore — it's a product of the New Age crystal movement, named by dealers after large Peruvian anhydrite deposits reached the market in the 1980s. The mineral itself (anhydrite) has been known to geologists far longer, but \"angelite\" as a healing stone is a distinctly modern invention, one of the few entries here without a centuries-old backstory.",
      narrative: "That modern origin doesn't make its reputation any less specific: angelite is almost universally described as a stone of communication with angels, guides, or loved ones who have passed — less about predicting the future and more about feeling supported while grieving or facing uncertainty. Its pale, cloud-like blue is often read as calming in a way that goes beyond simple color association; many describe just holding it as enough to soften an anxious moment, without needing a particular ritual attached.",
      propertyGroups: {
        "Emotional": ["Eases grief", "Softens anxiety", "Offers a sense of being supported"],
        "Spiritual": ["Said to open communication with angels or guides", "Encourages trust in a larger plan"],
        "Mental": ["Quiets a racing mind before sleep"]
      },
      extendedUses: [
        "Hold during moments of grief or loss when words feel insufficient",
        "Keep on a nightstand during anxious periods for a sense of being watched over",
        "Place near a journal used for processing difficult emotions",
        "Use before a reading, prayer, or meditation focused on guidance",
        "Pair with celestite for an especially gentle, calming duo"
      ]
    }
  },
  {
    id: "aventurine",
    name: "Aventurine",
    photo: { file: "assets/photos/aventurine.webp" },
    aliases: ["Green Aventurine"],
    colors: ["Green"],
    mineralClass: "Quartz (silicate) with fuchsite/hematite inclusions",
    hardness: 7,
    origin: ["India", "Brazil", "Russia", "Tanzania"],
    chakra: ["Heart"],
    zodiac: ["Aries", "Taurus"],
    element: ["Earth"],
    planet: ["Mercury"],
    birthMonth: [],
    formation: "Granular quartz whose sparkle (aventurescence) comes from tiny platy mineral inclusions, most often fuchsite.",
    properties: ["Luck", "Prosperity", "Opportunity", "Emotional calm", "Heart healing"],
    meaning: "Known as the \"stone of opportunity,\" green aventurine is carried for luck in new ventures, money, and games of chance. It also soothes the heart space, helping release old emotional patterns to make room for growth.",
    affirmation: "I welcome opportunity, abundance, and good fortune into my life.",
    uses: ["Carry in a pocket or wallet before a big opportunity, interview, or negotiation", "Place on the heart during rest to ease emotional tension"],
    careNotes: "Durable and safe to cleanse with water. Can tolerate moderate sunlight without fading significantly.",
    pairsWith: ["citrine", "tigers-eye", "rose-quartz", "peridot"],
    deepDive: {
      history: "Aventurine takes its name indirectly — from the Italian a ventura, \"by chance.\" The phrase originally described aventurine glass (also called goldstone), a sparkly man-made glass accidentally discovered by Murano glassmakers in the 17th century when metal flecks fell into molten glass. When a naturally sparkly green quartz was found decades later, it was named after the glass it resembled — an unusual case of a mineral being named for an imitation rather than the other way around.",
      narrative: "Green aventurine's reputation as a luck stone has less to do with ancient ceremony and more with its everyday, approachable use — it's one of the most commonly recommended \"starter\" crystals precisely because its energy is gentle and its purpose is simple: inviting opportunity rather than forcing an outcome. It's considered especially suited to situations with real uncertainty, like a job interview or a first attempt at something new, where confidence matters more than control.",
      propertyGroups: {
        "Emotional": ["Eases nervousness before a new venture", "Softens old emotional patterns"],
        "Spiritual": ["Opens the heart to possibility", "Invites rather than forces opportunity"],
        "Mental": ["Supports an optimistic outlook", "Encourages taking a calculated chance"]
      },
      extendedUses: [
        "Carry loose in a pocket before an interview, audition, or first date",
        "Keep near the entry of a business or workspace",
        "Hold while visualizing a specific opportunity opening up",
        "Place in a wallet alongside citrine for a classic luck-and-abundance pairing",
        "Give as a gift to someone starting something new"
      ]
    }
  },
  {
    id: "azurite",
    name: "Azurite",
    photo: { file: "assets/photos/azurite.webp" },
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Copper carbonate",
    hardness: 3.75,
    origin: ["Morocco", "Namibia", "United States (Arizona)"],
    chakra: ["Third Eye"],
    zodiac: ["Sagittarius"],
    element: ["Air"],
    planet: ["Mercury", "Neptune"],
    birthMonth: [],
    formation: "Secondary copper mineral that forms in the oxidized zones of copper deposits, often alongside malachite.",
    properties: ["Insight", "Psychic awareness", "Mental clarity", "Release of old beliefs"],
    meaning: "Azurite is prized as a \"stone of heaven\" for deepening intuition and psychic sight. It's used to break up rigid thought patterns and old belief systems, making space for new insight and clearer inner vision.",
    affirmation: "I see clearly, within and beyond, and I release what no longer serves me.",
    uses: ["Hold during meditation to encourage intuitive insight", "Keep nearby during journaling or shadow work to surface hidden patterns"],
    careNotes: "Soft, copper-based, and can be toxic in dust/ingested form — never cleanse with water, never ingest or make elixirs, wash hands after extended handling. Keep away from direct sun.",
    pairsWith: ["malachite", "labradorite", "lapis-lazuli"],
    deepDive: {
      history: "Azurite has been mined and ground into pigment since antiquity — Egyptian artists used it for blue tones in tomb paintings, and Chinese painters relied on it for centuries under the name \"mountain blue.\" Because it forms naturally alongside malachite, the two were sometimes carved from a single stone, their blue and green bands left intentionally visible. Azurite is also chemically unstable over very long timescales, slowly converting into malachite — a transformation early mineralogists observed without fully understanding, which only deepened its reputation as a stone connected to change.",
      narrative: "That literal transformation — blue slowly becoming green within the same stone — feeds directly into azurite's metaphysical reputation as a stone of deep insight that doesn't stay comfortable forever. It's associated with breaking through old, rigid belief systems, often surfacing what's been avoided rather than soothing it immediately. Many describe azurite's energy as more demanding than a typical Third Eye stone: less about gentle intuition and more about confronting a truth clearly enough that it can't be unseen.",
      propertyGroups: {
        "Mental": ["Breaks up rigid or outdated beliefs", "Sharpens inner vision"],
        "Spiritual": ["Deepens intuitive and psychic insight", "Connects to transformation as an ongoing process"],
        "Emotional": ["Surfaces what's been avoided", "Supports honest self-reflection"]
      },
      extendedUses: [
        "Hold during meditation focused on a belief you suspect is outdated",
        "Keep nearby during journaling or shadow work",
        "Use before a conversation that requires seeing a situation clearly, not comfortably",
        "Pair with malachite to work with both stones' shared transformative theme",
        "Revisit periodically rather than keeping on constant display, given its intensity"
      ]
    }
  },
  {
    id: "black-tourmaline",
    name: "Black Tourmaline",
    photo: { file: "assets/photos/black-tourmaline.webp" },
    aliases: ["Schorl"],
    colors: ["Black"],
    mineralClass: "Tourmaline (borosilicate)",
    hardness: 7.25,
    origin: ["Brazil", "United States", "Nigeria", "Madagascar"],
    chakra: ["Root"],
    zodiac: ["Capricorn", "Scorpio"],
    element: ["Earth"],
    planet: ["Saturn"],
    birthMonth: ["October"],
    formation: "The iron-rich, opaque black variety of tourmaline, typically forming in long striated prisms.",
    properties: ["Protection", "Grounding", "EMF shielding (folk use)", "Negativity deflection"],
    meaning: "The quintessential protection stone, black tourmaline is carried to deflect negative energy, ground scattered thoughts, and create an energetic boundary against stress and other people's moods.",
    affirmation: "I am grounded, protected, and unaffected by energy that is not mine.",
    uses: ["Keep by the front door or desk as an energetic boundary", "Carry when entering crowded or draining environments"],
    careNotes: "Very durable — safe for water, sun, and salt cleansing methods.",
    pairsWith: ["hematite", "selenite", "onyx", "smoky-quartz"],
    deepDive: {
      history: "Beyond its modern reputation as a protection stone, black tourmaline (schorl) has a specific, almost comic historical use: 18th-century Dutch glassblowers discovered that heating the stone made it attract ash, and began using it to clean their pipes, nicknaming it the Aschentrekker — \"ash puller.\" That practical property comes from pyroelectricity, the stone's ability to generate an electrical charge when heated, a trait tourmaline is still studied for today.",
      narrative: "That ash-pulling, charge-generating history maps unusually well onto its modern metaphysical use — black tourmaline is almost always described in terms of pulling something unwanted away from a person or space, whether that's framed as negative energy, electromagnetic static, or simply tension. It's rarely credited with giving anything new; its job is subtraction, clearing a path rather than filling it. That's part of why it's recommended so consistently for people who feel generally overwhelmed rather than for one specific ritual or goal.",
      propertyGroups: {
        "Protective": ["Deflects negative or chaotic energy", "Traditionally associated with EMF shielding"],
        "Emotional": ["Reduces general overwhelm", "Supports steady composure under stress"],
        "Spiritual": ["Grounds scattered or anxious energy into the body"]
      },
      extendedUses: [
        "Keep a piece by the front door as an energetic threshold",
        "Carry into crowded, draining, or high-conflict environments",
        "Place near electronics or a home office desk",
        "Hold at the end of an energy-work or meditation session to ground back into the body",
        "Bury small pieces around a garden's perimeter for a traditional protective boundary"
      ]
    }
  },
  {
    id: "blue-lace-agate",
    name: "Blue Lace Agate",
    photo: { file: "assets/photos/blue-lace-agate.webp" },
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Chalcedony (banded quartz)",
    hardness: 6.75,
    origin: ["Namibia", "South Africa", "Brazil"],
    chakra: ["Throat"],
    zodiac: ["Gemini", "Pisces"],
    element: ["Air"],
    planet: ["Mercury"],
    birthMonth: [],
    formation: "Banded chalcedony with delicate lace-like layers of pale blue and white.",
    properties: ["Calm communication", "Gentleness", "Stress relief", "Throat chakra support"],
    meaning: "A gentle stone for anyone who struggles to speak their truth, blue lace agate soothes anxiety around communication and encourages calm, clear, non-confrontational expression.",
    affirmation: "I express myself calmly, clearly, and without fear.",
    uses: ["Wear as a necklace resting at the throat before public speaking", "Hold during difficult conversations to stay composed"],
    careNotes: "Durable; safe for water and moderate sun exposure.",
    pairsWith: ["celestite", "angelite", "howlite", "lepidolite"],
    deepDive: {
      history: "Agate as a mineral family has been documented since antiquity — the Greek philosopher Theophrastus is credited with naming it after the Achates River in Sicily, where it was found abundantly around the 4th century BCE. Blue lace agate specifically is a far more recent entry: the delicate pale-blue banded material most associated with the name was only discovered in significant quantity in Namibia in the 20th century, making it a modern variety carrying an ancient family name.",
      narrative: "Its banding is where blue lace agate's calming reputation really comes from — the thin, parallel layers are often read almost literally as \"smoothed out,\" a visual echo of the emotional steadiness it's meant to encourage. It's considered one of the gentlest Throat-chakra stones specifically because its energy doesn't push for bold self-expression; it supports the quieter, more vulnerable act of simply saying what's true without flinching.",
      propertyGroups: {
        "Emotional": ["Soothes anxiety around speaking up", "Calms a racing nervous system"],
        "Mental": ["Supports clear, unhurried thinking before speaking"],
        "Spiritual": ["Opens gentle, honest self-expression"]
      },
      extendedUses: [
        "Wear as a pendant resting at the throat before a difficult conversation",
        "Keep on a desk during public speaking preparation",
        "Hold during therapy sessions or vulnerable conversations",
        "Place by the bed for children or anyone prone to nighttime anxiety",
        "Pair with rose quartz when the conversation needing courage is also an emotional one"
      ]
    }
  },
  {
    id: "calcite",
    name: "Calcite",
    photo: { file: "assets/photos/calcite.webp" },
    aliases: ["Optical Calcite (clear variety)"],
    colors: ["Clear/White", "Orange", "Green"],
    mineralClass: "Calcium carbonate",
    hardness: 3,
    origin: ["Mexico", "United States", "Iceland", "worldwide"],
    chakra: ["Solar Plexus", "Crown"],
    zodiac: ["Cancer"],
    element: ["Water"],
    planet: ["Moon"],
    birthMonth: [],
    formation: "Extremely common carbonate mineral that forms in a huge range of colors and habits, including the famous double-refracting \"optical calcite.\" Chakra association shifts with color — orange calcite leans Sacral/Solar Plexus, clear/optical calcite leans Crown.",
    properties: ["Amplification", "Energy cleansing", "Memory support", "Emotional clearing"],
    meaning: "Calcite is considered an energy amplifier and cleanser — it's said to clear stagnant energy from a space and boost whatever intention it's paired with. Orange calcite in particular is linked to creativity and emotional release.",
    affirmation: "I clear what is stagnant and amplify what serves my growth.",
    uses: ["Place a cluster in a room to keep energy circulating", "Pair with an intention-setting stone to magnify its effect"],
    careNotes: "Soft and reactive to acids — never cleanse with water or vinegar-based cleaners; keep away from prolonged sun to avoid fading colored varieties.",
    pairsWith: ["citrine", "clear-quartz", "carnelian"],
    deepDive: {
      history: "Few minerals have had as practical a historical role as calcite. Clear \"Iceland spar\" calcite splits light into two separate rays, a property called birefringence, and Viking sailors are widely believed to have used slabs of it as a \"sunstone\" to locate the sun's position through cloud cover for navigation. Centuries later, that same optical property made calcite essential in targeting optics during the Second World War, before synthetic alternatives became available — a rare case of a crystal mattering as much to physics and military history as to decoration.",
      narrative: "Calcite's metaphysical reputation as an amplifier draws directly from this light-splitting property — a single ray going in, two coming out. It's treated less as a stone with one fixed meaning and more as a kind of volume knob: whatever intention or energy it's paired with, calcite is said to make it more noticeable, more active, less stagnant. Different colors lean toward different specific effects (orange toward creativity and emotion, clear toward mental clarity), but the amplifying, clearing role stays consistent across the family.",
      propertyGroups: {
        "Spiritual": ["Amplifies intention and nearby energy", "Clears stagnant or stuck energy from a space"],
        "Mental": ["Supports memory and mental clarity"],
        "Emotional": ["Encourages emotional release, especially in orange varieties"]
      },
      extendedUses: [
        "Place a cluster in a room that feels stagnant or heavy",
        "Pair with any other crystal to amplify its specific intention",
        "Keep on a desk during studying or detailed work",
        "Use orange calcite specifically during creative blocks",
        "Clear a space with calcite nearby after an argument or stressful event"
      ]
    }
  },
  {
    id: "carnelian",
    name: "Carnelian",
    photo: { file: "assets/photos/carnelian.webp" },
    aliases: [],
    colors: ["Orange"],
    mineralClass: "Chalcedony (banded quartz)",
    hardness: 6.75,
    origin: ["India", "Brazil", "Uruguay", "Indonesia"],
    chakra: ["Sacral"],
    zodiac: ["Leo", "Virgo", "Taurus"],
    element: ["Fire"],
    planet: ["Sun"],
    birthMonth: [],
    formation: "Reddish-orange chalcedony colored by iron oxide impurities; historically used in ancient Egyptian and Roman seals.",
    properties: ["Motivation", "Creativity", "Courage", "Vitality", "Sacral chakra activation"],
    meaning: "Carnelian is a stone of motivation and creative fire, used to overcome procrastination, boost confidence, and reignite passion for work, art, or physical vitality.",
    affirmation: "I move forward with courage, creativity, and energy.",
    uses: ["Keep on a workspace to combat creative block or procrastination", "Carry before athletic or physical activities for a vitality boost"],
    careNotes: "Durable; safe for water and sunlight.",
    pairsWith: ["citrine", "tigers-eye", "aventurine"],
    deepDive: {
      history: "Carnelian was treasured across the ancient world — Egyptians called it the \"Blood of Isis\" and carved it into protective amulets placed within mummy wrappings, and Romans favored it above nearly any other stone for signet rings specifically because hot wax doesn't stick to carnelian, making it ideal for sealing documents. It traveled extensively along Mesopotamian trade routes alongside lapis lazuli, and beads of it have been found in burial sites thousands of years old across multiple continents.",
      narrative: "Carnelian's fire-toned color has always been tied to vitality and action rather than reflection — it's not a stone associated with quiet contemplation so much as momentum. Its sacral-chakra placement reflects this: it's considered a stone of creative and physical life-force, useful precisely in moments when thinking has gone on long enough and what's actually needed is the nerve to begin. That practical, get-moving energy is part of why it has stayed relevant across so many different eras and cultures.",
      propertyGroups: {
        "Emotional": ["Builds confidence", "Eases fear of starting something new"],
        "Mental": ["Cuts through procrastination", "Sharpens focus on the task at hand"],
        "Spiritual": ["Activates the Sacral chakra", "Channels creative and physical life-force"]
      },
      extendedUses: [
        "Keep on a workspace during a stalled or overdue project",
        "Carry before physical activity, sport, or performance",
        "Hold for a moment before starting a task you've been avoiding",
        "Wear during creative work that requires momentum over perfection",
        "Pair with citrine for a combined confidence-and-abundance boost"
      ]
    }
  },
  {
    id: "celestite",
    name: "Celestite",
    photo: { file: "assets/photos/celestite.webp" },
    aliases: ["Celestine"],
    colors: ["Blue"],
    mineralClass: "Strontium sulfate",
    hardness: 3.25,
    origin: ["Madagascar", "United States (Ohio)"],
    chakra: ["Throat", "Crown"],
    zodiac: ["Gemini"],
    element: ["Air"],
    planet: ["Neptune"],
    birthMonth: [],
    formation: "Forms as pale blue, glassy, geode-like clusters of bladed crystals, often found alongside limestone deposits.",
    properties: ["Angelic connection", "Peace", "Dream recall", "Spiritual communication"],
    meaning: "Celestite's soft sky-blue color and gentle energy are associated with angelic realms and deep peace. It's a favorite for dreamwork, meditation, and calming an anxious or overstimulated mind.",
    affirmation: "I rest in peace and open myself to gentle, higher guidance.",
    uses: ["Place on a nightstand to encourage peaceful sleep and vivid dreams", "Hold during meditation to quiet mental noise"],
    careNotes: "Soft and water-soluble — never cleanse with water. Keep out of direct sun to preserve color; handle gently.",
    pairsWith: ["angelite", "selenite", "blue-lace-agate"],
    deepDive: {
      history: "Celestite takes its name from the Latin caelestis, \"celestial,\" for its pale, sky-like color — a relatively modern mineralogical name first formally used after notable deposits were documented in 18th-century Sicily. Compared to stones used since antiquity, celestite entered both scientific and metaphysical vocabulary fairly late, with most of its spiritual reputation building specifically through 20th-century crystal-healing practice rather than older tradition.",
      narrative: "Celestite's soft, glassy blue clusters are almost always described in terms of peace rather than power — it's rarely positioned as a stone that does something dramatic, and more often as one that simply lowers the noise. That gentleness is central to its reputation for angelic or dream-related communication: not loud, prophetic visions, but a quieter receptivity that's easiest to access in rest, right before sleep, or in unhurried meditation.",
      propertyGroups: {
        "Spiritual": ["Said to support angelic or higher guidance", "Encourages vivid dream recall"],
        "Emotional": ["Deeply calming during anxious periods", "Softens overstimulation"],
        "Mental": ["Quiets an overactive or racing mind"]
      },
      extendedUses: [
        "Place on a nightstand to support peaceful sleep and dream recall",
        "Hold during meditation when the goal is simply to quiet down",
        "Keep in a shared living space to soften a tense or overstimulating environment",
        "Use before journaling a dream immediately upon waking",
        "Pair with angelite for a particularly gentle, sleep-focused duo"
      ]
    }
  },
  {
    id: "charoite",
    name: "Charoite",
    photo: { file: "assets/photos/charoite.webp" },
    aliases: [],
    colors: ["Purple"],
    mineralClass: "Complex silicate",
    hardness: 5.5,
    origin: ["Russia (Chara River region, Siberia — the only known source)"],
    chakra: ["Crown", "Third Eye", "Heart"],
    zodiac: ["Scorpio", "Sagittarius"],
    element: ["Fire"],
    planet: ["Pluto"],
    birthMonth: [],
    formation: "Rare silicate mineral found in a single location in Siberia, typically displaying swirling purple, lavender, and black patterns.",
    properties: ["Transformation", "Courage to change", "Spiritual acceptance", "Release of fear"],
    meaning: "Charoite is a powerful transformation stone, often reached for during major life transitions. It helps release fear and resistance so change can be met with acceptance rather than anxiety.",
    affirmation: "I accept change with courage and trust the path unfolding.",
    uses: ["Hold during meditation when facing a major life decision", "Keep nearby during periods of upheaval to ease resistance"],
    careNotes: "Moderately durable but can be brittle along swirl patterns — avoid harsh impacts. Safe for brief water contact; limit sun exposure.",
    pairsWith: ["moldavite", "labradorite", "amethyst"],
    deepDive: {
      history: "Charoite has one of the shortest, most specific origin stories of any stone in this collection: it was discovered only in 1978, along the Chara River in Siberia, and remains found in commercial quantity in that single location to this day. Named directly after the river, it has no ancient mythology, no pharaohs or empires attached to it — just a late-Soviet-era mineralogical discovery that quickly became prized for its unmistakable swirling purple pattern.",
      narrative: "With no centuries of accumulated folklore to draw on, charoite's metaphysical reputation has formed almost entirely around its visual intensity — the swirling, almost turbulent pattern reads directly as a stone of transformation in motion rather than stillness. It's reached for less during calm reflection and more during the messier middle of a real change: a move, a breakup, a career shift, the kind of transition where resistance and acceptance are still actively fighting it out.",
      propertyGroups: {
        "Emotional": ["Eases fear and resistance to change", "Supports acceptance during upheaval"],
        "Spiritual": ["Encourages courage during major transformation", "Opens the Crown and Third Eye together"],
        "Mental": ["Helps settle a mind caught between two decisions"]
      },
      extendedUses: [
        "Hold during meditation when facing a decision you keep avoiding",
        "Keep nearby throughout a major move, breakup, or career change",
        "Use during a period when change feels like it's happening to you rather than by you",
        "Pair with labradorite for support through an especially disorienting transition",
        "Journal alongside charoite meditation to track resistance as it softens"
      ]
    }
  },
  {
    id: "citrine",
    name: "Citrine",
    photo: { file: "assets/photos/citrine.webp" },
    aliases: [],
    colors: ["Yellow"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "Madagascar", "Zambia"],
    chakra: ["Solar Plexus"],
    zodiac: ["Gemini", "Aries", "Libra"],
    element: ["Fire"],
    planet: ["Sun"],
    birthMonth: ["November"],
    formation: "Yellow-to-amber quartz colored by trace iron; most commercial citrine is heat-treated amethyst, though natural citrine also occurs.",
    properties: ["Abundance", "Confidence", "Joy", "Manifestation", "Personal power"],
    meaning: "Nicknamed the \"merchant's stone,\" citrine is one of the most popular stones for abundance and success. It carries warm, sunny energy associated with confidence, joy, and manifesting goals.",
    affirmation: "I am worthy of abundance, and I welcome success with joy.",
    uses: ["Keep in a cash drawer, wallet, or workspace to invite prosperity", "Hold while visualizing a goal to support manifestation practice"],
    careNotes: "Durable, but natural citrine can fade with prolonged strong sunlight. Safe for water cleansing.",
    pairsWith: ["clear-quartz", "aventurine", "tigers-eye", "carnelian"],
    deepDive: {
      history: "Citrine takes its name from the French citron, \"lemon,\" and has been used in jewelry since Greek and Roman antiquity, though genuinely natural citrine is quite rare — most commercial \"citrine\" throughout history and today is heat-treated amethyst, a transformation traders have exploited for centuries. In the Scottish Highlands, smoky-yellow quartz known as cairngorm (closely related to citrine) was carved into the handles of ceremonial daggers and set into formal Highland dress, giving it a distinctly regional, aristocratic association.",
      narrative: "Citrine's nickname, the \"merchant's stone,\" comes from an old and fairly literal practice: shopkeepers reportedly kept a piece in the cash register or till, believing it would keep money circulating rather than stagnating. That same logic carries through its modern use — citrine isn't typically framed as a stone that creates wealth from nothing, but one that keeps abundance moving, encouraging generosity and reinvestment rather than hoarding or scarcity thinking.",
      propertyGroups: {
        "Spiritual": ["Encourages generosity alongside abundance", "Keeps energy and opportunity in motion"],
        "Emotional": ["Lifts low mood", "Builds quiet, steady confidence"],
        "Mental": ["Supports a goal-oriented, optimistic mindset"]
      },
      extendedUses: [
        "Keep in a cash drawer, wallet, or workspace to invite prosperity",
        "Hold while visualizing a specific financial or career goal",
        "Place near the entrance of a business",
        "Pair with green aventurine for luck plus abundance together",
        "Use during a goal-setting ritual at the start of a new year or season"
      ]
    }
  },
  {
    id: "clear-quartz",
    name: "Clear Quartz",
    photo: { file: "assets/photos/clear-quartz.webp" },
    aliases: ["Rock Crystal"],
    colors: ["Clear/White"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "United States (Arkansas)", "Madagascar", "worldwide"],
    chakra: ["Crown", "all chakras"],
    zodiac: ["all signs (master healer)"],
    element: ["Air", "Fire", "Water", "Earth"],
    planet: ["Sun"],
    birthMonth: ["April (alternate)"],
    formation: "The most abundant crystalline mineral on Earth; forms as six-sided prisms terminating in a point.",
    properties: ["Amplification", "Clarity", "Master healer", "Energy cleansing", "Intention programming"],
    meaning: "Called the \"master healer,\" clear quartz amplifies energy and intention, clarifies thought, and is traditionally used to cleanse and recharge other crystals. Its neutral, universal energy makes it work with every chakra and sign.",
    affirmation: "My intentions are clear, amplified, and aligned with my highest good.",
    uses: ["Program with a specific intention by holding and visualizing your goal", "Place near other crystals to cleanse and recharge them", "Use in a crystal grid as the central amplifying stone"],
    careNotes: "Very durable — safe for water, sun, salt, and virtually any cleansing method.",
    pairsWith: ["amethyst", "rose-quartz", "citrine", "selenite", "black-tourmaline"],
    deepDive: {
      history: "Clear quartz may be the single most historically significant crystal on Earth. Ancient Greeks believed it was water frozen so permanently by the gods that it could never melt — the word \"crystal\" itself comes from the Greek krystallos, meaning ice. Cultures across Japan, Australia, Mesoamerica, and medieval Europe independently carved it into scrying spheres for divination, and it remains one of the earliest materials humans shaped into seals, lenses, and ornamental objects.",
      narrative: "Clear quartz's role as the \"master healer\" comes from a property that's almost definitional rather than poetic: it's neutral. Unlike stones tied to one color, chakra, or specific emotional theme, clear quartz is considered a blank, highly responsive amplifier — it takes on and intensifies whatever intention, energy, or combination of stones it's paired with, which is exactly why it shows up so often as a supporting player in nearly every other crystal's pairing list rather than carrying one narrow identity of its own.",
      propertyGroups: {
        "Spiritual": ["Amplifies any intention set upon it", "Connects to all chakras at once"],
        "Mental": ["Clarifies scattered or cluttered thinking"],
        "Emotional": ["Supports whatever emotional work is already underway"]
      },
      extendedUses: [
        "Program with a specific intention by holding and clearly visualizing your goal",
        "Place near other crystals to cleanse and recharge them",
        "Use as the central amplifying stone in a crystal grid",
        "Carry when you want to intensify the effect of another stone you're working with",
        "Keep one large piece as an all-purpose, go-to stone for any situation"
      ]
    }
  },
  {
    id: "fluorite",
    name: "Fluorite",
    photo: { file: "assets/photos/fluorite.webp" },
    aliases: ["Rainbow Fluorite"],
    colors: ["Purple", "Green", "Multicolor"],
    mineralClass: "Calcium fluoride (halide)",
    hardness: 4,
    origin: ["China", "Mexico", "United Kingdom"],
    chakra: ["Third Eye", "Crown"],
    zodiac: ["Pisces", "Capricorn"],
    element: ["Water"],
    planet: ["Neptune"],
    birthMonth: [],
    formation: "Forms as cubic or octahedral crystals, frequently banded in purple, green, blue, and clear zones within a single specimen.",
    properties: ["Mental clarity", "Focus", "Decision-making", "Energetic filtering"],
    meaning: "Known as the \"genius stone,\" fluorite is used to sharpen focus, organize scattered thoughts, and filter out mental and energetic \"noise\" — a favorite for studying or decision-heavy work.",
    affirmation: "My mind is clear, focused, and free of unnecessary noise.",
    uses: ["Keep on a desk during study or detailed work", "Hold before decision-making to cut through confusion"],
    careNotes: "Soft and brittle — avoid drops and impacts. Never cleanse with water (can dissolve over long exposure) or harsh sunlight.",
    pairsWith: ["amethyst", "clear-quartz", "labradorite"],
    deepDive: {
      history: "Fluorite's name comes from the Latin fluere, \"to flow,\" because of its long industrial use as a flux — a substance added to smelting ore to lower its melting point and help impurities separate out, a role it still plays in steel and aluminum production today. Long before that industrial use was understood, the Romans prized carved fluorite vessels known as murrine, reportedly paying sums that rivaled or exceeded the price of gold for a single cup. China has carved fluorite into decorative objects for centuries as well, valuing its unusual range of natural color.",
      narrative: "Fluorite's banded, multi-colored crystal structure maps neatly onto its reputation as a \"genius stone\" — rather than one fixed property, different zones of color are often read as different kinds of mental support working simultaneously: focus, memory, intuition, and calm, layered together in a single piece. It's less associated with emotional healing than with cognitive performance, making it a favorite for students, researchers, and anyone whose work depends on sustained, organized thought.",
      propertyGroups: {
        "Mental": ["Sharpens focus and concentration", "Organizes scattered thoughts", "Filters out mental \"noise\""],
        "Spiritual": ["Supports clear intuitive insight without overwhelm"],
        "Protective": ["Said to buffer against absorbing others' chaotic energy"]
      },
      extendedUses: [
        "Keep on a desk during study sessions or detailed, technical work",
        "Hold before a decision that requires cutting through conflicting information",
        "Place near a computer or workspace prone to distraction",
        "Use during meditation focused on organizing a complex problem",
        "Pair with amethyst when focus work also needs to feel calm, not just sharp"
      ]
    }
  },
  {
    id: "hematite",
    name: "Hematite",
    photo: { file: "assets/photos/hematite.webp" },
    aliases: [],
    colors: ["Black", "Gray"],
    mineralClass: "Iron oxide",
    hardness: 5.75,
    origin: ["Brazil", "United Kingdom", "worldwide"],
    chakra: ["Root"],
    zodiac: ["Aries", "Aquarius"],
    element: ["Fire", "Earth"],
    planet: ["Mars", "Saturn"],
    birthMonth: [],
    formation: "Dense iron oxide mineral with a distinctive metallic gray luster and a red streak when scratched.",
    properties: ["Grounding", "Mental focus", "Willpower", "Emotional stability"],
    meaning: "Heavy and metallic, hematite is a deeply grounding stone linked to willpower, logic, and emotional stability. It's often used to ground after energy work or to anchor focus during demanding tasks.",
    affirmation: "I am grounded, focused, and in control of my own energy.",
    uses: ["Hold at the end of a meditation or energy-work session to ground back into the body", "Carry during overwhelming days for steady focus"],
    careNotes: "Durable but can rust if left wet — dry thoroughly after any water contact. Safe for brief sun exposure.",
    pairsWith: ["black-tourmaline", "tigers-eye", "onyx"],
    deepDive: {
      history: "Hematite's name comes from the Greek haima, \"blood,\" not because of the stone's own metallic gray color but because of the deep red streak it leaves when ground into powder. That red powder — ochre — is among the oldest pigments used by humans, found in cave paintings and ceremonial burials tens of thousands of years old across multiple continents, and many cultures independently used ground hematite as body paint, including for war and ritual.",
      narrative: "Hematite's weight is almost always part of its description — it's noticeably denser than most other stones its size, and that physical heaviness is treated as a direct metaphor for its grounding effect. Where many grounding stones work gently, hematite is often described as more immediate and literal: a stone that pulls focus back into the body and the present moment quickly, which is part of why it's so often reached for specifically at the end of energy work or meditation, rather than during it.",
      propertyGroups: {
        "Mental": ["Sharpens focus under pressure", "Supports logical, practical thinking"],
        "Spiritual": ["Grounds energy quickly after inner work", "Anchors awareness back into the body"],
        "Emotional": ["Builds steady willpower", "Stabilizes an overwhelmed or scattered mood"]
      },
      extendedUses: [
        "Hold at the end of a meditation or energy-work session to ground back into the body",
        "Carry during overwhelming or chaotic days for steady focus",
        "Keep on a desk during demanding, detail-heavy tasks",
        "Use before a high-stakes conversation that requires a level head",
        "Pair with black tourmaline for a combined grounding-and-protection stack"
      ]
    }
  },
  {
    id: "howlite",
    name: "Howlite",
    photo: { file: "assets/photos/howlite.webp" },
    aliases: [],
    colors: ["White"],
    mineralClass: "Borate mineral",
    hardness: 3.5,
    origin: ["Canada", "United States"],
    chakra: ["Crown"],
    zodiac: ["Gemini", "Virgo"],
    element: ["Air"],
    planet: ["Moon"],
    birthMonth: [],
    formation: "Porous white mineral with distinctive gray veining, often dyed to imitate turquoise in jewelry.",
    properties: ["Calm", "Patience", "Emotional awareness", "Anger release"],
    meaning: "Howlite is reached for during moments of frustration or insomnia — it's said to calm an overactive or angry mind, encourage patience, and help process emotions before reacting.",
    affirmation: "I respond with patience, and I release what frustrates me.",
    uses: ["Keep by the bed to quiet racing thoughts before sleep", "Carry during stressful situations to pause before reacting"],
    careNotes: "Soft and porous — easily scratched, and will absorb dyes/liquids. Avoid prolonged water exposure.",
    pairsWith: ["blue-lace-agate", "lepidolite", "selenite"],
    deepDive: {
      history: "Howlite was first described in 1868 by Canadian geologist Henry How, who identified the mineral in Nova Scotia — it's named directly after him, with no ancient mythology attached. Its real cultural footprint today is almost entirely practical: howlite's porous, absorbent white structure takes dye exceptionally well, so the vast majority of \"turquoise\" sold at low prices in costume jewelry is actually dyed howlite, a substitution that's been common in the gem trade for decades.",
      narrative: "Despite that borrowed, dyed-turquoise reputation, howlite in its natural white-and-gray form has its own distinct identity as one of the calmest stones available — it's consistently described as useful specifically for anger and frustration, rather than sadness or fear. It doesn't suppress a reaction so much as slow it down just enough to choose a different response, which is why it's so often recommended for insomnia caused by a racing, irritated mind rather than general anxiety.",
      propertyGroups: {
        "Emotional": ["Calms anger and frustration", "Encourages patience under pressure"],
        "Mental": ["Quiets a racing, irritated mind before sleep"],
        "Spiritual": ["Supports emotional awareness before reacting"]
      },
      extendedUses: [
        "Keep by the bed to quiet racing or irritated thoughts before sleep",
        "Carry during a stressful day prone to short tempers",
        "Hold for a moment before responding to something that's upset you",
        "Use during meditation focused on processing anger constructively",
        "Pair with blue lace agate for a doubly gentle, calming combination"
      ]
    }
  },
  {
    id: "kunzite",
    name: "Kunzite",
    photo: { file: "assets/photos/kunzite.webp" },
    aliases: [],
    colors: ["Pink", "Purple"],
    mineralClass: "Spodumene (lithium aluminum silicate)",
    hardness: 6.75,
    origin: ["Brazil", "Afghanistan", "Madagascar"],
    chakra: ["Heart"],
    zodiac: ["Taurus", "Leo", "Scorpio"],
    element: ["Water"],
    planet: ["Venus"],
    birthMonth: [],
    formation: "Pink-to-lilac variety of spodumene colored by trace manganese; often forms in long, flat, striated prisms.",
    properties: ["Unconditional love", "Emotional healing", "Calm", "Self-love"],
    meaning: "Kunzite carries a gentle, loving energy associated with emotional healing and self-compassion. It's used to soften a guarded heart and encourage unconditional love, both for others and oneself.",
    affirmation: "I am open to love, beginning with the love I give myself.",
    uses: ["Place on the heart during rest to soften emotional guardedness", "Carry during times of heartbreak or self-criticism"],
    careNotes: "Can fade in strong sunlight and is brittle along its striations — handle gently and avoid drops. Safe for brief water contact.",
    pairsWith: ["rose-quartz", "rhodochrosite", "prehnite"],
    deepDive: {
      history: "Kunzite is a distinctly early-20th-century stone: it was first identified and described in 1902, named after George Frederick Kunz, the renowned American gemologist and chief buyer for Tiffany & Co., who was the first to formally recognize it as a new gem variety of spodumene. Unlike stones carried through millennia of folklore, kunzite's reputation has been built almost entirely within the modern era of crystal healing, shaped more by 20th- and 21st-century practitioners than by ancient tradition.",
      narrative: "Kunzite's pale lilac-to-pink color is consistently described in softer, more vulnerable terms than other Heart-chakra stones like rose quartz — where rose quartz is often framed as nurturing and warm, kunzite is more often described as delicate, even a little fragile, which mirrors its real-world brittleness. It's frequently recommended specifically for people who find it hard to receive love or support, rather than those learning to give it, with an emphasis on softening emotional defenses that have been up for a long time.",
      propertyGroups: {
        "Emotional": ["Softens long-held emotional guardedness", "Supports self-compassion"],
        "Spiritual": ["Opens the Heart chakra gently", "Encourages receiving love, not just giving it"],
        "Mental": ["Quiets self-critical inner dialogue"]
      },
      extendedUses: [
        "Place on the heart during rest to soften emotional guardedness",
        "Carry during a period of heartbreak or self-criticism",
        "Use during meditation focused specifically on receiving support from others",
        "Keep nearby during therapy or vulnerable emotional work",
        "Pair with rose quartz for a deeper, two-stone heart-healing combination"
      ]
    }
  },
  {
    id: "labradorite",
    name: "Labradorite",
    photo: { file: "assets/photos/labradorite.webp" },
    aliases: ["Spectrolite"],
    colors: ["Gray", "Multicolor"],
    mineralClass: "Feldspar (plagioclase)",
    hardness: 6.25,
    origin: ["Canada (Labrador)", "Madagascar", "Finland"],
    chakra: ["Third Eye", "Crown", "Throat"],
    zodiac: ["Leo", "Scorpio", "Sagittarius"],
    element: ["Water"],
    planet: ["Uranus", "Neptune", "Moon"],
    birthMonth: [],
    formation: "Feldspar mineral famous for labradorescence — a flash of blue, green, or gold light caused by internal light-scattering layers.",
    properties: ["Transformation", "Intuition", "Psychic protection", "Magic/mystery"],
    meaning: "Called the \"stone of magic,\" labradorite is associated with transformation and awakening intuitive gifts. Its shifting internal flash is said to mirror its ability to reveal what's hidden beneath the surface — in situations and in oneself.",
    affirmation: "I trust my intuition to reveal what I need to see.",
    uses: ["Hold during meditation to deepen intuitive insight", "Carry during major life transitions for a sense of protected transformation"],
    careNotes: "Durable enough for everyday wear; safe for water, but avoid prolonged strong sunlight.",
    pairsWith: ["moonstone", "amethyst", "moldavite", "charoite"],
    deepDive: {
      history: "Labradorite was first documented by Moravian missionaries in Labrador, Canada, in 1770, though the Inuit had long known the stone before that. A well-known piece of Inuit folklore holds that the Northern Lights were once trapped inside a great rock along the Labrador coast, until a wandering warrior struck it free with his spear — most of the light escaped into the sky, but some remained captured within the stone, which is said to explain the flash of color, labradorescence, still visible inside it today.",
      narrative: "That flash is really the center of labradorite's entire metaphysical identity — unlike most stones, whose meaning stays fairly constant as you turn them, labradorite visibly changes depending on the angle, appearing dull gray one moment and brilliant blue-green-gold the next. That shifting quality is why it's so consistently described as a stone of hidden depths and transformation: a reminder that there's more happening beneath a calm surface than is visible at first glance, in a stone and often in a person.",
      propertyGroups: {
        "Spiritual": ["Awakens intuitive and psychic ability", "Reveals what's hidden beneath the surface"],
        "Mental": ["Supports seeing a situation from a new angle"],
        "Protective": ["Said to shield energy during transformation or change"]
      },
      extendedUses: [
        "Hold during meditation to deepen intuitive insight",
        "Carry during a major life transition for a sense of protected transformation",
        "Use before a situation where you suspect there's more going on than what's visible",
        "Wear as jewelry during times you want to feel quietly, privately powerful",
        "Pair with moonstone for an intuition-focused duo with complementary energy"
      ]
    }
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli",
    photo: { file: "assets/photos/lapis-lazuli.webp" },
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Metamorphic rock (lazurite, calcite, pyrite)",
    hardness: 5.25,
    origin: ["Afghanistan", "Chile", "Russia"],
    chakra: ["Third Eye", "Throat"],
    zodiac: ["Sagittarius"],
    element: ["Air", "Water"],
    planet: ["Venus", "Jupiter"],
    birthMonth: ["September"],
    formation: "A rock, not a single mineral — deep blue lazurite flecked with golden pyrite and white calcite veins.",
    properties: ["Wisdom", "Truth", "Inner vision", "Royal/sacred connection"],
    meaning: "One of the oldest spiritual stones in human history, lapis lazuli has symbolized wisdom and truth since ancient Egypt and Mesopotamia. It's used to deepen self-awareness and speak one's truth with clarity.",
    affirmation: "I honor my truth and see myself with wisdom and clarity.",
    uses: ["Wear close to the throat to encourage honest self-expression", "Keep nearby during study of spiritual or philosophical topics"],
    careNotes: "Moderately soft and porous — avoid harsh chemicals and prolonged water soaking, which can dull its finish. Keep out of strong sun.",
    pairsWith: ["azurite", "celestite", "amethyst"],
    deepDive: {
      history: "Lapis lazuli is one of the oldest gemstones continuously valued by humans, mined in Afghanistan's Badakhshan region for over 6,000 years — the same deposits that supplied ancient Egypt, Mesopotamia, and eventually Renaissance Europe. It covered Tutankhamun's funeral mask, is mentioned in the Epic of Gilgamesh, and was ground into ultramarine, the most expensive pigment available to Renaissance painters, who reserved its use almost exclusively for the robes of the Virgin Mary due to the cost.",
      narrative: "That extraordinary expense and exclusivity shaped lapis lazuli's reputation as a stone of status as much as spirituality — it has rarely been treated as an everyday stone and almost always as one connected to royalty, divinity, and the sacred. Its metaphysical association with truth and wisdom builds directly on that history: it was the material worn by those believed closest to the gods or to ultimate authority, which carried into its modern use as a stone for accessing one's own inner authority and honest self-knowledge.",
      propertyGroups: {
        "Spiritual": ["Connects to ancient, sacred wisdom traditions", "Deepens self-knowledge"],
        "Mental": ["Encourages honest self-assessment"],
        "Emotional": ["Builds quiet, grounded confidence"]
      },
      extendedUses: [
        "Wear close to the throat to encourage honest self-expression",
        "Keep nearby during study of spiritual, historical, or philosophical topics",
        "Hold during meditation focused on your own inner authority or voice",
        "Use during journaling meant to uncover an honest, sometimes uncomfortable truth",
        "Pair with azurite for a deeper, more intensive Third Eye combination"
      ]
    }
  },
  {
    id: "lavender-quartz",
    name: "Lavender Quartz",
    photo: { file: "assets/photos/lavender-quartz.webp" },
    aliases: ["Lilac Quartz"],
    colors: ["Purple"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "Madagascar"],
    chakra: ["Heart", "Third Eye"],
    zodiac: ["Pisces", "Libra"],
    element: ["Water"],
    planet: ["Venus"],
    birthMonth: [],
    formation: "Pale lilac quartz, distinct from amethyst, colored by trace manganese or microscopic dumortierite inclusions.",
    properties: ["Gentle love", "Emotional balance", "Calm intuition", "Heart-mind connection"],
    meaning: "A softer cousin to both amethyst and rose quartz, lavender quartz blends heart-centered love with calm, intuitive clarity — useful for balancing emotion and insight at the same time.",
    affirmation: "My heart and my intuition move together, gently and in balance.",
    uses: ["Hold during meditation that combines emotional release with intuitive reflection", "Place on the heart or forehead for quiet, grounded calm"],
    careNotes: "Durable like other quartz, but color can fade in strong sun over time. Safe for water cleansing.",
    pairsWith: ["rose-quartz", "amethyst", "rhodochrosite"],
    deepDive: {
      history: "Unlike amethyst, its close relative, lavender quartz has no deep historical lineage of its own — it's a more recently distinguished quartz variety, separated out and named specifically within the modern gem trade once its subtler, paler purple tone was recognized as visually and energetically distinct from both amethyst and rose quartz. It carries quartz's long mineralogical history as a family, but its own specific identity is a fairly contemporary development.",
      narrative: "Lavender quartz sits deliberately between two more established stones, and its metaphysical reputation reflects that in-between position directly — it's consistently described as blending amethyst's calm, intuitive clarity with rose quartz's heart-centered warmth, rather than being read as a wholly separate energy. That makes it a favorite for emotional work that also requires some mental clarity: processing a feeling without getting lost in it, or thinking something through without going cold and purely analytical.",
      propertyGroups: {
        "Emotional": ["Balances emotional intensity with calm", "Softens grief or sadness gently"],
        "Spiritual": ["Bridges the Heart and Third Eye", "Combines intuition with compassion"],
        "Mental": ["Supports clear-headed emotional processing"]
      },
      extendedUses: [
        "Hold during meditation that combines emotional release with intuitive reflection",
        "Place on the heart or forehead for quiet, grounded calm",
        "Use during journaling that mixes feelings with decision-making",
        "Keep nearby during a conversation that needs both honesty and gentleness",
        "Pair with rose quartz or amethyst depending on which side of its blend you need more of that day"
      ]
    }
  },
  {
    id: "lepidolite",
    name: "Lepidolite",
    photo: { file: "assets/photos/lepidolite.webp" },
    aliases: [],
    colors: ["Purple", "Pink"],
    mineralClass: "Lithium mica",
    hardness: 3,
    origin: ["Brazil", "Madagascar", "United States"],
    chakra: ["Heart", "Third Eye", "Crown"],
    zodiac: ["Libra"],
    element: ["Water"],
    planet: ["Neptune"],
    birthMonth: [],
    formation: "Soft, flaky lithium-rich mica, often found in rounded, scaly masses with a lilac sheen.",
    properties: ["Stress relief", "Emotional balance", "Transition support", "Calm"],
    meaning: "Lepidolite's natural lithium content gives it a strong association with calming anxious or scattered energy — it's a go-to stone for stress, overwhelm, and easing through transitions.",
    affirmation: "I release stress and move through change with calm and balance.",
    uses: ["Keep on a nightstand during anxious or restless periods", "Carry during major transitions like moving, career change, or loss"],
    careNotes: "Very soft and flaky — avoid water, which can cause it to flake or disintegrate. Handle gently.",
    pairsWith: ["lavender-quartz", "howlite", "blue-lace-agate"],
    deepDive: {
      history: "Lepidolite takes its name from the Greek lepidos, \"scale,\" for its flaky, mica-like structure, first described mineralogically in the 18th century. For most of its industrial history it was valued less for its appearance than for its chemistry — lepidolite is a significant natural source of lithium, and was mined for exactly that purpose long before the crystal-healing world adopted it, a fact that quietly shaped the stone's later metaphysical reputation.",
      narrative: "That lithium content is impossible to separate from lepidolite's modern reputation as one of the calmest, most emotionally stabilizing stones available — the same element that gives it a geological identity is pharmaceutically associated with mood regulation, and crystal practitioners have long drawn a direct, if informal, line between the two. Whether or not that connection holds any literal weight, lepidolite's reputation for soothing anxiety, overwhelm, and turbulent transitions has stayed remarkably consistent across the crystal-healing community.",
      propertyGroups: {
        "Emotional": ["Eases anxiety and overwhelm", "Stabilizes mood during turbulent periods"],
        "Mental": ["Quiets obsessive or spiraling thoughts"],
        "Spiritual": ["Supports steadiness through major transitions"]
      },
      extendedUses: [
        "Keep on a nightstand during anxious or restless periods",
        "Carry during major transitions like moving, career change, or loss",
        "Hold during meditation focused specifically on calming an overactive mind",
        "Place in a shared space during a generally stressful season",
        "Pair with howlite for a doubly calming, anger-and-anxiety-soothing combination"
      ]
    }
  },
  {
    id: "malachite",
    name: "Malachite",
    photo: { file: "assets/photos/malachite.webp" },
    aliases: [],
    colors: ["Green"],
    mineralClass: "Copper carbonate hydroxide",
    hardness: 3.75,
    origin: ["Democratic Republic of the Congo", "Russia", "Zambia"],
    chakra: ["Heart", "Solar Plexus"],
    zodiac: ["Capricorn", "Scorpio"],
    element: ["Earth"],
    planet: ["Venus", "Mercury"],
    birthMonth: [],
    formation: "Banded green copper mineral forming in concentric, eye-like patterns, often alongside azurite.",
    properties: ["Transformation", "Protection", "Emotional release", "Heart healing"],
    meaning: "Malachite's swirling bands are said to mirror its role as a stone of deep transformation — it draws out and releases old emotional wounds, sometimes intensely, to clear the way for heart healing.",
    affirmation: "I release old wounds and transform with an open heart.",
    uses: ["Hold during deep emotional release or therapy-adjacent inner work", "Place on the heart during meditation focused on forgiveness"],
    careNotes: "Contains copper and can be toxic as dust or in water — never make elixirs, never cleanse with water, wash hands after extended handling, and keep raw/polished pieces away from children and pets.",
    pairsWith: ["azurite", "rhodochrosite", "black-tourmaline"],
    deepDive: {
      history: "Malachite has been mined and used since roughly 4000 BCE, among the earliest ores worked for copper and ground by ancient Egyptians into kohl eyeliner — the malachite-green eye paint seen throughout Egyptian art wasn't just decorative but believed to invoke the protection of Hathor and Horus. Centuries later, Russia's Ural Mountains produced malachite in such abundance that Tsarist Russia built entire architectural features from it, most famously the Malachite Room of the Winter Palace, with its columns and vases cut from the stone.",
      narrative: "Malachite's swirling, banded green pattern is almost always described in terms of eyes — concentric rings that genuinely resemble pupils, which fed directly into its old reputation as a protective, almost watchful stone, said to absorb negativity so thoroughly it would visibly darken or crack under psychic strain. That protective reputation carries a real intensity in modern practice too: malachite is consistently described as a stone that draws out old emotional wounds actively rather than gently, which is why it's often recommended in smaller doses than many other heart-centered stones.",
      propertyGroups: {
        "Emotional": ["Draws out and releases old emotional wounds", "Supports deep forgiveness work"],
        "Spiritual": ["Transforms stuck or stagnant patterns", "Traditionally seen as watchful and protective"],
        "Protective": ["Said to absorb negativity directed at the wearer"]
      },
      extendedUses: [
        "Hold during deep emotional release or therapy-adjacent inner work",
        "Place on the heart during meditation focused on forgiveness",
        "Use in shorter sessions rather than constant wear, given its intensity",
        "Keep polished pieces on display rather than handled often, to limit copper exposure",
        "Pair with rhodochrosite when the emotional work is specifically about self-love"
      ]
    }
  },
  {
    id: "moldavite",
    name: "Moldavite",
    photo: { file: "assets/photos/moldavite.webp" },
    aliases: [],
    colors: ["Green"],
    mineralClass: "Tektite (natural glass, meteorite-impact origin)",
    hardness: 5.5,
    origin: ["Czech Republic (only known source)"],
    chakra: ["Heart", "Crown", "all chakras"],
    zodiac: ["Scorpio", "Sagittarius"],
    element: ["Fire"],
    planet: ["associated with extraterrestrial/transformative origin"],
    birthMonth: [],
    formation: "Natural glass formed roughly 15 million years ago when a meteorite impact in present-day Germany melted and ejected material that cooled over the Czech Republic.",
    properties: ["Rapid transformation", "Spiritual acceleration", "Synchronicity", "Intense energy"],
    meaning: "Moldavite's extraterrestrial origin fuels its reputation as one of the most intense transformation stones — many report rapid life changes, vivid dreams, or a \"Moldavite flush\" of warmth after first handling it. It's recommended to ease in slowly.",
    affirmation: "I welcome transformation, even when it moves quickly, and I stay grounded through it.",
    uses: ["Start with short sessions (a few minutes) rather than constant wear, given its intensity", "Pair with a grounding stone like black tourmaline or hematite to balance its high energy"],
    careNotes: "Durable (it's glass), but genuine moldavite is often expensive and faked — buy from reputable sources. Safe for brief water contact; avoid harsh impacts.",
    pairsWith: ["charoite", "labradorite", "black-tourmaline", "clear-quartz"],
    deepDive: {
      history: "Moldavite's origin story is, quite literally, extraterrestrial. Roughly 15 million years ago, a meteorite struck what is now southern Germany with such force that molten material was ejected hundreds of kilometers away, raining down and cooling into glassy green fragments across the Moldau (Vltava) river valley in the Czech Republic — the only place on Earth it's found. It's turned up in jewelry and tools since prehistoric times, and Central European folklore has long told of \"stones from the sky\" carrying unusual fortune.",
      narrative: "Because of this violent, cosmic origin, moldavite has a reputation unlike almost any other stone in metaphysical practice. Many describe a \"moldavite flush\" — a sudden warmth or even emotional intensity on first holding one, as if its transformative energy is immediate rather than gentle and gradual. It's associated with rapid, sometimes uncomfortable personal change: old patterns, relationships, or circumstances that no longer serve you may shift or fall away quickly once you start working with it. For this reason, most experienced practitioners recommend easing into moldavite slowly, pairing it with grounding stones rather than wearing it constantly from day one.",
      propertyGroups: {
        "Emotional": ["Surfaces buried emotions quickly", "Can trigger cathartic release"],
        "Mental": ["Breaks rigid thought patterns", "Accelerates clarity, sometimes abruptly"],
        "Spiritual": ["Awakens the heart-mind connection", "Said to activate multiple chakras at once", "Connects to a cosmic or universal perspective"],
        "Protective": ["Best paired with a grounding stone to buffer its intensity"]
      },
      extendedUses: [
        "Start with just a few minutes of holding it rather than all-day wear",
        "Pair with black tourmaline or hematite to stay grounded through its intensity",
        "Use during a major life transition you're consciously choosing to lean into",
        "Journal immediately after a moldavite meditation to capture sudden insights",
        "Avoid using it during an already-overwhelming period — its energy tends to add, not soothe"
      ]
    }
  },
  {
    id: "moonstone",
    name: "Moonstone",
    photo: { file: "assets/photos/moonstone.webp" },
    aliases: [],
    colors: ["White", "Clear/White"],
    mineralClass: "Feldspar (orthoclase/plagioclase)",
    hardness: 6.25,
    origin: ["India", "Sri Lanka", "United States"],
    chakra: ["Crown", "Third Eye", "Sacral"],
    zodiac: ["Cancer"],
    element: ["Water"],
    planet: ["Moon"],
    birthMonth: ["June"],
    formation: "Feldspar displaying adularescence — a glowing, billowy light caused by internal layers scattering light, reminiscent of moonlight.",
    properties: ["Intuition", "New beginnings", "Feminine energy", "Emotional balance", "Cycles"],
    meaning: "Tied closely to lunar energy and cycles, moonstone is carried for intuition, emotional balance, and support through new beginnings — traditionally associated with fertility, cycles, and feminine energy.",
    affirmation: "I flow with my natural cycles and trust new beginnings.",
    uses: ["Carry during a new moon to set intentions for a fresh start", "Wear during times of hormonal or emotional fluctuation for balance"],
    careNotes: "Moderately durable but can have internal fractures — avoid sudden temperature changes and hard impacts. Safe for brief water contact.",
    pairsWith: ["labradorite", "selenite", "rose-quartz"],
    deepDive: {
      history: "Roman legend held that moonstone was literally formed from solidified moonlight, and both Romans and Greeks associated it with their lunar deities. In India, moonstone has long been considered sacred — traditionally regarded as a \"dream stone\" believed to bring beautiful visions in sleep, and still commonly given as a wedding gift to bless a marriage with harmony. Its modern popularity owes a great deal to the Art Nouveau period, when jewelers like René Lalique built entire pieces around its soft, glowing light.",
      narrative: "Moonstone's signature glow — a soft, billowy light that seems to move beneath its surface as it's turned — is almost universally tied to cycles rather than fixed states: the moon's phases, emotional tides, fertility, and the rhythm of beginnings and endings repeating rather than happening once. It's rarely framed as a stone for a single, one-time use, and much more often recommended as a companion for anything recurring or cyclical, from a monthly practice to a recurring emotional pattern someone is trying to understand.",
      propertyGroups: {
        "Spiritual": ["Attunes to lunar and natural cycles", "Supports intuition and dream recall"],
        "Emotional": ["Balances fluctuating or cyclical emotions", "Nurtures new beginnings"],
        "Mental": ["Encourages trust in timing rather than forcing outcomes"]
      },
      extendedUses: [
        "Carry during a new moon to set intentions for a fresh start",
        "Wear during times of hormonal or emotional fluctuation for balance",
        "Keep by the bed to encourage vivid, memorable dreams",
        "Use at the start of any recurring practice, monthly or otherwise",
        "Pair with labradorite for a deeper, intuition-focused combination"
      ]
    }
  },
  {
    id: "onyx",
    name: "Onyx",
    photo: { file: "assets/photos/onyx.webp" },
    aliases: ["Black Onyx"],
    colors: ["Black"],
    mineralClass: "Chalcedony (banded quartz)",
    hardness: 6.75,
    origin: ["Brazil", "India", "Madagascar"],
    chakra: ["Root"],
    zodiac: ["Leo", "Capricorn"],
    element: ["Earth"],
    planet: ["Saturn"],
    birthMonth: [],
    formation: "Solid-black (often dyed) banded chalcedony; natural onyx with true even black color is relatively rare.",
    properties: ["Strength", "Grounding", "Self-discipline", "Protection"],
    meaning: "Onyx is a stone of strength and self-mastery, used to build discipline, endurance, and a steady, grounded will during demanding periods or challenges.",
    affirmation: "I have the strength and discipline to endure and grow.",
    uses: ["Carry during periods requiring discipline, such as training or a demanding project", "Keep as a grounding touchstone during conflict"],
    careNotes: "Durable; safe for water and sunlight.",
    pairsWith: ["black-tourmaline", "hematite", "tigers-eye"],
    deepDive: {
      history: "Onyx takes its name from the Greek onyx, \"fingernail\" or \"claw\" — according to one classical myth, Cupid once trimmed the sleeping Venus's fingernails with an arrow tip, and because nothing belonging to a goddess could simply vanish, the fates turned the clippings to stone. Romans carved onyx extensively into cameos and seal rings for its clean, even banding, though some ancient cultures approached it more cautiously than other stones, associating its deep black color with sorrow or ill omen when worn carelessly.",
      narrative: "That slightly more complicated reputation has carried into modern use: onyx is treated less as a purely comforting stone and more as one tied to discipline, endurance, and controlled strength — qualities that require some friction to build. It's rarely recommended as a stone to simply relax with, and much more often as one to lean on specifically when something difficult needs to be endured, finished, or gotten through on willpower rather than ease.",
      propertyGroups: {
        "Mental": ["Builds self-discipline and focus", "Supports endurance through a hard task"],
        "Emotional": ["Steadies the nerves during conflict", "Encourages quiet, controlled strength"],
        "Protective": ["Traditionally worn to guard against draining situations"]
      },
      extendedUses: [
        "Carry during periods requiring discipline, such as training or a demanding project",
        "Keep as a grounding touchstone during conflict",
        "Hold before a task you know will require sheer persistence",
        "Wear during a long project's final, most difficult stretch",
        "Pair with hematite for a combined discipline-and-focus stack"
      ]
    }
  },
  {
    id: "peridot",
    name: "Peridot",
    photo: { file: "assets/photos/peridot.webp" },
    aliases: ["Chrysolite"],
    colors: ["Green"],
    mineralClass: "Olivine (silicate)",
    hardness: 6.75,
    origin: ["United States (Arizona)", "Pakistan", "Myanmar"],
    chakra: ["Heart", "Solar Plexus"],
    zodiac: ["Leo", "Virgo"],
    element: ["Earth"],
    planet: ["Mercury", "Venus"],
    birthMonth: ["August"],
    formation: "Gem-quality olivine, one of the few gemstones that forms deep in the Earth's mantle and is sometimes delivered to the surface by volcanic activity (and even found in meteorites).",
    properties: ["Abundance", "Growth", "Letting go", "Positivity"],
    meaning: "Peridot's bright green is associated with growth, renewal, and releasing resentment or jealousy to make room for positivity and abundance.",
    affirmation: "I release resentment and grow toward abundance and joy.",
    uses: ["Wear during periods of personal growth or starting fresh", "Hold when working through feelings of jealousy or resentment"],
    careNotes: "Sensitive to sudden temperature shifts and some household chemicals — clean gently, avoid ultrasonic cleaners.",
    pairsWith: ["aventurine", "prehnite", "citrine"],
    deepDive: {
      history: "Egyptians mined peridot over 3,500 years ago on Zabargad, a small Red Sea island they called Topazios, calling the stone the \"gem of the sun.\" Some gemologists now believe several of Cleopatra's famed \"emeralds\" were actually peridot from this very island, a mix-up ancient trade records never fully resolved. In Hawaii, where peridot occurs naturally in volcanic sand, it's traditionally associated with Pele, the goddess of volcanoes and fire, giving the stone an entirely separate mythology an ocean away from Egypt.",
      narrative: "Peridot is one of the few gems that forms deep within the Earth's mantle rather than closer to the surface, occasionally delivered upward by volcanic activity — a literal journey from deep pressure into bright, visible green. That geological path mirrors its metaphysical reputation closely: peridot is almost always framed around release and renewal, letting go of something old (resentment, jealousy, a grudge) specifically to make room for new growth, rather than holding onto comfort or the familiar.",
      propertyGroups: {
        "Emotional": ["Releases resentment and jealousy", "Supports a positive, open outlook"],
        "Spiritual": ["Encourages renewal and personal growth", "Opens the Heart and Solar Plexus together"],
        "Mental": ["Clears space for new ideas after letting go of old ones"]
      },
      extendedUses: [
        "Wear during periods of personal growth or starting fresh",
        "Hold when working through feelings of jealousy or resentment",
        "Keep nearby during a deliberate \"letting go\" ritual or journaling session",
        "Use at the close of a difficult chapter, right before beginning a new one",
        "Pair with citrine for a combined renewal-and-abundance focus"
      ]
    }
  },
  {
    id: "prehnite",
    name: "Prehnite",
    photo: { file: "assets/photos/prehnite.webp" },
    aliases: [],
    colors: ["Green"],
    mineralClass: "Calcium aluminum silicate",
    hardness: 6.25,
    origin: ["South Africa", "Australia", "China"],
    chakra: ["Heart", "Solar Plexus"],
    zodiac: ["Libra"],
    element: ["Earth"],
    planet: ["Venus", "Jupiter"],
    birthMonth: [],
    formation: "Forms in rounded, grape-like (botryoidal) clusters or crystalline aggregates, usually pale yellow-green.",
    properties: ["Inner peace", "Foresight", "Unconditional love", "Preparedness"],
    meaning: "Sometimes called the \"stone of prophecy,\" prehnite is used to calm the mind before it needs calming — supporting foresight, preparation, and a steady, unconditionally loving inner state.",
    affirmation: "I prepare with peace and meet the future with an open heart.",
    uses: ["Hold during meditation focused on planning or foresight", "Keep nearby during times requiring patience and preparation"],
    careNotes: "Moderately durable; safe for brief water contact, but avoid prolonged sun exposure.",
    pairsWith: ["peridot", "kunzite", "rhodochrosite"],
    deepDive: {
      history: "Prehnite holds a small but notable distinction in mineralogy: it was the first mineral ever named after a person. Dutch colonial officer and amateur mineral collector Hendrik von Prehn brought the first specimens to Europe from South Africa's Cape of Good Hope in the 1780s, and the stone was named in his honor shortly after. Compared to stones carried through thousands of years of continuous use, prehnite's documented history is barely two and a half centuries old.",
      narrative: "Without ancient lore to draw from, prehnite's metaphysical reputation has been built almost entirely around one specific, fairly unusual theme: foresight. It's sometimes called the \"stone of prophecy,\" not in a dramatic, fortune-telling sense, but in the quieter sense of being well-prepared — calm, organized, and a step ahead of what's coming. That makes it a stone people reach for before something rather than during or after it, less about processing the past and more about readiness for what's next.",
      propertyGroups: {
        "Mental": ["Supports foresight and preparation", "Calms a mind before it needs calming"],
        "Spiritual": ["Said to support prophetic or anticipatory insight"],
        "Emotional": ["Encourages patience while waiting on something uncertain"]
      },
      extendedUses: [
        "Hold during meditation focused on planning or foresight",
        "Keep nearby during times requiring patience and preparation",
        "Use before a big decision or event you want to feel ready for, not just reactive to",
        "Place on a desk during planning or strategy work",
        "Pair with kunzite when preparation also involves a vulnerable emotional topic"
      ]
    }
  },
  {
    id: "rhodochrosite",
    name: "Rhodochrosite",
    photo: { file: "assets/photos/rhodochrosite.webp" },
    aliases: [],
    colors: ["Pink"],
    mineralClass: "Manganese carbonate",
    hardness: 3.75,
    origin: ["Argentina", "Peru", "South Africa"],
    chakra: ["Heart"],
    zodiac: ["Scorpio", "Leo"],
    element: ["Fire"],
    planet: ["Mars", "Venus"],
    birthMonth: [],
    formation: "Banded pink-and-white carbonate mineral, often cut into distinctive concentric \"target\" patterns.",
    properties: ["Self-love", "Compassion", "Emotional healing", "Inner child healing"],
    meaning: "Rhodochrosite is strongly linked to self-love and healing old emotional wounds — often described as a stone for reconnecting with and comforting the \"inner child.\"",
    affirmation: "I love myself fully, and I nurture the parts of me that need healing.",
    uses: ["Hold during inner-child or self-compassion meditation", "Keep nearby during emotional healing work or therapy"],
    careNotes: "Soft and sensitive to heat and acids — avoid prolonged sun and harsh cleaners. Safe for brief water contact.",
    pairsWith: ["rose-quartz", "kunzite", "malachite"],
    deepDive: {
      history: "Rhodochrosite is closely tied to a single place: the Capillitas mine high in the Argentine Andes, source of most of the finest banded material sold today under the nickname \"Inca Rose.\" According to regional legend, the stone formed from the blood of ancient Incan rulers, turned to stone as it seeped into the earth — a story that, true or not, has stayed attached to the mineral since it first reached wider markets in the 20th century.",
      narrative: "Rhodochrosite's concentric, target-like banding is frequently read almost literally, as layers built up around a center — a visual metaphor for how its emotional work is often described. Rather than general heart-healing, it's associated specifically with reconnecting to earlier, more vulnerable parts of oneself: inner-child work, reparenting, and the particular kind of self-love that has to reach back before it can move forward.",
      propertyGroups: {
        "Emotional": ["Supports inner-child and reparenting work", "Deepens self-love and self-forgiveness"],
        "Spiritual": ["Opens the Heart chakra toward compassion for the self"],
        "Mental": ["Encourages gentler self-talk"]
      },
      extendedUses: [
        "Hold during inner-child or self-compassion meditation",
        "Keep nearby during emotional healing work or therapy",
        "Use during journaling that revisits an earlier, more vulnerable version of yourself",
        "Place on the heart during rest after a hard emotional conversation",
        "Pair with rose quartz for a deeper, double heart-centered focus"
      ]
    }
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    photo: { file: "assets/photos/rose-quartz.webp" },
    aliases: [],
    colors: ["Pink"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "Madagascar", "South Africa"],
    chakra: ["Heart"],
    zodiac: ["Taurus", "Libra"],
    element: ["Water"],
    planet: ["Venus"],
    birthMonth: [],
    formation: "Pale pink, typically massive (non-crystalline) quartz colored by trace titanium or manganese.",
    properties: ["Unconditional love", "Self-love", "Compassion", "Emotional healing"],
    meaning: "The definitive stone of love, rose quartz opens and softens the heart — used equally for romantic love, self-love, friendship, and general emotional healing and compassion.",
    affirmation: "I am worthy of love, and I offer compassion to myself and others.",
    uses: ["Keep on a nightstand or in a relationship space to encourage loving energy", "Hold during self-care or self-love practices"],
    careNotes: "Durable; safe for water, though prolonged strong sun can fade its color slightly over years.",
    pairsWith: ["clear-quartz", "rhodochrosite", "kunzite", "amethyst"],
    deepDive: {
      history: "Rose quartz has played a role in beauty and healing rituals for millennia — archaeological evidence shows rose quartz face masks and jewelry in use roughly 7,000 years ago in Mesopotamia, and ancient Egyptians incorporated it into early skincare in the belief it could slow aging. Romans carved rose quartz into seals to mark ownership, and across Tibetan tradition it has long symbolized compassion and the open heart. Its pairing with Venus, goddess of love, in Western metaphysical tradition echoes its soft, warm color.",
      narrative: "Rose quartz is most often framed as a romantic love stone, but its deeper reputation is really about compassion in the broadest sense — toward oneself, toward family, toward strangers passing through a hard moment. It's considered especially suited to repairing a guarded or wounded heart, not by forcing it open, but by creating a gentle, non-demanding space in which trust can slowly return on its own terms. Many describe its energy as maternal: nurturing without being saccharine, soft without being weak.",
      propertyGroups: {
        "Emotional": ["Heals heartbreak", "Encourages self-forgiveness", "Softens grief"],
        "Mental": ["Quiets self-critical thoughts", "Encourages patience with yourself"],
        "Spiritual": ["Opens the Heart chakra", "Connects to unconditional love", "Supports a compassion practice"],
        "Protective": ["Buffers against emotional harshness", "Guards against creeping cynicism"]
      },
      extendedUses: [
        "Place on the chest during rest or meditation to soften emotional guardedness",
        "Keep in a shared space like a bedroom or living room to support harmonious relationships",
        "Use during self-love or self-forgiveness journaling practices",
        "Gift to a friend moving through heartbreak",
        "Carry during family gatherings that tend to surface old wounds",
        "Place near a mirror as a daily, low-key reminder of self-compassion"
      ]
    }
  },
  {
    id: "selenite",
    name: "Selenite",
    photo: { file: "assets/photos/selenite.webp" },
    aliases: [],
    colors: ["Clear/White"],
    mineralClass: "Gypsum (sulfate)",
    hardness: 2,
    origin: ["Morocco", "Mexico", "United States (Oklahoma)"],
    chakra: ["Crown"],
    zodiac: ["Cancer", "Taurus"],
    element: ["Air"],
    planet: ["Moon"],
    birthMonth: [],
    formation: "Fibrous, translucent gypsum crystal, often found as long wand-like formations or dense \"desert rose\" clusters.",
    properties: ["Cleansing", "Charging", "Spiritual connection", "Clarity"],
    meaning: "Selenite is best known as a self-cleansing stone used to clear and recharge other crystals, as well as to clear stagnant energy from a space or aura. Its high-vibration, light energy supports spiritual connection and mental clarity.",
    affirmation: "I clear what no longer serves me and welcome clarity and light.",
    uses: ["Place other crystals on a selenite slab or bowl to cleanse and recharge them", "Sweep a selenite wand around the body or a room to clear stagnant energy"],
    careNotes: "Extremely soft and water-soluble — never cleanse with water, keep away from humidity, and handle gently as it scratches and chips easily.",
    pairsWith: ["clear-quartz", "black-tourmaline", "amethyst", "moonstone"],
    deepDive: {
      history: "Selenite is named after Selene, the Greek goddess of the moon, for its pale, glowing translucence. Long before it became a crystal-healing staple, selenite (gypsum) was used structurally — thin sheets of it served as an early substitute for glass in Medieval windows, sometimes called lapis specularis, letting soft, diffused light into buildings centuries before clear glass became widely affordable.",
      narrative: "That history as a literal window — something light passes through rather than reflects off — lines up closely with selenite's modern reputation as one of the few stones considered self-cleansing, never needing to be cleared the way most other crystals do. It's treated less as a stone with its own fixed properties and more as a kind of conduit: clarity passing through rather than being generated, which is why it's so consistently used to clear and recharge other stones rather than to hold one meaning of its own.",
      propertyGroups: {
        "Spiritual": ["Clears and recharges other crystals", "Connects to the Crown chakra and higher awareness"],
        "Mental": ["Brings mental clarity and a sense of a clean slate"],
        "Emotional": ["Clears stagnant or heavy emotional energy from a space"]
      },
      extendedUses: [
        "Place other crystals on a selenite slab or bowl to cleanse and recharge them",
        "Sweep a selenite wand around the body or a room to clear stagnant energy",
        "Keep a piece in each main room as an ongoing, low-maintenance clearing tool",
        "Hold during meditation focused on starting fresh",
        "Pair with black tourmaline for a combined clearing-and-protection stack"
      ]
    }
  },
  {
    id: "stilbite",
    name: "Stilbite",
    photo: { file: "assets/photos/stilbite.webp" },
    aliases: [],
    colors: ["White", "Pink"],
    mineralClass: "Zeolite mineral",
    hardness: 3.75,
    origin: ["India (Deccan Traps)", "Iceland"],
    chakra: ["Heart", "Third Eye"],
    zodiac: ["Libra"],
    element: ["Water"],
    planet: ["Venus", "Moon"],
    birthMonth: [],
    formation: "Zeolite mineral forming in distinctive bow-tie or sheaf-like crystal clusters, often found with apophyllite.",
    properties: ["Dreamwork", "Relaxation", "Heart-mind connection", "Gentle insight"],
    meaning: "Stilbite's soft, pastel crystal sprays are associated with relaxation, dreamwork, and a gentle bridge between heart and mind — many use it to approach intuitive insight without intensity.",
    affirmation: "I relax into gentle insight and let my heart and mind align.",
    uses: ["Place on a nightstand to support relaxation and dream recall", "Hold during light meditation for gentle intuitive openness"],
    careNotes: "Delicate, fibrous structure — avoid water and handle with care to prevent flaking.",
    pairsWith: ["prehnite", "moonstone", "lavender-quartz"],
    deepDive: {
      history: "Stilbite's name comes from the Greek stilbein, \"to glitter,\" given by French mineralogist René Just Haüy in 1797. As part of the zeolite family, it was studied extensively through the 18th and 19th centuries as mineralogists worked to classify the distinctive bow-tie and sheaf-shaped crystal clusters found in volcanic basalt formations, especially the Deccan Traps of India, still one of the richest sources of fine stilbite today.",
      narrative: "Zeolites as a mineral family are well known in chemistry for their porous, almost sponge-like structure, able to absorb and release water and other molecules — a property that, loosely translated into metaphysical terms, feeds stilbite's gentle reputation for absorbing tension and softly releasing it rather than blocking or deflecting it outright. It's one of the least intense stones in regular crystal-healing use, rarely described as doing anything dramatic, which is exactly its appeal for people who find more \"powerful\" stones overstimulating.",
      propertyGroups: {
        "Emotional": ["Softens tension without overstimulating", "Supports gentle relaxation"],
        "Spiritual": ["Bridges the Heart and Third Eye quietly"],
        "Mental": ["Encourages restful, unforced dreaming"]
      },
      extendedUses: [
        "Place on a nightstand to support relaxation and dream recall",
        "Hold during light meditation for gentle intuitive openness",
        "Keep nearby during a stressful but low-stakes day for subtle support",
        "Use alongside prehnite when both calm and gentle foresight are needed",
        "Choose stilbite specifically when other stones have felt like too much"
      ]
    }
  },
  {
    id: "tanzanite",
    name: "Tanzanite",
    photo: { file: "assets/photos/tanzanite.webp" },
    aliases: [],
    colors: ["Blue", "Purple"],
    mineralClass: "Zoisite (silicate)",
    hardness: 6.5,
    origin: ["Tanzania (Merelani Hills — the only known source)"],
    chakra: ["Throat", "Third Eye", "Crown"],
    zodiac: ["Sagittarius", "Pisces"],
    element: ["Water"],
    planet: ["Jupiter", "Venus"],
    birthMonth: ["December"],
    formation: "A blue-violet variety of zoisite discovered in 1967, found in only one small region of Tanzania.",
    properties: ["Spiritual awakening", "Transformation", "Higher communication", "Deep meditation"],
    meaning: "One of the rarest gemstones on Earth, tanzanite is linked to spiritual awakening and transformation, bridging intuition (Third Eye) with clear communication (Throat) for a kind of deep, articulate insight.",
    affirmation: "I awaken to deeper understanding and communicate it with clarity.",
    uses: ["Hold during deep or advanced meditation practice", "Wear near the throat when needing to articulate complex or intuitive ideas"],
    careNotes: "Sensitive to heat, pressure, and sudden temperature change — avoid ultrasonic cleaners and prolonged sun; store carefully to avoid scratches from harder stones.",
    pairsWith: ["lapis-lazuli", "labradorite", "turquoise"],
    deepDive: {
      history: "Tanzanite's entire history fits within a single human lifetime: it was discovered in 1967 in the Merelani Hills of northern Tanzania, reportedly first noticed by Maasai herders after a lightning-sparked grass fire scorched the hillside and turned brown zoisite crystals a vivid blue-violet, revealing the gem beneath. Tiffany & Co. recognized its potential almost immediately, naming it after the only country on Earth where it's found and launching a major marketing campaign that made it one of the most recognizable gemstones to emerge in the last century.",
      narrative: "Because it's found in only one place, and that deposit is finite, tanzanite carries an unusual metaphysical weight for such a young stone — it's often described in terms of rarity and urgency, a once-in-an-era crystal rather than a renewable resource. That scarcity narrative blends with its trichroic quality (appearing blue, violet, or burgundy depending on the angle) to support its reputation as a stone of multidimensional awareness, encouraging a person to hold more than one perspective on a situation at once.",
      propertyGroups: {
        "Spiritual": ["Awakens multidimensional awareness", "Deepens meditation and inner vision"],
        "Mental": ["Supports holding more than one perspective at once"],
        "Emotional": ["Encourages transformation without panic about the unknown"]
      },
      extendedUses: [
        "Hold during deep or advanced meditation practice",
        "Wear near the throat when needing to articulate complex or intuitive ideas",
        "Use during a decision that benefits from seeing more than one side clearly",
        "Keep nearby during a once-in-a-while, high-stakes life event",
        "Pair with lapis lazuli for a combined wisdom-and-insight focus"
      ]
    }
  },
  {
    id: "tigers-eye",
    name: "Tiger's Eye",
    photo: { file: "assets/photos/tigers-eye.webp" },
    aliases: [],
    colors: ["Brown", "Gold"],
    mineralClass: "Quartz (chatoyant, after fibrous crocidolite)",
    hardness: 7,
    origin: ["South Africa", "Australia", "India"],
    chakra: ["Sacral", "Solar Plexus"],
    zodiac: ["Leo", "Capricorn", "Gemini"],
    element: ["Fire", "Earth"],
    planet: ["Sun", "Mars"],
    birthMonth: [],
    formation: "Quartz that pseudomorphically replaced fibrous crocidolite, producing a golden-brown chatoyant (cat's-eye) shimmer.",
    properties: ["Confidence", "Courage", "Grounded action", "Protection", "Willpower"],
    meaning: "Tiger's eye combines grounded earth energy with solar confidence — it's carried for courage, willpower, and the confidence to take practical, grounded action toward goals.",
    affirmation: "I act with courage, confidence, and grounded determination.",
    uses: ["Carry before a decision or action that requires courage", "Keep at work to stay confident and focused under pressure"],
    careNotes: "Durable; safe for water and sunlight.",
    pairsWith: ["citrine", "carnelian", "hematite", "aventurine"],
    deepDive: {
      history: "Tiger's eye was prized across ancient Egypt and Rome specifically for its chatoyant shimmer, read by both cultures as resembling a watchful, solar eye. Roman soldiers are said to have carried it into battle believing it granted courage and protection, and in Egyptian tradition it was associated with the all-seeing eye of Ra, the sun god — a stone meant to grant not just bravery but clear sight of danger before it arrived.",
      narrative: "That chatoyant shimmer — a band of light that seems to move across the stone as it turns — comes from the same fibrous structure responsible for its name, and it's rarely separated from tiger's eye's reputation for confidence under pressure. Unlike stones associated with quiet inner work, tiger's eye is almost always framed around visible, external action: making a decision, standing your ground, or following through on something that requires nerve rather than reflection.",
      propertyGroups: {
        "Emotional": ["Builds courage and confidence", "Steadies nerves under pressure"],
        "Mental": ["Sharpens focus during high-stakes decisions"],
        "Protective": ["Traditionally carried for protection in conflict or danger"]
      },
      extendedUses: [
        "Carry before a decision or action that requires courage",
        "Keep at work to stay confident and focused under pressure",
        "Hold before a negotiation, confrontation, or high-stakes conversation",
        "Wear during a period where you need to visibly stand your ground",
        "Pair with carnelian for a combined courage-and-momentum stack"
      ]
    }
  },
  {
    id: "topaz",
    name: "Topaz",
    photo: { file: "assets/photos/topaz.webp" },
    aliases: ["Imperial Topaz", "Blue Topaz"],
    colors: ["Yellow", "Blue"],
    mineralClass: "Silicate (aluminum fluorosilicate)",
    hardness: 8,
    origin: ["Brazil", "Sri Lanka", "Russia"],
    chakra: ["Solar Plexus", "Throat"],
    zodiac: ["Sagittarius", "Scorpio"],
    element: ["Fire"],
    planet: ["Sun"],
    birthMonth: ["November"],
    formation: "Hard silicate gemstone occurring naturally in golden-yellow (imperial) tones; much commercial blue topaz is treated colorless topaz.",
    properties: ["Confidence", "Manifestation", "Truth", "Generosity"],
    meaning: "Topaz has long symbolized strength and manifestation. Golden topaz is tied to confidence and abundance, while blue topaz leans toward calm, honest communication.",
    affirmation: "I manifest my goals with confidence and speak my truth.",
    uses: ["Wear during goal-setting rituals, especially around the new year", "Keep nearby when needing confidence in communication"],
    careNotes: "Hard and durable, but can cleave along internal planes if struck hard. Safe for water; avoid prolonged extreme heat.",
    pairsWith: ["citrine", "lapis-lazuli", "turquoise"],
    deepDive: {
      history: "Topaz's name is tangled up with the same Red Sea island, Topazios (Zabargad), associated with peridot — ancient naming records conflated the two gems for centuries, and modern gemology didn't fully separate their identities until much later. Ancient Greeks believed topaz could increase physical strength and, in moments of true emergency, even render the wearer invisible. Golden \"Imperial\" topaz earned its name in 19th-century Russia, where fine specimens from the Ural Mountains were at one point restricted to the royal family alone.",
      narrative: "Topaz's warm golden color and its old association with strength and protection have carried forward into a modern reputation built around manifestation and generosity — not quiet, internal growth, but visible, outward success shared openly rather than hoarded privately. It's frequently recommended specifically for goal-setting moments, treated less as a stone for processing the past and more as one for actively declaring and pursuing what comes next.",
      propertyGroups: {
        "Mental": ["Supports clear goal-setting", "Builds confidence in communication"],
        "Spiritual": ["Encourages generosity alongside personal success"],
        "Emotional": ["Lifts mood and builds optimism"]
      },
      extendedUses: [
        "Wear during goal-setting rituals, especially around the new year",
        "Keep nearby when needing confidence in communication",
        "Hold while writing down a specific, ambitious intention",
        "Use before a presentation, pitch, or public declaration of a goal",
        "Pair with citrine for a doubled manifestation-and-confidence focus"
      ]
    }
  },
  {
    id: "turquoise",
    name: "Turquoise",
    photo: { file: "assets/photos/turquoise.webp" },
    aliases: [],
    colors: ["Blue", "Green"],
    mineralClass: "Copper aluminum phosphate",
    hardness: 5.5,
    origin: ["United States (Southwest)", "Iran", "Egypt"],
    chakra: ["Throat"],
    zodiac: ["Sagittarius"],
    element: ["Earth", "Air"],
    planet: ["Venus", "Neptune"],
    birthMonth: ["December"],
    formation: "Opaque blue-to-green copper mineral, among the oldest gemstones used by humans, often with dark matrix veining.",
    properties: ["Protection", "Honest communication", "Healing", "Wholeness"],
    meaning: "Turquoise has been treasured across cultures for thousands of years as a protective, healing stone that supports honest communication and a sense of wholeness between mind, body, and spirit.",
    affirmation: "I speak honestly, heal fully, and feel whole.",
    uses: ["Wear as jewelry for everyday protective, grounding support", "Keep nearby during healing work of any kind, physical or emotional"],
    careNotes: "Porous and sensitive to oils, chemicals, and prolonged water exposure, which can discolor it over time. Avoid perfumes and lotions on jewelry pieces.",
    pairsWith: ["lapis-lazuli", "tanzanite", "topaz"],
    deepDive: {
      history: "Turquoise has been treasured continuously for over 6,000 years, longer than almost any other gem in regular use today. It adorned Egyptian pharaohs, including pieces found within Tutankhamun's burial mask, and Persian turquoise — prized as among the finest in the world — once covered the domes of palaces, believed to protect those beneath from death by unnatural causes. Across the American Southwest, the Navajo, Pueblo, and Apache peoples have regarded turquoise as sacred for centuries, linking its color directly to sky and life-giving water.",
      narrative: "Turquoise's long, nearly universal reputation as a protective stone draws its strength from exactly that cross-cultural consistency — very few stones have been independently valued for protection by so many unconnected civilizations across so many centuries. That consistency has shaped its modern role as a kind of all-purpose guardian stone: not specialized toward one narrow fear, but generally protective of health, safety, and honest communication all at once.",
      propertyGroups: {
        "Protective": ["Traditionally worn as an all-purpose guardian stone", "Associated with physical safety and travel"],
        "Spiritual": ["Connects to sky, water, and life-force"],
        "Emotional": ["Supports honest, open communication"]
      },
      extendedUses: [
        "Wear as jewelry for everyday protective, grounding support",
        "Keep nearby during healing work of any kind, physical or emotional",
        "Carry while traveling, continuing its long tradition as a protective travel stone",
        "Use before a conversation that requires both honesty and courage",
        "Pair with lapis lazuli for a combined truth-and-protection duo"
      ]
    }
  },
  {
    id: "smoky-quartz",
    name: "Smoky Quartz",
    photo: { file: "assets/photos/smoky-quartz.webp" },
    aliases: ["Cairngorm"],
    colors: ["Brown", "Black", "Gray"],
    mineralClass: "Quartz (silicate)",
    hardness: 7,
    origin: ["Brazil", "United States", "Scotland", "Switzerland"],
    chakra: ["Root"],
    zodiac: ["Capricorn", "Scorpio", "Sagittarius"],
    element: ["Earth"],
    planet: ["Saturn"],
    birthMonth: [],
    formation: "Smoky brown-to-black quartz colored by natural irradiation acting on trace aluminum within the crystal lattice.",
    properties: ["Grounding", "Stress relief", "Protection", "Emotional balance"],
    meaning: "Smoky quartz is one of the most trusted grounding stones, prized for calmly absorbing and transmuting anxious or negative energy rather than simply deflecting it — a gentle, approachable stone for steadying the nervous system during stressful periods.",
    affirmation: "I release tension and stand steady on solid ground.",
    uses: ["Carry during high-stress days to stay calm and centered", "Place near electronics or in a busy room to ease mental clutter", "Pair with clear quartz to balance amplification with grounding"],
    careNotes: "Durable; safe for water and sunlight, though prolonged strong sun can lighten its color over many years.",
    pairsWith: ["black-tourmaline", "hematite", "clear-quartz"],
    deepDive: {
      history: "Under the name cairngorm, smoky quartz became a genuine national gem of Scotland, mined from the Cairngorm Mountains and cut into the handles of ceremonial dirks, sporrans, and kilt pins worn as part of formal Highland dress for centuries. Queen Victoria's well-documented fondness for the Scottish Highlands in the 19th century only deepened the stone's popularity, cementing its place in Scottish jewelry tradition well beyond its original highland sourcing.",
      narrative: "Smoky quartz occupies an unusual middle ground in the quartz family — warmer and earthier than clear quartz, but without the intensity of darker protective stones like black tourmaline or obsidian. That in-between quality is central to its reputation: it's consistently described as one of the gentlest, most approachable grounding stones, suited to daily, ongoing use rather than acute crisis, which is part of why it's so often recommended to people newer to crystal work.",
      propertyGroups: {
        "Emotional": ["Eases everyday stress and tension", "Supports steady emotional balance"],
        "Spiritual": ["Grounds energy gently, without heaviness"],
        "Protective": ["Softly absorbs anxious or negative energy"]
      },
      extendedUses: [
        "Carry during high-stress days to stay calm and centered",
        "Place near electronics or in a busy room to ease mental clutter",
        "Pair with clear quartz to balance amplification with grounding",
        "Wear daily as a gentle, ongoing grounding practice",
        "Keep on a desk for a calm, steady presence during long workdays"
      ]
    }
  },
  {
    id: "obsidian",
    name: "Obsidian",
    photo: { file: "assets/photos/obsidian.webp" },
    aliases: ["Volcanic Glass"],
    colors: ["Black"],
    mineralClass: "Volcanic glass (not a true mineral)",
    hardness: 5.5,
    origin: ["United States", "Mexico", "Iceland", "Italy"],
    chakra: ["Root"],
    zodiac: ["Scorpio", "Sagittarius"],
    element: ["Fire", "Earth"],
    planet: ["Saturn", "Pluto"],
    birthMonth: [],
    formation: "Forms when felsic lava cools so rapidly that no crystal structure has time to develop, producing a natural volcanic glass.",
    properties: ["Protection", "Shadow work", "Truth", "Grounding"],
    meaning: "Obsidian is a blunt, powerful protection stone associated with confronting hard truths — it's often reached for during shadow work, when facing patterns or fears that are easier to avoid than examine directly.",
    affirmation: "I face what is true, even when it's uncomfortable, and I am protected as I do.",
    uses: ["Hold during shadow work or therapy-adjacent reflection", "Keep near the front door as a protective stone", "Use a polished piece for scrying or mirror meditation"],
    careNotes: "Brittle and prone to chipping or sharp fractures — handle with care. Safe for brief water contact; avoid sudden temperature changes.",
    pairsWith: ["black-tourmaline", "smoky-quartz", "hematite"],
    deepDive: {
      history: "Obsidian takes its name from Obsius, a Roman who, according to the naturalist Pliny the Elder, first brought a similar glassy stone back from Ethiopia. Its deepest history, though, belongs to Mesoamerica: Aztec and Maya civilizations shaped obsidian into ceremonial blades, arrowheads, and famously, mirrors — one surviving Aztec obsidian mirror later found its way into the hands of John Dee, Elizabethan court astrologer, who reportedly used it for scrying and divination, a piece now held in the British Museum.",
      narrative: "Obsidian forms almost instantly as lava cools, with no time to crystallize — a violent, immediate process that lines up closely with its metaphysical reputation as a stone with no patience for comfortable avoidance. Where many protective stones work by softening or filtering difficult energy, obsidian is usually described as working by direct confrontation: showing a truth plainly, in a single reflective surface, rather than easing someone toward it gradually.",
      propertyGroups: {
        "Spiritual": ["Supports shadow work and honest self-confrontation", "Traditionally used for scrying and divination"],
        "Protective": ["Blunt, strong protective energy"],
        "Emotional": ["Surfaces avoided feelings directly"]
      },
      extendedUses: [
        "Hold during shadow work or therapy-adjacent reflection",
        "Keep near the front door as a protective stone",
        "Use a polished piece for scrying or mirror meditation",
        "Carry during a period when you know you've been avoiding something",
        "Pair with smoky quartz to soften its intensity with gentler grounding"
      ]
    }
  },
  {
    id: "pyrite",
    name: "Pyrite",
    photo: { file: "assets/photos/pyrite.webp" },
    aliases: ["Fool's Gold"],
    colors: ["Gold", "Yellow"],
    mineralClass: "Iron sulfide",
    hardness: 6.25,
    origin: ["Peru", "Spain", "United States"],
    chakra: ["Solar Plexus"],
    zodiac: ["Leo"],
    element: ["Fire", "Earth"],
    planet: ["Sun", "Mars"],
    birthMonth: [],
    formation: "Iron sulfide mineral that commonly forms in bright, metallic cubic crystals, famously mistaken for gold.",
    properties: ["Abundance", "Confidence", "Willpower", "Protection"],
    meaning: "Pyrite is a classic prosperity stone, carried to attract abundance and opportunity while reinforcing the confidence and willpower needed to act on it — pairing manifestation with motivation.",
    affirmation: "I act on opportunity with confidence, and abundance follows.",
    uses: ["Keep on a desk or in a cash drawer to invite prosperity", "Carry before a negotiation or big ask for a confidence boost"],
    careNotes: "Can tarnish or oxidize with prolonged moisture exposure — avoid water and humid storage, wipe with a dry cloth.",
    pairsWith: ["citrine", "tigers-eye", "carnelian"],
    deepDive: {
      history: "Pyrite's name comes from the Greek pyr, \"fire,\" because striking it against steel or flint throws a visible spark — a property humans relied on for fire-starting and, later, for the ignition mechanism in early wheellock firearms. The Inca are believed to have polished pyrite into mirrors centuries before European glass mirrors arrived in the Americas. Its most famous nickname, \"Fool's Gold,\" comes from its habit of deceiving hopeful prospectors throughout gold rushes across multiple continents and centuries.",
      narrative: "That history of being mistaken for something more valuable than it actually is sits at the center of pyrite's modern reputation — not as a stone that creates wealth out of nothing, but one that sharpens the judgment needed to recognize real opportunity versus a false one. It's as often associated with discernment and confidence in decision-making as with raw prosperity, treated like a stone that rewards clear-eyed action rather than wishful thinking.",
      propertyGroups: {
        "Mental": ["Sharpens judgment and discernment", "Builds confidence in decision-making"],
        "Spiritual": ["Attracts abundance and opportunity"],
        "Protective": ["Traditionally seen as a shield against negative energy"]
      },
      extendedUses: [
        "Keep on a desk or in a cash drawer to invite prosperity",
        "Carry before a negotiation or big ask for a confidence boost",
        "Hold while evaluating whether an opportunity is actually worth pursuing",
        "Place in a workspace associated with sales, business, or finance",
        "Pair with citrine for a doubled abundance-and-confidence combination"
      ]
    }
  },
  {
    id: "jade",
    name: "Jade",
    photo: { file: "assets/photos/jade.webp" },
    aliases: ["Nephrite"],
    colors: ["Green"],
    mineralClass: "Nephrite or jadeite (silicate)",
    hardness: 6.5,
    origin: ["Myanmar", "China", "New Zealand", "Guatemala"],
    chakra: ["Heart"],
    zodiac: ["Taurus", "Gemini"],
    element: ["Earth", "Water"],
    planet: ["Venus"],
    birthMonth: [],
    formation: "A tough, fine-grained silicate (nephrite or jadeite) prized for millennia for its carvability and deep green color.",
    properties: ["Luck", "Prosperity", "Harmony", "Protection"],
    meaning: "Jade carries one of the longest continuous histories of any gemstone, treasured across Chinese, Mesoamerican, and Māori cultures alike as a stone of luck, harmony, and protection — often carved and passed down as a family heirloom.",
    affirmation: "I move through life in harmony, carrying luck and protection with me.",
    uses: ["Carry or wear jade as an everyday luck and protection talisman", "Place a jade piece near a home's entrance for harmonious energy, a common feng shui practice"],
    careNotes: "Durable; safe for water. Avoid harsh chemicals and extreme heat, which can affect its polish.",
    pairsWith: ["aventurine", "rose-quartz", "citrine"],
    deepDive: {
      history: "Few gemstones carry as much continuous cultural weight as jade. In China, it's been valued above gold for over 5,000 years, carved into imperial seals and ceremonial objects, with Confucius himself writing about jade's qualities as a direct reflection of human virtues like benevolence, wisdom, and justice. An ocean away, Olmec, Maya, and Aztec civilizations independently prized jadeite above gold as well, using it in royal funerary masks, while in New Zealand, Māori carvers have shaped pounamu (nephrite jade) into treasured ancestral objects passed down for generations, each piece considered to carry the mana (spiritual power) of those who held it before.",
      narrative: "That remarkable pattern — multiple, entirely unconnected civilizations independently deciding jade mattered more than gold — gives it a kind of credibility few other stones carry. Jade's metaphysical reputation for luck and harmony isn't built on one culture's folklore but on a near-universal human instinct, and it's treated less as a stone for a single ritual moment and more as a long-term companion, traditionally passed down rather than used once and replaced.",
      propertyGroups: {
        "Spiritual": ["Invites luck and harmonious energy", "Carries protective, ancestral significance"],
        "Emotional": ["Supports steady, long-term emotional balance"],
        "Protective": ["Traditionally worn as a lifelong protective talisman"]
      },
      extendedUses: [
        "Carry or wear jade as an everyday luck and protection talisman",
        "Place a jade piece near a home's entrance for harmonious energy, a common feng shui practice",
        "Pass down a meaningful piece as an heirloom, honoring its traditional role",
        "Keep nearby during long-term goals rather than short-term wishes",
        "Pair with aventurine for a doubled luck-and-opportunity focus"
      ]
    }
  },
  {
    id: "garnet",
    name: "Garnet",
    photo: { file: "assets/photos/garnet.webp" },
    aliases: [],
    colors: ["Red"],
    mineralClass: "Silicate (garnet group)",
    hardness: 7,
    origin: ["India", "Africa", "United States", "Czech Republic"],
    chakra: ["Root"],
    zodiac: ["Capricorn", "Aquarius", "Leo"],
    element: ["Fire", "Earth"],
    planet: ["Mars"],
    birthMonth: ["January"],
    formation: "A group of silicate minerals sharing a common crystal structure, most familiar in deep red, though garnets occur in nearly every color.",
    properties: ["Vitality", "Passion", "Courage", "Grounded energy"],
    meaning: "Garnet is a stone of vital, grounded fire — traditionally carried for courage, stamina, and passionate commitment to one's goals, especially during periods that call for persistence.",
    affirmation: "I move forward with passion, courage, and steady endurance.",
    uses: ["Wear or carry during physically or emotionally demanding periods for stamina", "Keep nearby when recommitting to a long-term goal"],
    careNotes: "Durable; safe for water. Avoid sudden temperature changes and prolonged strong sun.",
    pairsWith: ["carnelian", "hematite", "black-tourmaline"],
    deepDive: {
      history: "Garnet's name comes from the Latin granatum, \"pomegranate,\" for its uncanny resemblance to the fruit's deep red seeds. Jewish legend holds that Noah hung a glowing garnet lantern aboard the Ark to light the way through the flood's darkness, and medieval crusaders and warriors across Europe commonly carried garnet amulets into battle, believing them capable of stopping bleeding and offering protection from injury. Centuries later, deep red garnet became a defining stone of Victorian mourning jewelry, worn to honor the memory of the dead.",
      narrative: "Garnet's long association with both battle and blood points toward a consistent theme across its history: vitality under real physical or emotional strain. It's rarely framed as a stone for quiet, easy moments, and much more often recommended specifically for periods that demand stamina — recovery, endurance, or simply the will to keep going when stopping would be easier. That thread runs from medieval battlefield amulets straight through to its modern use.",
      propertyGroups: {
        "Emotional": ["Builds stamina through difficult periods", "Encourages passionate commitment"],
        "Mental": ["Supports perseverance and follow-through"],
        "Spiritual": ["Activates the Root chakra's vital, grounded energy"]
      },
      extendedUses: [
        "Wear or carry during physically or emotionally demanding periods for stamina",
        "Keep nearby when recommitting to a long-term goal",
        "Use during recovery from illness, injury, or burnout",
        "Hold before a task that requires more endurance than enthusiasm",
        "Pair with hematite for a combined vitality-and-grounding stack"
      ]
    }
  },
  {
    id: "sodalite",
    name: "Sodalite",
    photo: { file: "assets/photos/sodalite.webp" },
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Tectosilicate",
    hardness: 5.75,
    origin: ["Brazil", "Canada", "Namibia"],
    chakra: ["Throat", "Third Eye"],
    zodiac: ["Sagittarius", "Virgo"],
    element: ["Water", "Air"],
    planet: ["Venus"],
    birthMonth: [],
    formation: "Deep blue tectosilicate often veined with white calcite, frequently mistaken for lapis lazuli but lacking lapis's golden pyrite flecks.",
    properties: ["Logic", "Clear communication", "Rational thought", "Self-trust"],
    meaning: "Sodalite pairs clear thinking with honest communication — it's reached for when a situation calls for rational, grounded truth-telling rather than emotional reactivity.",
    affirmation: "I think clearly and speak my truth with calm confidence.",
    uses: ["Keep on a desk during research, writing, or study", "Hold before a conversation that needs calm, rational honesty"],
    careNotes: "Durable; safe for water, though prolonged strong sun can fade its color.",
    pairsWith: ["lapis-lazuli", "blue-lace-agate", "celestite"],
    deepDive: {
      history: "Sodalite was first identified in Greenland in 1811, but it stayed a minor curiosity until large, gem-quality deposits were discovered in Ontario, Canada, in 1891. Those Canadian deposits were specifically mined to help decorate Marlborough House in London ahead of a royal visit, and the sudden association with British royalty gave sodalite an unexpected boost in popularity as an ornamental stone almost overnight.",
      narrative: "Sodalite is frequently mistaken for lapis lazuli at a glance, but it lacks lapis's golden pyrite flecks and carries a cooler, more uniform blue — a visual difference that maps neatly onto their differing reputations. Where lapis is tied to ancient wisdom and sacred status, sodalite's more modern, practical identity centers on everyday logic and honest communication: less about timeless truth, more about thinking clearly enough to say something accurate right now.",
      propertyGroups: {
        "Mental": ["Supports logical, rational thinking", "Clears mental fog before a decision"],
        "Spiritual": ["Encourages self-trust and inner authority"],
        "Emotional": ["Calms emotional reactivity before it's spoken aloud"]
      },
      extendedUses: [
        "Keep on a desk during research, writing, or study",
        "Hold before a conversation that needs calm, rational honesty",
        "Use during a decision that requires setting emotion aside briefly",
        "Place near a workspace prone to miscommunication or confusion",
        "Pair with lapis lazuli when logic and wisdom both need to be present"
      ]
    }
  },
  {
    id: "amazonite",
    name: "Amazonite",
    photo: { file: "assets/photos/amazonite.webp" },
    aliases: [],
    colors: ["Blue", "Green"],
    mineralClass: "Feldspar (microcline)",
    hardness: 6.25,
    origin: ["United States", "Russia", "Madagascar", "Brazil"],
    chakra: ["Heart", "Throat"],
    zodiac: ["Virgo"],
    element: ["Water", "Earth"],
    planet: ["Uranus"],
    birthMonth: [],
    formation: "A blue-green variety of microcline feldspar, colored by trace lead and water content within the crystal structure.",
    properties: ["Calm", "Emotional balance", "Honest communication", "Soothing"],
    meaning: "Amazonite is known as a gentle \"stone of truth and harmony,\" soothing emotional extremes while supporting honest, balanced communication — especially useful for calming anxiety before it turns into a reactive outburst.",
    affirmation: "I communicate from a place of calm, balance, and honesty.",
    uses: ["Keep nearby during anxious or emotionally charged moments", "Hold before a conversation that needs calm honesty rather than reactivity"],
    careNotes: "Moderately durable; safe for brief water contact, but avoid prolonged sun exposure, which can fade its color.",
    pairsWith: ["blue-lace-agate", "aventurine", "rose-quartz"],
    deepDive: {
      history: "Amazonite's name points to the Amazon River, though the mineral has never actually been found there in significant quantity — most historians believe early collectors confused it with another green stone genuinely sourced from the region, and the name simply stuck. Ancient Egyptians valued it regardless of the naming mix-up, including pieces in Tutankhamun's tomb, and some later legends tied it to the mythical Amazon warriors, said to have decorated their shields with its striking blue-green color.",
      narrative: "Amazonite's soft, mottled blue-green is consistently described in terms of balance rather than any single strong emotion — not purely calming like a pale blue stone, nor purely heart-centered like green, but genuinely both at once. That blended quality supports its reputation as a stone specifically for emotional regulation: not suppressing a strong reaction, but catching it early enough to respond rather than react, especially in conversations that could easily tip into conflict.",
      propertyGroups: {
        "Emotional": ["Soothes emotional extremes", "Calms anxiety before it becomes reactive"],
        "Spiritual": ["Balances the Heart and Throat together"],
        "Mental": ["Supports honest, measured communication"]
      },
      extendedUses: [
        "Keep nearby during anxious or emotionally charged moments",
        "Hold before a conversation that needs calm honesty rather than reactivity",
        "Use during a disagreement where staying measured matters more than winning",
        "Place in a shared space prone to tension or miscommunication",
        "Pair with blue lace agate for an especially gentle, throat-focused combination"
      ]
    }
  },
  {
    id: "aquamarine",
    name: "Aquamarine",
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Beryl (silicate)",
    hardness: 7.75,
    origin: ["Brazil", "Madagascar", "Nigeria", "Pakistan"],
    chakra: ["Throat"],
    zodiac: ["Pisces", "Aries", "Gemini"],
    element: ["Water"],
    planet: ["Neptune", "Moon"],
    birthMonth: ["March"],
    formation: "A blue-to-blue-green variety of beryl, colored by trace iron, typically forming in long hexagonal prisms.",
    properties: ["Calm", "Clear communication", "Courage", "Emotional balance"],
    meaning: "Named for its resemblance to seawater, aquamarine has long been considered a sailor's talisman, carried for safe passage and calm waters. It's used today to soothe anxiety and support honest, composed communication, especially under pressure.",
    affirmation: "I move through uncertainty with calm clarity and an open voice.",
    uses: ["Carry while traveling, especially over water, for a sense of safety", "Hold before a conversation that requires calm honesty", "Wear during public speaking to ease nervousness"],
    careNotes: "Durable; safe for water. Avoid prolonged exposure to strong sunlight, which can fade its color over time.",
    pairsWith: ["blue-lace-agate", "celestite", "moonstone"],
    deepDive: {
      history: "Aquamarine's name comes directly from the Latin aqua marina, \"water of the sea,\" and sailors across multiple seafaring cultures carried it as a protective talisman believed to calm rough waters and guarantee safe passage. Ancient Roman fishermen reportedly carried aquamarine for good fortune at sea, and medieval sailors continued the tradition for centuries, often engraving the stone with Neptune's image for extra protection.",
      narrative: "Aquamarine's association with the sea isn't just about its color — it carries forward into a reputation for the specific kind of courage needed to face something vast and uncertain, the way early sailors faced the open ocean. It's less a stone for dramatic transformation and more one for steady composure: staying calm not because nothing is happening, but because you trust yourself to handle what's ahead.",
      propertyGroups: {
        "Emotional": ["Calms anxiety and nervousness", "Supports steady composure under pressure"],
        "Spiritual": ["Traditionally protective during travel, especially over water"],
        "Mental": ["Clears mental fog before an important conversation"]
      },
      extendedUses: [
        "Carry while traveling, especially over water, for a sense of protection",
        "Hold before a conversation that requires calm honesty",
        "Wear during public speaking or performance to ease nerves",
        "Keep nearby during a period of uncertainty that requires quiet courage",
        "Pair with blue lace agate for a doubled calming, throat-focused combination"
      ]
    }
  },
  {
    id: "emerald",
    name: "Emerald",
    aliases: [],
    colors: ["Green"],
    mineralClass: "Beryl (silicate)",
    hardness: 7.75,
    origin: ["Colombia", "Zambia", "Brazil", "Afghanistan"],
    chakra: ["Heart"],
    zodiac: ["Taurus", "Gemini", "Cancer"],
    element: ["Earth", "Water"],
    planet: ["Venus", "Mercury"],
    birthMonth: ["May"],
    formation: "A vivid green variety of beryl, colored by trace chromium and/or vanadium; nearly all natural emeralds contain visible internal inclusions, poetically called \"jardin\" (garden) by gemologists.",
    properties: ["Unconditional love", "Loyalty", "Truth", "Abundance"],
    meaning: "Emerald has symbolized rebirth and fertility since antiquity, prized by Cleopatra and worn across royal courts for millennia. In metaphysical tradition it's considered a stone of deep, loyal love — romantic and otherwise — paired with a reputation for revealing truth and exposing deception in anyone who wears it dishonestly.",
    affirmation: "I love loyally, speak truthfully, and welcome abundance without losing myself.",
    uses: ["Wear to deepen trust and loyalty in an existing relationship", "Hold during meditation focused on unconditional love", "Keep nearby during negotiations where honesty matters"],
    careNotes: "Moderately durable but typically included with internal fractures — avoid ultrasonic cleaners and sudden temperature changes. Many emeralds are oil-treated; avoid harsh solvents.",
    pairsWith: ["rose-quartz", "jade", "aventurine"],
    deepDive: {
      history: "Emerald mining dates back at least 4,000 years to ancient Egypt, where Cleopatra was famously devoted to the stone, reportedly claiming entire mines as her personal property. Incan and Aztec civilizations independently prized emerald even before Spanish conquest, and the vast Colombian deposits Europeans encountered in the 16th century were already being actively mined and revered — one of several cases where a gemstone's \"discovery\" by Europe was really a forced redirection of existing supply.",
      narrative: "Emerald's old reputation as a detector of truth — said to grow cloudy or crack when worn by someone being deceitful or disloyal — feeds directly into its modern identity as a stone of loyal, unconditional love rather than passionate, fleeting romance. It's treated as a stone for the harder, more sustained parts of love: honesty during conflict, commitment over time, and loving someone's full reality rather than an idealized version of them.",
      propertyGroups: {
        "Emotional": ["Deepens loyalty and trust", "Supports unconditional, sustained love"],
        "Spiritual": ["Said to reveal dishonesty or deception"],
        "Mental": ["Encourages truthful self-expression"]
      },
      extendedUses: [
        "Wear to deepen trust and loyalty in an existing relationship",
        "Hold during meditation focused on unconditional love",
        "Keep nearby during negotiations or conversations where honesty matters",
        "Gift to mark a committed relationship or long partnership",
        "Pair with rose quartz when both loyalty and self-love need attention"
      ]
    }
  },
  {
    id: "ruby",
    name: "Ruby",
    aliases: [],
    colors: ["Red"],
    mineralClass: "Corundum (aluminum oxide)",
    hardness: 9,
    origin: ["Myanmar", "Thailand", "Mozambique", "Sri Lanka"],
    chakra: ["Root", "Heart"],
    zodiac: ["Leo", "Cancer", "Sagittarius"],
    element: ["Fire"],
    planet: ["Sun", "Mars"],
    birthMonth: ["July"],
    formation: "The red variety of corundum, colored by trace chromium; among the hardest natural gemstones, second only to diamond.",
    properties: ["Passion", "Vitality", "Courage", "Protection"],
    meaning: "Ruby has been called the \"king of gemstones\" across Sanskrit texts going back over 2,000 years, long associated with life-force, passion, and protection in battle. It's considered a stone of bold, embodied vitality — less about calm reflection and more about living fully, courageously, and with conviction.",
    affirmation: "I live boldly, love passionately, and protect what matters to me.",
    uses: ["Wear during periods requiring courage or bold action", "Hold before a commitment that requires full-hearted conviction", "Keep nearby when recovering physical or emotional vitality"],
    careNotes: "Extremely durable (second only to diamond); safe for water, sun, and everyday wear.",
    pairsWith: ["garnet", "carnelian", "citrine"],
    deepDive: {
      history: "Ancient Sanskrit texts called ruby ratnaraj, \"king of precious stones,\" and Burmese warriors reportedly embedded rubies into their skin before battle, believing the stone made them invincible. Medieval European royalty prized ruby as a symbol of passion and power, and it has remained one of the most consistently valuable gemstones in history — a flawless ruby can, carat for carat, outvalue even a comparable diamond.",
      narrative: "Ruby's deep red has never been subtle, and neither has its metaphysical reputation — it's consistently described in terms of full-bodied, undiluted life-force rather than gentleness. Where many heart-centered stones emphasize compassion or healing, ruby leans toward passion and vitality, treated as fuel for living boldly rather than a balm for difficulty. It's a stone associated with conviction: loving, working, and fighting for something without holding back.",
      propertyGroups: {
        "Emotional": ["Ignites passion and enthusiasm", "Builds raw courage"],
        "Spiritual": ["Activates vital life-force energy"],
        "Protective": ["Traditionally worn into conflict for protection and strength"]
      },
      extendedUses: [
        "Wear during periods requiring courage or bold action",
        "Hold before a commitment that requires full-hearted conviction",
        "Keep nearby when recovering physical or emotional vitality",
        "Carry into a competitive or high-stakes situation",
        "Pair with garnet for a combined passion-and-endurance stack"
      ]
    }
  },
  {
    id: "sapphire",
    name: "Sapphire",
    aliases: [],
    colors: ["Blue"],
    mineralClass: "Corundum (aluminum oxide)",
    hardness: 9,
    origin: ["Sri Lanka", "Myanmar", "Madagascar", "Australia"],
    chakra: ["Throat", "Third Eye"],
    zodiac: ["Virgo", "Libra", "Sagittarius"],
    element: ["Air", "Water"],
    planet: ["Saturn", "Jupiter"],
    birthMonth: ["September"],
    formation: "The blue variety of corundum (the same mineral as ruby), colored by trace iron and titanium; also occurs in nearly every other color except red, in which case it's classified as ruby.",
    properties: ["Wisdom", "Focus", "Truth", "Loyalty"],
    meaning: "Sapphire has adorned royal crowns and clergy rings for centuries, long believed to protect its wearer from harm and envy while sharpening wisdom and discernment. It's traditionally associated with loyalty and commitment, famously chosen for royal engagement rings as a symbol of enduring faithfulness.",
    affirmation: "I think clearly, act wisely, and stay true to my commitments.",
    uses: ["Wear during decisions that require wisdom over impulse", "Hold during study or focused mental work", "Keep nearby when renewing a commitment or promise"],
    careNotes: "Extremely durable (second only to diamond); safe for water, sun, and everyday wear.",
    pairsWith: ["lapis-lazuli", "sodalite", "labradorite"],
    deepDive: {
      history: "Sapphire has crowned royalty and clergy for well over a thousand years — medieval clergy wore sapphire rings as a symbol of heaven, and European royal families have used sapphires in coronation regalia and engagement jewelry for centuries, most famously the sapphire engagement-ring tradition carried into the British royal family. Ancient Persians reportedly believed the entire sky was reflected light off a giant sapphire the Earth rested upon.",
      narrative: "Sapphire's long association with clear, elevated authority — kings, clergy, judges — feeds directly into its modern reputation as a stone of discernment and wise judgment rather than raw intuition. It's treated as a cooler, more disciplined cousin to other Third Eye stones: less about mystical insight and more about the kind of clear-headed wisdom that holds up under scrutiny and responsibility.",
      propertyGroups: {
        "Mental": ["Sharpens focus and discernment", "Supports wise, considered decisions"],
        "Spiritual": ["Connects to higher wisdom and truth"],
        "Emotional": ["Strengthens loyalty and commitment"]
      },
      extendedUses: [
        "Wear during decisions that require wisdom over impulse",
        "Hold during study or focused mental work",
        "Keep nearby when renewing a commitment or promise",
        "Use before a judgment call you need to get right, not just fast",
        "Pair with lapis lazuli for a combined wisdom-and-truth focus"
      ]
    }
  },
  {
    id: "opal",
    name: "Opal",
    aliases: [],
    colors: ["White", "Multicolor"],
    mineralClass: "Hydrated silica (mineraloid)",
    hardness: 5.75,
    origin: ["Australia", "Ethiopia", "Mexico"],
    chakra: ["Crown", "Third Eye"],
    zodiac: ["Libra", "Scorpio", "Pisces"],
    element: ["Water"],
    planet: ["Venus", "Neptune"],
    birthMonth: ["October"],
    formation: "A hydrated form of silica, not technically a crystal since it lacks a regular internal structure; its famous \"play of color\" comes from microscopic spheres of silica diffracting light.",
    properties: ["Creativity", "Emotional amplification", "Inspiration", "Transformation"],
    meaning: "Opal's shifting rainbow flash has made it a stone of inspiration and creativity across cultures, from ancient Rome (where it symbolized hope and purity) to Aboriginal Australian creation stories tied to the Dreamtime. It's considered an emotionally amplifying stone — intensifying whatever feeling or intention is already present, for better or worse.",
    affirmation: "I let my true colors show and trust what I create with them.",
    uses: ["Wear during creative projects to spark inspiration", "Hold during meditation focused on self-expression", "Use intentionally rather than passively, given its amplifying nature"],
    careNotes: "Contains water within its structure and can crack if it dries out or faces sudden temperature change — avoid prolonged sun, heat, and ultrasonic cleaners. Store with slight humidity.",
    pairsWith: ["moonstone", "labradorite", "rose-quartz"],
    deepDive: {
      history: "Opal has carried a notably divided reputation across history — ancient Romans considered it a stone of hope and good fortune, second only to emerald in value, while a wave of 19th-century superstition (partly traced to a Sir Walter Scott novel in which an opal-wearing character meets a bad end) left opal unfairly branded as unlucky for unmarried wearers in Victorian Europe. Aboriginal Australian traditions, from the land that still produces most of the world's fine opal, tell a very different story: that the Creator descended on a rainbow, and the stone marks where its colors touched the earth.",
      narrative: "Opal's internal structure — microscopic silica spheres bending light into shifting color — means no two opals ever flash quite the same way, and that genuine uniqueness underpins its reputation as a stone of individual creativity and self-expression. Its reputation as an amplifier is taken seriously in metaphysical practice: it's generally recommended for people already working on something constructive, since it's said to intensify whatever energy or mood is already present rather than introduce a new one.",
      propertyGroups: {
        "Spiritual": ["Amplifies whatever intention or mood is present", "Connects to inspiration and imagination"],
        "Emotional": ["Intensifies existing emotions — approach with clear intention"],
        "Mental": ["Sparks creative thinking and self-expression"]
      },
      extendedUses: [
        "Wear during creative projects to spark inspiration",
        "Hold during meditation focused on self-expression",
        "Use with clear, positive intention rather than passively, given its amplifying nature",
        "Keep nearby during artistic or imaginative work specifically",
        "Pair with moonstone for a dreamy, intuition-focused combination"
      ]
    }
  },
  {
    id: "larimar",
    name: "Larimar",
    aliases: ["Dominican Turquoise", "Blue Pectolite"],
    colors: ["Blue"],
    mineralClass: "Pectolite (silicate)",
    hardness: 5,
    origin: ["Dominican Republic (only known source)"],
    chakra: ["Throat", "Heart"],
    zodiac: ["Pisces", "Taurus", "Leo"],
    element: ["Water", "Air"],
    planet: ["Neptune"],
    birthMonth: [],
    formation: "A rare blue variety of pectolite, found in commercial quantity only in the Dominican Republic, colored by trace copper; its white-and-blue pattern is often compared to Caribbean sea foam.",
    properties: ["Calm", "Clarity", "Emotional healing", "Peaceful communication"],
    meaning: "Named for discoverer Miguel Méndez's daughter Larissa combined with mar (Spanish for \"sea\"), larimar wasn't formally identified until 1974 despite having been noticed by locals for generations. Its ocean-blue swirls are closely associated with the calm, healing presence of the sea — used to soothe emotional turbulence and support peaceful, honest communication.",
    affirmation: "I move through my emotions like the tide — present, flowing, and at peace.",
    uses: ["Hold during meditation near water, real or imagined", "Wear during a conversation that needs calm rather than conflict", "Keep nearby during emotional healing after a stressful period"],
    careNotes: "Relatively soft and can be sensitive to heat and sudden impact — handle gently, avoid prolonged sun, and store away from harder stones.",
    pairsWith: ["blue-lace-agate", "amazonite", "aquamarine"],
    deepDive: {
      history: "Larimar has one of the most recent discovery stories of any widely known stone: although Dominican locals had noticed the blue mineral for generations, it wasn't formally investigated until 1974, when Miguel Méndez and Peace Corps volunteer Norman Rilling traced loose stones found on a beach back to their volcanic source inland. Méndez named the stone by combining his daughter Larissa's name with mar, the Spanish word for sea — and to this day, the Dominican Republic remains the only commercially significant source on Earth.",
      narrative: "Larimar's white-and-blue patterning is almost universally described in oceanic terms — sea foam, shallow water, waves — and that imagery carries directly into its metaphysical reputation as a stone of calm, healing communication. It's considered especially suited to emotional conversations that have gotten too heated, treated as a stone that cools things down without shutting them down, encouraging honesty delivered gently rather than silence.",
      propertyGroups: {
        "Emotional": ["Soothes emotional turbulence", "Encourages a calm, grounded response to stress"],
        "Spiritual": ["Connects to the healing, cleansing presence of water"],
        "Mental": ["Supports peaceful, clear communication"]
      },
      extendedUses: [
        "Hold during meditation near water, real or imagined",
        "Wear during a conversation that needs calm rather than conflict",
        "Keep nearby during emotional healing after a stressful period",
        "Use during a cooling-down period after an argument, before resuming the conversation",
        "Pair with blue lace agate for a doubly gentle, calming combination"
      ]
    }
  },
  {
    id: "sunstone",
    name: "Sunstone",
    aliases: [],
    colors: ["Orange", "Gold"],
    mineralClass: "Feldspar (oligoclase or labradorite)",
    hardness: 6.25,
    origin: ["United States (Oregon)", "Norway", "India", "Canada"],
    chakra: ["Sacral", "Solar Plexus"],
    zodiac: ["Leo", "Libra"],
    element: ["Fire"],
    planet: ["Sun"],
    birthMonth: [],
    formation: "A feldspar mineral whose sparkly orange glow (aventurescence) comes from light reflecting off tiny copper or hematite platelets embedded within the crystal.",
    properties: ["Joy", "Vitality", "Confidence", "Independence"],
    meaning: "Native American tribes of the American Plains and Pacific Northwest, where Oregon sunstone is found, used the stone in ceremony and jewelry long before its 19th-century mineralogical description. Sharing a feldspar family with moonstone and labradorite but carrying the opposite energy, sunstone is consistently associated with warmth, joy, and personal independence rather than introspection.",
    affirmation: "I shine openly, act on my own authority, and welcome joy without apology.",
    uses: ["Wear during periods that call for confidence and visibility", "Hold during a morning routine to set a joyful tone for the day", "Keep nearby when reclaiming independence after relying on others"],
    careNotes: "Moderately durable; safe for water and sunlight, fittingly enough.",
    pairsWith: ["citrine", "carnelian", "moonstone"],
    deepDive: {
      history: "Oregon sunstone, among the finest in the world, was used by Native American tribes of the region in ceremony and personal adornment long before Western mineralogists formally described the stone in the 19th century. It shares its feldspar family with both moonstone and labradorite, but fine Oregon material forms with genuine copper inclusions, giving it a sparkle entirely its own among feldspars.",
      narrative: "Sunstone is often introduced specifically as moonstone's opposite within the same mineral family — where moonstone turns attention inward toward cycles and intuition, sunstone is almost always described in terms of outward confidence, independence, and joy. It's recommended less for quiet reflection and more for stepping into visibility: leading, performing, or simply taking up space without apologizing for it.",
      propertyGroups: {
        "Emotional": ["Lifts mood and restores joy", "Builds confidence and visibility"],
        "Spiritual": ["Encourages independence and personal authority"],
        "Mental": ["Supports a leadership mindset"]
      },
      extendedUses: [
        "Wear during periods that call for confidence and visibility",
        "Hold during a morning routine to set a joyful tone for the day",
        "Keep nearby when reclaiming independence after relying on others",
        "Carry before public speaking, performing, or leading a group",
        "Pair with moonstone for a balanced, sun-and-moon combination"
      ]
    }
  },
  {
    id: "apophyllite",
    name: "Apophyllite",
    aliases: [],
    colors: ["Clear/White", "Green"],
    mineralClass: "Phyllosilicate",
    hardness: 4.75,
    origin: ["India (Deccan Traps)", "Brazil", "United States"],
    chakra: ["Crown", "Third Eye"],
    zodiac: ["Gemini", "Libra"],
    element: ["Air"],
    planet: ["Moon"],
    birthMonth: [],
    formation: "Forms in distinctive square or pyramidal crystals, commonly found alongside stilbite in the volcanic basalt cavities of India's Deccan Traps; named from the Greek \"apo\" (away from) and \"phyllon\" (leaf), because it tends to flake apart when heated.",
    properties: ["Clarity", "Spiritual connection", "Present-moment awareness", "Intuition"],
    meaning: "Apophyllite's high water content and glassy, almost transparent structure have given it a reputation as one of the clearest, most \"high-vibration\" stones used in meditation — often described less in terms of specific effects and more as a direct conduit to stillness and spiritual presence.",
    affirmation: "I am fully here, clear and present, in this exact moment.",
    uses: ["Hold during meditation to deepen stillness and presence", "Place a pyramidal cluster in a meditation space", "Use to support a clear, uncluttered meditative state"],
    careNotes: "Soft and can flake if heated or dropped — handle gently, avoid prolonged sun and hot water.",
    pairsWith: ["stilbite", "selenite", "clear-quartz"],
    deepDive: {
      history: "Apophyllite takes its name from the Greek apo (away from) and phyllon (leaf), given by mineralogists who noticed the stone tends to flake apart in thin, leaf-like layers when heated. It most commonly forms in the volcanic basalt cavities of India's Deccan Traps, often growing directly alongside stilbite — the two are frequently sold together as a naturally paired specimen, their soft white and pale green clusters contrasting with stilbite's peachy bow-ties.",
      narrative: "Apophyllite's near-transparency and the way it catches light have earned it a reputation among meditators as an unusually \"quiet\" stone — rather than being described through a long list of distinct properties, it's most often talked about in terms of what it clears away: mental clutter, distraction, and the small resistances that keep a meditation practice from settling. It's treated less as a stone that adds something new and more as one that gets out of the way.",
      propertyGroups: {
        "Spiritual": ["Deepens meditative stillness", "Connects to present-moment awareness"],
        "Mental": ["Clears mental clutter and distraction"],
        "Emotional": ["Supports a calm, uncomplicated state of mind"]
      },
      extendedUses: [
        "Hold during meditation to deepen stillness and presence",
        "Place a pyramidal cluster in a dedicated meditation space",
        "Use before a practice that's felt cluttered or hard to settle into lately",
        "Keep alongside stilbite, its natural mineral companion",
        "Pair with selenite for an especially clear, high-vibration combination"
      ]
    }
  },
  {
    id: "rutilated-quartz",
    name: "Rutilated Quartz",
    aliases: ["Venus Hair Stone", "Angel Hair Quartz"],
    colors: ["Clear/White", "Gold", "Brown"],
    mineralClass: "Quartz (silicate) with rutile (titanium dioxide) inclusions",
    hardness: 7,
    origin: ["Brazil", "Madagascar", "United States"],
    chakra: ["Solar Plexus", "Crown"],
    zodiac: ["Gemini", "Libra"],
    element: ["Air", "Fire"],
    planet: ["Mercury"],
    birthMonth: [],
    formation: "Clear quartz containing needle-like golden or reddish inclusions of rutile (titanium dioxide), formed as the rutile crystallized first and was later enclosed by growing quartz.",
    properties: ["Amplification", "Manifestation", "Mental clarity", "Energy flow"],
    meaning: "Nicknamed \"Venus hair stone\" for its fine golden threads, rutilated quartz combines clear quartz's amplifying reputation with rutile's association with energetic flow and manifestation. It's considered a particularly active, accelerating stone — less about calm clarity and more about speeding up whatever process, idea, or intention is already in motion.",
    affirmation: "My ideas move freely and reach exactly where they need to go.",
    uses: ["Hold while clarifying a goal you want to accelerate", "Keep on a desk during a project that's lost momentum", "Use during manifestation or vision-board work"],
    careNotes: "Durable like other quartz; safe for water and sunlight.",
    pairsWith: ["clear-quartz", "citrine", "tigers-eye"],
    deepDive: {
      history: "Rutilated quartz has gone by many evocative names across different eras and markets — \"Venus hair stone\" and \"angel hair quartz\" among them — each describing the same fine, golden needle-like inclusions of rutile suspended within clear quartz. Unlike most stones defined by a single mineral, rutilated quartz is really two minerals captured together in formation: rutile crystallizing first, with quartz growing around and enclosing it afterward, a geological sequence you can see frozen in place within the stone.",
      narrative: "Those golden threads are almost always described as channels or pathways rather than simple decoration, and that imagery shapes rutilated quartz's reputation directly — it's considered less a stone of stillness and more one of movement, treated as something that speeds energy, ideas, or intentions along rather than holding them in place. It's frequently reached for specifically when a goal or project has stalled and needs a push rather than more patience.",
      propertyGroups: {
        "Mental": ["Accelerates mental clarity and decision-making", "Breaks through stalled thinking"],
        "Spiritual": ["Amplifies manifestation and intention"],
        "Emotional": ["Energizes a flagging sense of motivation"]
      },
      extendedUses: [
        "Hold while clarifying a goal you want to accelerate",
        "Keep on a desk during a project that's lost momentum",
        "Use during manifestation or vision-board work",
        "Carry when you need quick mental clarity rather than slow reflection",
        "Pair with citrine for a combined acceleration-and-abundance focus"
      ]
    }
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = CRYSTALS;
