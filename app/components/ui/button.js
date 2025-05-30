
     import { forwardRef } from "react";
import { cn } from "@/app/lib/utils";

    const Button = forwardRef(({ className, variant, children, ...props }, ref) => {
      const variants = {
        default: "bg-[#F49BAB] text-white hover:bg-[#F4A7B9]",
        outline: "border-2 border-[#F49BAB] text-[#F49BAB] hover:bg-[#F49BAB]/10",
      };
    
      return (
        <button
          className={cn(
            "px-4 py-2 rounded-full font-medium transition-colors duration-300",
            variants[variant] || variants.default,
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    });
    
    Button.displayName = "Button";

     export { Button };
