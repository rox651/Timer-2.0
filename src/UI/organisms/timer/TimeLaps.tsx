import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/UI/atoms/table/table";
import TimeLap from "@/UI/molecules/timer/TimeLap";
import { useAppStore } from "@/lib/store/appStore";

const TimeLaps = () => {
   const { laps } = useAppStore();

   const lapsToShow = [...laps].reverse();

   if (laps.length === 0) return null;

   return (
      <div className="max-h-[500px] overflow-y-auto mt-10">
         <Table className=" max-w-md mx-auto">
            <TableHeader>
               <TableRow>
                  <TableHead>Lap</TableHead>
                  <TableHead>Hour</TableHead>
                  <TableHead>Total time</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {lapsToShow.map((round, index) => (
                  <TimeLap key={index} {...round} />
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default TimeLaps;
