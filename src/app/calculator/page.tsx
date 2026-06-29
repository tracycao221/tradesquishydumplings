import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Fair Trade Calculator`,
  description: `Use the ${siteConfig.gameName} fair trade calculator to compare estimated dumpling values before you accept a board trade.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Fair Trade Calculator`}
        description="Compare both sides of a dumpling trade with estimated value, demand, and trend adjustments before both players accept."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
