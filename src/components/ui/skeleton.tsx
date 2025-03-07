import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  count?: number;
  layout?: "grid" | "list" | "bento" | "timeline";
  aspectRatio?: "square" | "video" | "landscape" | "portrait";
}

export function Skeleton({
  className,
  count = 3,
  layout = "grid",
  aspectRatio = "square",
}: SkeletonProps) {
  // Define aspect ratio classes
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    landscape: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
  };

  // Define different layout templates
  const layouts = {
    grid: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(count)
          .fill(null)
          .map((_, i) => (
            <SkeletonItem key={i} className={aspectRatioClass[aspectRatio]} />
          ))}
      </div>
    ),
    list: (
      <div className="space-y-4">
        {Array(count)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="flex gap-4 items-center">
              <SkeletonItem
                className={`${aspectRatioClass[aspectRatio]} w-32`}
              />
              <div className="space-y-2 flex-1">
                <SkeletonText className="h-5 w-3/4" />
                <SkeletonText className="h-4 w-1/2" />
              </div>
            </div>
          ))}
      </div>
    ),
    bento: (
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-4">
        <SkeletonItem className="row-span-2 col-span-1" />
        <SkeletonItem className="row-span-1 col-span-1" />
        <SkeletonItem className="row-span-1 col-span-1 md:col-span-2" />
        <SkeletonItem className="row-span-1 col-span-2 md:col-span-1" />
        <SkeletonItem className="row-span-2 col-span-1" />
      </div>
    ),
    timeline: (
      <div className="space-y-8">
        {Array(Math.min(count, 3))
          .fill(null)
          .map((_, i) => (
            <div key={i} className="space-y-2">
              <SkeletonText className="h-6 w-24" />
              <SkeletonText className="h-4 w-full max-w-md" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <SkeletonItem className="aspect-video" />
                <SkeletonItem className="aspect-video" />
              </div>
            </div>
          ))}
      </div>
    ),
  };

  return (
    <div className={cn("animate-in fade-in-50", className)}>
      {layouts[layout]}
    </div>
  );
}

function SkeletonItem({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl overflow-hidden relative", className)}>
      <div className="absolute inset-0 bg-muted/70" />
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}

function SkeletonText({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md bg-muted/70 overflow-hidden relative",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}
