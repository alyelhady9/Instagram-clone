import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md m-0 bg-muted", className)} {...props} />);
}

export { Skeleton }
