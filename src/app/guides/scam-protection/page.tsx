import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Scam Protection Guide (June 2026)`,
  description: `Avoid bad ${siteConfig.gameName} trades with last-second swap checks, value warnings, and safe trading-board habits.`,
  alternates: { canonical: `${siteConfig.domain}/guides/scam-protection` }
};

export default function ScamProtectionPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Scam Protection", href: "/guides/scam-protection" }]} />
      <Breadcrumbs items={[{ label: "Scam Protection", href: "/guides/scam-protection" }]} />
      <PageIntro
        eyebrow="Safety guide"
        title={`${siteConfig.gameName} Scam Protection`}
        description="Most bad trades are preventable. Slow down, compare both sides, and cancel if the other player changes the offer before accept."
      />
      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Checklist" title="Before you accept" />
        <ul className="mt-6 grid gap-4 text-white/75">
          <li><strong className="text-white">Check final items.</strong> Confirm every dumpling is still in the trade before both players accept.</li>
          <li><strong className="text-white">Watch for last-second swaps.</strong> Cancel if an item disappears, changes, or the other player rushes you.</li>
          <li><strong className="text-white">Use estimates carefully.</strong> Community values move quickly and are not official prices.</li>
          <li><strong className="text-white">Ask for more when values are uneven.</strong> A fair trade should make sense on both sides.</li>
          <li><strong className="text-white">Keep source notes nearby.</strong> Check updates, codes, and community sources when a rare dumpling suddenly spikes.</li>
        </ul>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="content-card" href="/guides/how-to-trade">How trading works</Link>
        <Link className="content-card" href="/wiki/trading/value-list">Value list</Link>
        <Link className="content-card" href="/sources">Source policy</Link>
      </section>
    </main>
  );
}
