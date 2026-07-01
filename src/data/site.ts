import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} codes, value list, trade calculator, trading guide, tier list, and wiki notes for source-checked Roblox trading help.`,
  valueProposition: `Find ${gameConfig.name} codes, compare values, use the trade calculator, and check the tier list before you accept in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-01",
  freshnessLabel: "rechecked on 2026-07-01 after competitor sitemap expansion, Creator Exchange Discord-status review, and the July 4 Roblox event surface",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} trade calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Trade Tool", href: "/trading/fair-trade-calculator", description: "Check estimated trade value before accepting." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Value List", href: "/wiki/trading/value-list", description: "Estimated trading values and demand notes." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Check codes" },
  { href: "/wiki/trading/value-list", label: "View values" },
  { href: "/trello", label: "Check sources" },
  { href: "/trading/fair-trade-calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Live", note: "Designed for frequent checks" },
  { label: "Core pages", value: "12", note: "Codes, redeem help, tier list, guides, wiki, tools" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Discord status", value: "Partial", note: "Guild name seen, public invite still unverified" }
];

export const activeCodes: GameCode[] = [
  {
    code: "GLITTERDUMPLING",
    reward: "Reported reward: 2 all dumplings / 2 of every dumpling. Roblox Den, Earnaldo, and Creator Exchange still repeat the same reward pair, but no creator-owned source has confirmed it.",
    status: "Needs check",
    addedDate: "Conflict rechecked 2026-06-30"
  },
  {
    code: "BABAFINGO",
    reward: "Reported reward: 1 all dumpling / 1 of every dumpling. Roblox Den, Earnaldo, and Creator Exchange still repeat the same reward pair, but no creator-owned source has confirmed it.",
    status: "Needs check",
    addedDate: "Conflict rechecked 2026-06-30"
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Best early-game pick",
    tier: "S",
    role: "Starter path",
    reason: "Use this slot for the safest beginner recommendation once research confirms the game systems.",
    confidence: "Needs check",
    bestFor: ["beginner", "low investment"],
    sourceNote: "Replace with checked Roblox, creator, wiki, video, or community evidence.",
    teamNote: "Good starter picks should work without rare team pieces."
  },
  {
    name: "Best farming pick",
    tier: "A",
    role: "Progression",
    reason: "Use this slot for the most repeatable grind, income, or mission option.",
    confidence: "Needs check",
    bestFor: ["farming", "repeat runs"],
    sourceNote: "Replace with current creator videos, wiki notes, or verified community testing.",
    teamNote: "Pair farming picks with support or speed options when the game has team slots."
  },
  {
    name: "Best endgame pick",
    tier: "A",
    role: "Late game",
    reason: "Use this slot for high-skill or high-investment choices after more data is available.",
    confidence: "Needs check",
    bestFor: ["late game", "bossing"],
    sourceNote: "Replace with cross-checked late-game, update, or boss-clear evidence.",
    teamNote: "Endgame picks need synergy notes before being ranked as final."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Trade Calculator`,
    href: "/trading/fair-trade-calculator",
    eyebrow: "Primary tool",
    description: "Compare estimated dumpling values, demand, and trend before accepting a board trade."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Review tier list notes for beginners, farming, and late-game use without treating unverified picks as final."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks reported active codes, source notes, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/how-to-play",
    eyebrow: "Guide",
    description: "First-session path, trading-board basics, and where the official description matches live community guidance."
  },
  {
    title: `${gameConfig.name} Trading Guide`,
    href: "/guides/how-to-trade",
    eyebrow: "Guide",
    description: "Trading board flow, accept timing, and when to compare values before you lock a trade."
  },
  {
    title: "Scam protection",
    href: "/guides/scam-protection",
    eyebrow: "Guide",
    description: "Last-second swap checks, cancel habits, and safe ways to handle uneven offers."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Value List`,
    href: "/wiki/trading/value-list",
    eyebrow: "Trading",
    description: "Check estimated trading values, demand notes, and confidence labels before using the calculator."
  },
  {
    title: "How to redeem codes",
    href: "/codes/how-to-redeem",
    eyebrow: "Guide",
    description: "Use the current public UI evidence before you search through menus or trust stale redeem instructions."
  },
  {
    title: "Dumpling list pending",
    href: "/sources",
    eyebrow: "Data status",
    description: "Individual dumpling pages will be added after names, rarities, and values are source-checked."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Discord and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use the status route to separate the visible Creator Exchange guild-name signal from any verified creator-owned invite or board."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "How to play overview",
    href: "https://www.youtube.com/watch?v=8H7g2Y1wEmQ",
    eyebrow: "Video",
    source: "YouTube",
    description: "Recent YouTube search coverage for exact how-to-play intent supports a dedicated beginner route."
  },
  {
    title: "Codes checks",
    href: "https://www.youtube.com/watch?v=F7PhQg5H-C0",
    eyebrow: "Video",
    source: "YouTube",
    description: "Recent code-focused video results reinforce that codes remain the main freshness query family."
  },
  {
    title: "Discord join intent",
    href: "https://www.youtube.com/watch?v=ulFKK6Wr9a0",
    eyebrow: "Video",
    source: "YouTube",
    description: "Players are searching for Discord access, but the public invite still needs creator-owned verification before linking directly."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, value list checks, the trade calculator, tier list notes, guides, and source-backed trading help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible and keep unverified rewards clearly labelled."
    },
    {
      q: `Where are ${gameConfig.name} values, calculator, and tier list pages?`,
      a: "Start with the codes page, value list, fair-trade calculator, trading guide, wiki hub, and tier list. Add entity pages only after dumpling names and systems are source-backed."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: `Are these ${gameConfig.name} codes official?`,
      a: "This label means public sources disagree or no first-party code post was verified, so the page does not overstate what is active versus expired."
    }
  ],
  tierList: [
    {
      q: `How should the ${gameConfig.name} tier list be used?`,
      a: "Use the tier list as a research checklist until stronger source-backed rankings are available. Compare beginner, farming, and endgame use cases before treating a pick as final."
    }
  ],
  calculator: [
    {
      q: `Is the ${gameConfig.name} trade calculator exact?`,
      a: "The trade calculator uses estimated values and demand signals. Treat it as a warning system, not an official price list."
    }
  ]
};
