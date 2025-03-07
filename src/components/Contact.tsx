import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copiedItems, setCopiedItems] = useState<Set<"email" | "phone">>(
    new Set()
  );

  const copyToClipboard = useCallback(
    async (text: string, type: "email" | "phone") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedItems((prev) => new Set(prev).add(type));
        setTimeout(() => {
          setCopiedItems((prev) => {
            const next = new Set(prev);
            next.delete(type);
            return next;
          });
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    },
    []
  );

  return (
    <section
      id="contact"
      className="pt-24 pb-48 bg-[#09090B] dark:bg-[#09090B] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className={cn(
            "absolute top-1/4 right-1/4 w-64 h-64",
            "rounded-full bg-primary/10 blur-3xl"
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute bottom-1/4 left-1/3 w-96 h-96",
            "rounded-full bg-cyan-500/10 blur-3xl"
          )}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about ETH Rwanda? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              "border border-foreground/10",
              "bg-background/80 dark:bg-slate-800/50",
              "p-8 backdrop-blur-sm shadow-xl"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                "from-primary/10 via-transparent to-transparent",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "pointer-events-none"
              )}
            />

            <div className="flex items-center gap-4 mb-6">
              <div
                className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-primary/10 flex items-center justify-center text-primary"
                )}
              >
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Email</h3>
            </div>

            <p className="text-lg text-foreground/80 mb-4">
              We respond within 24 hours
            </p>
            <div
              className={cn(
                "flex items-center justify-between p-3 mb-4",
                "bg-muted/50 dark:bg-slate-900/50 rounded-lg",
                "group/copy cursor-pointer"
              )}
            >
              <span
                onClick={() => copyToClipboard("info@ethrwanda.rw", "email")}
                className={cn(
                  "font-mono text-foreground",
                  "hover:text-primary transition-colors",
                  "select-all cursor-pointer"
                )}
              >
                info@ethrwanda.rw
              </span>
              <button
                onClick={() => copyToClipboard("info@ethrwanda.rw", "email")}
                className={cn(
                  "text-muted-foreground",
                  "hover:text-primary active:scale-95",
                  "transition-all cursor-pointer",
                  "p-2 rounded-md hover:bg-primary/10",
                  copiedItems.has("email") &&
                    "text-green-500 hover:text-green-500"
                )}
                aria-label="Copy email address"
              >
                {copiedItems.has("email") ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            <motion.a
              href="mailto:info@ethrwanda.rw"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-primary hover:underline gap-1"
            >
              Send an email <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              "border border-foreground/10",
              "bg-background/80 dark:bg-slate-800/50",
              "p-8 backdrop-blur-sm shadow-xl"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                "from-cyan-500/10 via-transparent to-transparent",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "pointer-events-none"
              )}
            />

            <div className="flex items-center gap-4 mb-6">
              <div
                className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-cyan-500/10 flex items-center justify-center text-cyan-500"
                )}
              >
                <Phone size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Schedule a Call
              </h3>
            </div>

            <p className="text-lg text-foreground/80 mb-4">
              Book a free 15 minute consultation
            </p>
            <div
              className={cn(
                "flex items-center justify-between p-3 mb-4",
                "bg-muted/50 dark:bg-slate-900/50 rounded-lg",
                "group/copy cursor-pointer"
              )}
            >
              <span
                onClick={() => copyToClipboard("+250794003767", "phone")}
                className={cn(
                  "font-mono text-foreground",
                  "hover:text-cyan-500 transition-colors",
                  "select-all cursor-pointer"
                )}
              >
                +250794003767
              </span>
              <button
                onClick={() => copyToClipboard("+250794003767", "phone")}
                className={cn(
                  "text-muted-foreground",
                  "hover:text-cyan-500 active:scale-95",
                  "transition-all cursor-pointer",
                  "p-2 rounded-md hover:bg-cyan-500/10",
                  copiedItems.has("phone") &&
                    "text-green-500 hover:text-green-500"
                )}
                aria-label="Copy phone number"
              >
                {copiedItems.has("phone") ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            <motion.a
              href="https://calendly.com/ethrwanda/15min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-cyan-500 hover:underline gap-1"
            >
              Schedule a meeting <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
