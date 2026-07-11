"use client";

import { usePathname } from "next/navigation";
import {
  AdsterraBanner,
  AdsterraBanner468x60,
  AdsterraLeaderboard,
  AdsterraNative1,
  AdsterraNative2
} from "./index";

const CLEAN_ROUTES = [
  "/privacy-policy",
  "/terms-of-service",
  "/dmca",
  "/cookie-policy",
  "/contact",
  "/about"
];

export default function RouteAwareAdSlots() {
  const pathname = usePathname();
  if (!pathname) return null;

  const isCleanRoute = CLEAN_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );
  if (isCleanRoute) return null;

  return (
    <>
      {/* Content-area ad slots — rendered by layout, scoped to non-clean routes */}
      <AdsterraLeaderboard />
      <AdsterraNative1 />
      <AdsterraBanner />
      <AdsterraBanner468x60 />
      <AdsterraNative2 />
    </>
  );
}
