import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
   return (
      <button
         className={cn(
            "bg-white rounded-md px-5  py-2 md:px-8 text-gray-950 md:py-3 text-base md:text-lg font-bold disabled:opacity-50",
            className
         )}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
