import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates, Events & Code Checks (June 2026)`,
  description: `Track ${siteConfig.gameName} update notes, code check status, event watch items, and source links for Roblox trading changes.`,
  alternates: { canonical: `${siteConfig.domain}/updates` }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Update watch"
        title={`${siteConfig.gameName} Updates`}
        description="Use this page to track code checks, source status, event watch items, and trading-value changes. Confirm details through Roblox or creator-owned channels before treating them as final."
      />
      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Current status" title="Launch watch list" />
        <div className="mt-6 grid gap-4 text-white/75">
          <p><strong className="text-white">Codes:</strong> GLITTERDUMPLING and BABAFINGO are candidate codes that need a final launch-day check.</p>
          <p><strong className="text-white">Trading values:</strong> Value rows are estimated until a source-backed dumpling list is collected.</p>
          <p><strong className="text-white">Events:</strong> No event or limited dumpling page should be published until source-backed event data exists.</p>
          <p><strong className="text-white">Official sources:</strong> Roblox game page is verified; Discord and Trello status still need direct verification.</p>
        </div>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="content-card" href="/codes">Codes</Link>
        <Link className="content-card" href="/trello">Source status</Link>
        <Link className="content-card" href="/wiki/trading/value-list">Value list</Link>
      </section>
    </main>
  );
}
