import { StateCreator } from "zustand";
import { TypeLap } from "../types/time";

const initialTime = 0;

type TypeLapSave = Omit<TypeLap, "number">;

export interface TypeAppTimerSlice {
   time: number;
   laps: TypeLap[];
   lastLapTime: number;

   incrementTime: (time: number) => void;
   resetTime: () => void;

   setLaps: (round: TypeLapSave) => void;
   resetLaps: () => void;
   setLastLapTime: (time: number) => void;

   removeLap: (number: number) => void;
}

export const createAppTimerSlice: StateCreator<TypeAppTimerSlice> = set => ({
   time: initialTime,
   laps: [],
   lastLapTime: initialTime,

   incrementTime: time => set(state => ({ time: state.time + time })),
   resetTime: () => set({ time: initialTime }),

   setLaps: round =>
      set(state => ({ laps: [...state.laps, { ...round, number: state.laps.length + 1 }] })),
   resetLaps: () => set({ laps: [] }),
   setLastLapTime: time => set({ lastLapTime: time }),

   removeLap: number =>
      set(state => ({ laps: state.laps.filter(round => round.number !== number) })),
});
