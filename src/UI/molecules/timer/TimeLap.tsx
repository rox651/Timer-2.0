import Button from "@/UI/atoms/button/Button";
import { TableCell, TableRow } from "@/UI/atoms/table/table";
import { convertTime } from "@/lib/helpers/convertTime";
import { setTimeToShow } from "@/lib/helpers/setTimeToShow";
import { useAppStore } from "@/lib/store/appStore";
import { TypeLap } from "@/lib/types/time";
import { cn } from "@/lib/utils/cn";

type TimeLapProps = TypeLap;

const TimeLap = ({ number, time, absoluteTime }: TimeLapProps) => {
   const { removeLap, laps } = useAppStore();

   const isLastLap = laps[laps.length - 1].number === number;

   const [days, hours, minutes, seconds] = convertTime(time);
   const [daysAbsolute, hoursAbsolute, minutesAbsolute, secondsAbsolute] =
      convertTime(absoluteTime);

   const timeToShow = setTimeToShow(days, hours, minutes, seconds);
   const absoluteTimeToShow = setTimeToShow(
      daysAbsolute,
      hoursAbsolute,
      minutesAbsolute,
      secondsAbsolute
   );

   const onClickRemove = () => {
      removeLap(number);
   };

   return (
      <TableRow>
         <TableCell
            className={cn(
               "w-[50px] md:w-[100px] text-sm font-oxanium",
               isLastLap && "md:text-lg text-blue-300"
            )}
         >
            {number}
         </TableCell>
         <TableCell
            className={cn(
               "w-[50px] md:w-[100px] text-sm font-oxanium",
               isLastLap && "md:text-lg text-blue-300"
            )}
         >
            {timeToShow}
         </TableCell>
         <TableCell
            className={cn(
               "w-[50px] md:w-[100px] text-sm font-oxanium",
               isLastLap && "md:text-lg text-blue-300"
            )}
         >
            {absoluteTimeToShow}
         </TableCell>
         <TableCell className="md:w-[150px] flex">
            <Button className="bg-red-400 !px-4 !py-2 mx-auto !text-base " onClick={onClickRemove}>
               Eliminar
            </Button>
         </TableCell>
      </TableRow>
   );
};

export default TimeLap;
