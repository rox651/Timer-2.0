export const convertTime = (totalSeconds: number) => {
   const days = Math.floor(totalSeconds / (24 * 3600));
   let remainder = totalSeconds % (24 * 3600);
   const hours = Math.floor(remainder / 3600);
   remainder %= 3600;
   const minutes = Math.floor(remainder / 60);
   const seconds = remainder % 60;

   return [days, hours, minutes, seconds];
};
