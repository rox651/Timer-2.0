import Button from "@/UI/atoms/button/Button";
import { useAppStore } from "@/lib/store/appStore";
import { Dispatch, SetStateAction } from "react";

interface TimerButtonsProps {
   isActive: boolean;
   setIsActive: Dispatch<SetStateAction<boolean>>;
}
const TimerButtons = ({ isActive, setIsActive }: TimerButtonsProps) => {
   const { time, resetTime, setLaps, resetLaps, lastLapTime, setLastLapTime } = useAppStore();

   const startStopText = isActive ? "Pause" : "Start";

   const onClickStartStop = () => {
      setIsActive(!isActive);
      if (!isActive) setLastLapTime(time);
   };

   const onClickReset = () => {
      setIsActive(false);
      resetTime();
      resetLaps();
      setLastLapTime(0);
   };

   const onClickRound = () => {
      const roundTime = time - lastLapTime;

      setLaps({
         time: roundTime,
         absoluteTime: time,
      });

      setLastLapTime(time);
   };

   return (
      <div className="flex justify-center mt-8 gap-5">
         <Button onClick={onClickStartStop} className="bg-blue-400">
            {startStopText}
         </Button>
         {isActive && time > 0 && <Button onClick={onClickRound}>Lap</Button>}
         <Button disabled={!isActive && time === 0} onClick={onClickReset}>
            Reset
         </Button>
      </div>
   );
};

export default TimerButtons;
