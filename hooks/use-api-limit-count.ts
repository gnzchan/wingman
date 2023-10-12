import { create } from "zustand";

interface useApiLimitCountStore {
  count: number;
  setCount: (count: number) => void;
}

export const useApiLimitCount = create<useApiLimitCountStore>((set) => ({
  count: 0,
  setCount: (count) => set({ count }),
}));
