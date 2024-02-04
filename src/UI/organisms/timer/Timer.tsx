import Title from "@/UI/atoms/text/Title";
import { useAppStore } from "@/lib/store/appStore";
import { useEffect, useMemo, useState } from "react";
import TimerClock from "./TimerClock";
import TimerButtons from "./TimerButtons";
import TimeLaps from "./TimeLaps";

const Timer = () => {
   const { incrementTime } = useAppStore();
   const [isActive, setIsActive] = useState(false);

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

   return (
      <section>
         <Title className="text-center mb-8">Cronometro</Title>
         <TimerClock />
         <TimerButtons isActive={isActive} setIsActive={setIsActive} />
         <TimeLaps />
      </section>
   );
};

export default Timer;
