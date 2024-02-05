import { create } from "zustand";

export type ModalType = "createServer";

interface ModalStore {
  type: ModalStore | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

// export const useModal = create<ModalStore>(() => ({
//     type:
// }))
