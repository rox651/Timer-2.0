import Counter from "@/UI/molecules/Counter";
import { convertTime } from "@/lib/helpers/convertTime";
import { useAppStore } from "@/lib/store/appStore";
import { useMemo } from "react";

const TimerClock = () => {
   const { time } = useAppStore();
   const [days, hours, minutes, seconds] = useMemo(() => convertTime(time), [time]);
   return (
      <div className="flex">
         <Counter number={days} hasDots />
         <Counter number={hours} hasDots />
         <Counter number={minutes} hasDots />
         <Counter number={seconds} />
      </div>
   );
};

export default TimerClock;
