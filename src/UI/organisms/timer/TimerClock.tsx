import Counter from "@/UI/molecules/Counter";
import { convertTime } from "@/lib/helpers/convertTime";
import { useAppStore } from "@/lib/store/appStore";
import { useMemo } from "react";

const TimerClock = () => {
   const { time } = useAppStore();
   const [days, hours, minutes, seconds] = useMemo(() => convertTime(time), [time]);

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
