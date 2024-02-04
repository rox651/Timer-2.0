import React from "react";

interface CounterProps {
   number: number;
   date: string;
}

const Counter = ({ number, date }: CounterProps) => {
   return (
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded">
         <span className="text-5xl font-bold text-black font-oxanium">
            {number.toString().padStart(2, "0")}
         </span>
         <span className="text-sm font-medium text-gray-500 uppercase">{date}</span>
      </div>
   );
};

export default Counter;
