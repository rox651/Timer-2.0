import Counter from "@/UI/molecules/Counter";
import { convertTime } from "@/lib/helpers/convertTime";
import { setTimeToShow } from "@/lib/helpers/setTimeToShow";
import { useAppStore } from "@/lib/store/appStore";
import { Dispatch, SetStateAction, useEffect } from "react";

interface TimerClockProps {
   isActive: boolean;
}
const TimerClock = ({ isActive }: TimerClockProps) => {
   const { time, incrementTime } = useAppStore();
   const [days, hours, minutes, seconds] = convertTime(time);

   useEffect(() => {
      let interval: any = null;

      if (isActive) {
         interval = setInterval(() => {
            incrementTime(1);
         }, 1000);
      } else {
         clearInterval(interval);
      }

      return () => clearInterval(interval);
   }, [isActive, incrementTime]);

   useEffect(() => {
      if (isActive) {
         document.title = setTimeToShow(days, hours, minutes, seconds);
      } else {
         document.title = "Timer";
      }
   }, [days, hours, minutes, seconds, isActive]);

   return (
      <div className="bg-slate-700 rounded-lg p-4 mx-auto max-w-2xl">
         <div className="grid grid-cols-4 gap-4">
            <Counter number={days} date="Days" />
            <Counter number={hours} date="Hours" />
            <Counter number={minutes} date="Minutes" />
            <Counter number={seconds} date="seconds" />
         </div>
      </div>
   );
};

export default TimerClock;
