import { create } from "zustand";

interface useStoreType {
  count: number;
  isPro: boolean;
  setCount: (count: number) => void;
  setIsPro: (isPro: boolean) => void;
}

export const useStore = create<useStoreType>((set) => ({
  count: 0,
  isPro: false,
  setCount: (count) => set({ count }),
  setIsPro: (isPro) => set({ isPro }),
}));
