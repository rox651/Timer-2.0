import { cn } from "@/lib/utils/cn";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
   children: React.ReactNode;
}

const Title = ({ children, className, ...props }: TitleProps) => {
   return (
      <h1 className={cn("text-4xl font-bold md:text-5xl", className)} {...props}>
         {children}
      </h1>
   );
};

export default Title;
