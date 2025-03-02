import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface SponsorCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const SponsorCard = ({ src, alt, className }: SponsorCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "relative h-full w-fit mx-[4rem] flex items-center justify-center rounded-xl p-6",
        "transition-all duration-300",
        theme === "dark"
          ? "bg-slate-900/50 hover:bg-slate-800/50"
          : "bg-white/50 hover:bg-slate-50/50",
        "backdrop-blur-sm border",
        theme === "dark"
          ? "border-slate-800 shadow-slate-900/20"
          : "border-slate-200 shadow-slate-200/20",
        className
      )}
      style={{ maxWidth: "200px", minWidth: "100px" }}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "max-h-[80px] w-auto object-contain transition-opacity duration-300",
          theme === "dark" ? "brightness-100" : "brightness-90",
          "hover:opacity-100"
        )}
      />
    </div>
  );
};
