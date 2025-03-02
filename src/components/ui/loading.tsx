import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-background transition-opacity duration-300"
      )}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src="/src/assets/eth-rwanda-logo.png"
            alt="ETH Rwanda Logo"
            className="w-24 h-24 mb-4"
          />
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-foreground">ETH Rwanda</h2>
            <p className="text-sm text-muted-foreground">
              Loading content...
            </p>
          </div>
          <div className="mt-6 h-1 w-48 bg-muted overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
