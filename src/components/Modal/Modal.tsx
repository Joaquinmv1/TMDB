interface ModalProps {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <>
      {children}
    </>
  );
}