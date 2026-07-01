import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes - Rewards, Redeem Help & Updates`,
  description: `Check ${siteConfig.gameName} codes, reported rewards, redeem steps, update status, and source confidence before you claim in Roblox.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes - Rewards, Redeem Help & Updates`,
    description: `Check ${siteConfig.gameName} codes, reported rewards, redeem steps, update status, and source confidence before you claim in Roblox.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes - Rewards, Redeem Help & Updates`,
    description: `Check ${siteConfig.gameName} codes, reported rewards, redeem steps, update status, and source confidence before you claim in Roblox.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes`}
        description="Use this page as the canonical codes surface. Current entries were rechecked on July 1, 2026, and public trackers still repeat the same two code names without a creator-posted code list to verify them."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title={`${siteConfig.gameName} active codes list`}
          copy="These are still the only repeated public code names across Roblox Den, Earnaldo, and Creator Exchange. Treat them as reported active codes rather than creator-verified rewards until an official game or creator source publishes them or you test them live."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title={`How to redeem ${siteConfig.gameName} codes`}
            copy="Current guide trackers still point to a top-right or side-screen codes entry, but the exact button wording is not stable enough to treat as official UI copy. Reconfirm the live menu whenever the game updates."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the codes icon or redeem entry shown by the latest public UI captures.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
          <div className="mt-5">
            <Link href="/codes/how-to-redeem" className="button-secondary button-small">Full redeem guide</Link>
          </div>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title={`${siteConfig.gameName} code freshness policy`}
            copy="Checked on July 1, 2026 against Roblox Den, Earnaldo, Creator Exchange, and the official Roblox game page. Public sources still do not provide a creator-posted code list, so treat rewards and active status as reported until you test them live."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Expired status"
            title="Expired codes"
            copy="No additional expired codes were verified on June 30, 2026. Roblox Den still exposes an expired or problem-code report form, but its current page headline and side card market the same two known codes as active."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Troubleshooting"
            title="If a code is not working"
            copy="Check for typos, confirm the code has not already been redeemed, and retest after rejoining. No verified public complaint thread was found in this pass, so keep failures marked Needs check unless the live game or a creator source confirms a change."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes/how-to-redeem" className="content-card">
          <span className="mini-label">Support</span>
          <h2 className="mt-3 text-xl font-bold text-white">How to redeem codes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Open the dedicated redeem-flow route when you need the latest UI guidance instead of a short summary.</p>
        </Link>
        <Link href="/updates" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Update watch</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Review named update windows before you assume a code disappeared or the redeem UI moved.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Source status</span>
          <h2 className="mt-3 text-xl font-bold text-white">Discord and board checks</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the community-status page before trusting a third-party Discord or Trello claim tied to codes.</p>
        </Link>
      </section>
    </main>
  );
}
