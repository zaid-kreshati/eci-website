import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> { children: ReactNode; as?: ElementType; }
export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  return <Tag className={cn("container", className)} {...props}>{children}</Tag>;
}
