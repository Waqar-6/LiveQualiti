import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed inset-0 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 rounded-xl shadow-lg max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
