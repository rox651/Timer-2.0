export const setTimeToShow = (days: number, hours: number, minutes: number, seconds: number) => {
   const dayString = days.toString().padStart(2, "0");
   const hourString = hours.toString().padStart(2, "0");
   const minuteString = minutes.toString().padStart(2, "0");
   const secondString = seconds.toString().padStart(2, "0");

   return `${dayString}:${hourString}:${minuteString}:${secondString}`;
};
