import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container px-6">
        <div className="flex flex-col items-center">
          {/* Quote */}
          <p className="text-muted-foreground text-center max-w-xl mb-8 italic">
            "First, solve the problem. Then, write the code."
            <span className="block text-primary mt-2 not-italic font-medium">
              — John Johnson
            </span>
          </p>

          {/* Back to top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full mb-8 hover:border-primary hover:text-primary"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              Have an idea? Let’s talk.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
