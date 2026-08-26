import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  close: () => {
    set({ isOpen: false });
  },
  open: () => {
    set({ isOpen: true });
  },
  toggle: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
