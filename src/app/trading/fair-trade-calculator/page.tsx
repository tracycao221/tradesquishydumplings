import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trade Calculator - Win, Fair or Lose`,
  description: `Compare ${siteConfig.gameName} values, demand, and trend to see whether a board trade looks like a win, fair trade, or loss.`,
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
        title={`${siteConfig.gameName} Trade Calculator`}
        description="Check estimated value, demand, and trend on both sides of a Trade Squishy Dumplings offer before accepting a trading-board deal."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
