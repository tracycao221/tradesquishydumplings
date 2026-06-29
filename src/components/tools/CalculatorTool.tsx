"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const demandOptions = [
  { value: 0.85, label: "Low demand" },
  { value: 1, label: "Medium demand" },
  { value: 1.15, label: "High demand" }
] as const;

const trendOptions = [
  { value: 0.9, label: "Falling" },
  { value: 1, label: "Stable" },
  { value: 1.1, label: "Rising" }
] as const;

function TradeSide({
  title,
  value,
  setValue,
  demand,
  setDemand,
  trend,
  setTrend
}: {
  title: string;
  value: number;
  setValue: (value: number) => void;
  demand: number;
  setDemand: (value: number) => void;
  trend: number;
  setTrend: (value: number) => void;
}) {
  return (
    <div className="content-card">
      <SectionHeader eyebrow="Trade side" title={title} />
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-white">Estimated value</span>
          <input
            min="0"
            type="number"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-white">Demand</span>
          <select value={demand} onChange={(event) => setDemand(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
            {demandOptions.map((item) => (
              <option key={item.label} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-white">Trend</span>
          <select value={trend} onChange={(event) => setTrend(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
            {trendOptions.map((item) => (
              <option key={item.label} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export function CalculatorTool() {
  const [youGive, setYouGive] = useState(100);
  const [youGet, setYouGet] = useState(110);
  const [giveDemand, setGiveDemand] = useState(1);
  const [getDemand, setGetDemand] = useState(1);
  const [giveTrend, setGiveTrend] = useState(1);
  const [getTrend, setGetTrend] = useState(1);

  const result = useMemo(() => {
    const giveTotal = youGive * giveDemand * giveTrend;
    const getTotal = youGet * getDemand * getTrend;
    const difference = getTotal - giveTotal;
    const margin = giveTotal > 0 ? Math.abs(difference) / giveTotal : 0;

    if (!giveTotal || !getTotal) {
      return {
        label: "Needs more data",
        tone: "text-amber-200",
        giveTotal,
        getTotal,
        message: "Add estimated values on both sides before trusting the result."
      };
    }

    if (margin <= 0.1) {
      return {
        label: "Fair",
        tone: "text-sky-200",
        giveTotal,
        getTotal,
        message: "The offer is within a 10% estimate band. Check rarity and scam risk before accepting."
      };
    }

    if (difference > 0) {
      return {
        label: "Win",
        tone: "text-emerald-200",
        giveTotal,
        getTotal,
        message: "You appear to receive more estimated value. Confirm the other player does not swap items before accepting."
      };
    }

    return {
      label: "Loss",
      tone: "text-rose-200",
      giveTotal,
      getTotal,
      message: "You appear to give more estimated value. Ask for more or cancel before both players accept."
    };
  }, [getDemand, getTrend, giveDemand, giveTrend, youGet, youGive]);

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <TradeSide title="You give" value={youGive} setValue={setYouGive} demand={giveDemand} setDemand={setGiveDemand} trend={giveTrend} setTrend={setGiveTrend} />
        <TradeSide title="You get" value={youGet} setValue={setYouGet} demand={getDemand} setDemand={setGetDemand} trend={getTrend} setTrend={setGetTrend} />
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Verdict" title="Board trade check" />
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className={`text-5xl font-black ${result.tone}`}>{result.label}</p>
            <p className="mt-3 text-sm text-white/60">Community values are estimates. Use this as a warning system, not an official price.</p>
          </div>
          <div className="grid gap-3 text-sm text-white/75">
            <p>Your adjusted side: {Math.round(result.giveTotal)}</p>
            <p>Their adjusted side: {Math.round(result.getTotal)}</p>
            <p>{result.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
