import { cn } from "@/lib/utils";

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
