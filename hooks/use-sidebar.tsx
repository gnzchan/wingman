import { create } from "zustand";

interface useSidebarStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useSidebar = create<useSidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
