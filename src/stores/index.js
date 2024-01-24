import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CreateUserSlice } from "./UserSlice";

export const useBoundStore = create((set) => ({
  ...CreateUserSlice(set),
}));
export const useBearStore = create(
  persist(
    (set) => ({
      isAuth: 0,
      setIsAuth: (payload) => set({ isAuth: payload }),
    }),
    {
      name: "authentication", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
