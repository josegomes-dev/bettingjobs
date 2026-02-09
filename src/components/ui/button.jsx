import { cn } from "@/lib/utils";

export const Button = ({
  className,
  variant = "default",
  size = "md",
  asChild,
  ...props
}) => {
  const Component = asChild ? "span" : "button";

  const variants = {
    default: "bg-accent text-white hover:bg-accent/90",
    outline: "border border-accent text-accent hover:bg-accent/10",
  };

  const sizes = {
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-base",
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
