import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
export function Badge({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "neutral" }) { return <span className={cn("badge", tone === "neutral" && "badge--neutral")}>{children}</span>; }
