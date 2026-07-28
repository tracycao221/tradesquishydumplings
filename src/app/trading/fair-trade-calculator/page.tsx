import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} W/F/L Fair Trade Calculator`,
  description: `Compare ${siteConfig.gameName} values, demand, and trend in the W/F/L fair trade calculator before accepting a Roblox trading-board offer.`,
  alternates: { canonical: `${siteConfig.domain}/trading/fair-trade-calculator` }
};

export default function FairTradeCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Fair Trade Calculator", href: "/trading/fair-trade-calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Fair Trade Calculator", href: "/trading/fair-trade-calculator" }]} />
      <PageIntro
        eyebrow="Trading tool"
        title={`${siteConfig.gameName} W/F/L Fair Trade Calculator`}
        description="Use this tool only after you know both sides of the offer. It estimates whether a board trade looks like a win, fair, or loss while still labelling uncertain values."
      />
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Best for</span>
          <h2 className="mt-3 text-xl font-bold text-white">Offer comparison</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Add each side before accepting, then check whether the result is clearly win, fair, or loss.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Use with</span>
          <h2 className="mt-3 text-xl font-bold text-white">Value list</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Open the value list when a dumpling has low confidence, unknown demand, or conflicting public values.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Safety rule</span>
          <h2 className="mt-3 text-xl font-bold text-white">Cancel switched offers</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">If a player changes an item at the last second, recalculate before accepting the trade.</p>
        </article>
      </section>
      <section className="mt-10">
        <SectionHeader eyebrow="Calculator" title="Compare both sides of the trade" />
        <CalculatorTool />
      </section>
    </main>
  );
}
