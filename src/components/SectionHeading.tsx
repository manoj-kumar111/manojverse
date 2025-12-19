import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center",
  className 
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-6",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
};

export default SectionHeading;
