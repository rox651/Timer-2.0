import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createAppTimerSlice, TypeAppTimerSlice } from "./appTimer";

type AppStoreSlice = TypeAppTimerSlice;

export const useAppStore = create<AppStoreSlice>()(
   devtools(
      persist(
         (...a) => ({
            ...createAppTimerSlice(...a),
         }),
         {
            name: "appStore",
            storage: createJSONStorage(() => localStorage),
            version: 0,
         }
      )
   )
);
