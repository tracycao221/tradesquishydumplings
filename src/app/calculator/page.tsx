import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator Hub: Values, W/F/L & Trade Checks`,
  description: `Use the ${siteConfig.gameName} calculator hub to choose between value list checks, W/F/L trade review, codes, and safe trading guides before accepting a deal.`,
  alternates: { canonical: `${siteConfig.domain}/calculator/` }
};

const calculatorRoutes = [
  {
    href: "/trading/fair-trade-calculator",
    label: "W/F/L fair trade calculator",
    body: "Use the full calculator when you have both sides of an offer and need a win, fair, or loss estimate."
  },
  {
    href: "/wiki/trading/value-list",
    label: "Value list",
    body: "Use the value list when you need demand labels, confidence notes, and source boundaries before entering a trade."
  },
  {
    href: "/guides/how-to-trade",
    label: "How to trade",
    body: "Use the trading guide when you need board-flow context, offer safety, and when to cancel."
  }
];

export default function CalculatorHubPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator Hub", href: "/calculator" }]} />
      <Breadcrumbs items={[{ label: "Calculator Hub", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Calculator hub"
        title={`${siteConfig.gameName} Calculator Hub`}
        description="Start here when you searched for a calculator but still need to choose the right tool: values, W/F/L fairness, trading safety, or code status."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Quick answer"
          title="Use the fair-trade calculator when an offer is ready"
          copy="The calculator hub is intentionally separate from the live W/F/L tool. It helps players choose the right page and prevents the generic /calculator URL from duplicating the fair-trade calculator route."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {calculatorRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="content-card">
              <h2 className="text-xl font-bold text-white">{route.label}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">{route.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-lg border border-white/10">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-white/[0.06] text-white">
            <tr><th className="px-4 py-3">Question</th><th className="px-4 py-3">Open this</th><th className="px-4 py-3">Why</th></tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-white/68">
            <tr><td className="px-4 py-4 font-semibold text-white">Is this trade W or L?</td><td className="px-4 py-4">Fair trade calculator</td><td className="px-4 py-4">It compares both sides of a board trade.</td></tr>
            <tr><td className="px-4 py-4 font-semibold text-white">What is this dumpling worth?</td><td className="px-4 py-4">Value list</td><td className="px-4 py-4">It explains value confidence and demand labels.</td></tr>
            <tr><td className="px-4 py-4 font-semibold text-white">Could this be a scam?</td><td className="px-4 py-4">Trading safety guide</td><td className="px-4 py-4">It focuses on offer switching, pressure, and last-second changes.</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
