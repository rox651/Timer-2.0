import React from "react";

interface CounterProps {
   number: number;
   hasDots?: boolean;
}

const Counter = ({ number, hasDots }: CounterProps) => {
   return (
      <h3 className="text-5xl md:text-8xl font-semibold  font-oxanium">
         {number.toString().padStart(2, "0")}
         {hasDots && <span className="mx-1 md:mx-3">:</span>}
      </h3>
   );
};

export default Counter;
