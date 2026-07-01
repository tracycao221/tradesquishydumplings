import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trading Guide - Values, Boards & Safe Trades`,
  description: `Use this ${siteConfig.gameName} trading guide to understand boards, compare values, use the calculator, and check what to do before confirming a dumpling trade.`,
  alternates: { canonical: `${siteConfig.domain}/guides/how-to-trade` }
};

export default function HowToTradePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "How to Trade", href: "/guides/how-to-trade" }]} />
      <Breadcrumbs items={[{ label: "How to Trade", href: "/guides/how-to-trade" }]} />
      <PageIntro
        eyebrow="Trading guide"
        title={`${siteConfig.gameName} Trading Guide`}
        description="Trading happens on boards where both players place items and accept together. Check value, demand, calculator results, and safety before you step on accept."
      />
      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Steps" title={`${siteConfig.gameName} trading board flow`} />
        <ol className="mt-6 grid gap-4 text-white/75">
          <li><strong className="text-white">1. Stand on a trading board.</strong> Wait for the other player to join the board before dropping items.</li>
          <li><strong className="text-white">2. Place the dumplings you want to offer.</strong> Double-check names and quantities before moving forward.</li>
          <li><strong className="text-white">3. Compare both sides.</strong> Use the value list and fair-trade checker if the offer includes rare or high-demand dumplings.</li>
          <li><strong className="text-white">4. Ask for more or cancel when needed.</strong> Do not accept a trade that changes at the last second.</li>
          <li><strong className="text-white">5. Accept only when both sides are stable.</strong> Both players need to confirm, so use that time to check the final offer.</li>
        </ol>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="content-card" href="/wiki/trading/value-list">Check value list</Link>
        <Link className="content-card" href="/trading/fair-trade-calculator">Use trade calculator</Link>
        <Link className="content-card" href="/guides/scam-protection">Avoid scams</Link>
      </section>
    </main>
  );
}
