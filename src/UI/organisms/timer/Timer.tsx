import Title from "@/UI/atoms/text/Title";
import { useAppStore } from "@/lib/store/appStore";
import { useEffect, useMemo, useState } from "react";
import TimerClock from "./TimerClock";
import TimerButtons from "./TimerButtons";
import TimeLaps from "./TimeLaps";

const Timer = () => {
   const [isActive, setIsActive] = useState(false);

   return (
      <section>
         <Title className="text-center mb-8">Timer</Title>
         <TimerClock isActive={isActive} />
         <TimerButtons isActive={isActive} setIsActive={setIsActive} />
         <TimeLaps />
      </section>
   );
};

export default Timer;
