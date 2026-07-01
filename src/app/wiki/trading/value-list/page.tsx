import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const valueRows = [
  {
    name: "High-demand dumplings",
    rarity: "Needs check",
    value: "Estimated",
    demand: "High",
    trend: "Watch",
    note: "Use this row for dumplings repeatedly requested in trades after source verification."
  },
  {
    name: "Collection-fill dumplings",
    rarity: "Needs check",
    value: "Estimated",
    demand: "Medium",
    trend: "Stable",
    note: "Useful when the other player needs one more item to complete a collection."
  },
  {
    name: "Unverified rare dumplings",
    rarity: "Needs check",
    value: "Unknown",
    demand: "Unknown",
    trend: "Unknown",
    note: "Do not accept a trade only because an item looks rare. Check sources first."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Value List - Trading Values & Demand`,
  description: `Check estimated ${siteConfig.gameName} values, demand labels, confidence notes, and calculator links before making a dumpling trade.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/trading/value-list` }
};

export default function ValueListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trading Values", href: "/wiki/trading/value-list" }]} />
      <Breadcrumbs items={[{ label: "Trading Values", href: "/wiki/trading/value-list" }]} />
      <PageIntro
        eyebrow="Trading values"
        title={`${siteConfig.gameName} Value List`}
        description="Compare dumpling demand and estimated trading value with clear confidence notes. Community values can move quickly, so treat this as a decision aid, not an official price list."
      />

      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Value table" title={`${siteConfig.gameName} trading values framework`} />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-left text-sm">
            <thead className="text-white/60">
              <tr>
                <th className="px-3 py-2">Dumpling group</th>
                <th className="px-3 py-2">Rarity</th>
                <th className="px-3 py-2">Value</th>
                <th className="px-3 py-2">Demand</th>
                <th className="px-3 py-2">Trend</th>
                <th className="px-3 py-2">Source note</th>
              </tr>
            </thead>
            <tbody>
              {valueRows.map((row) => (
                <tr key={row.name} className="bg-white/[0.04] text-white">
                  <td className="rounded-l-lg px-3 py-4 font-bold">{row.name}</td>
                  <td className="px-3 py-4">{row.rarity}</td>
                  <td className="px-3 py-4">{row.value}</td>
                  <td className="px-3 py-4">{row.demand}</td>
                  <td className="px-3 py-4">{row.trend}</td>
                  <td className="rounded-r-lg px-3 py-4 text-white/65">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="content-card">
          <h2 className="text-xl font-black text-white">Before accepting</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">Check both sides in the Trade Squishy Dumplings trade calculator and cancel if an item changes at the last second.</p>
        </div>
        <div className="content-card">
          <h2 className="text-xl font-black text-white">Confidence labels</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">Rows marked unknown or needs check should not be treated as final community value.</p>
        </div>
        <div className="content-card">
          <h2 className="text-xl font-black text-white">Source updates</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">Values should be refreshed from Roblox, community wiki, and creator sources before launch.</p>
        </div>
      </section>
    </main>
  );
}
