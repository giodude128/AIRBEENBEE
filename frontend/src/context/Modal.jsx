import { useRef, useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const CustomModalContext = createContext();

export function ModalProvider({ children }) {
  const modalReference = useRef();
  const [currentModalContent, setCurrentModalContent] = useState(null);
  const [onModalCloseAction, setOnModalCloseAction] = useState(null);

  const closeModal = () => {
    setCurrentModalContent(null);
    if (typeof onModalCloseAction === "function") {
      setOnModalCloseAction(null);
      onModalCloseAction();
    }
  };

  const contextValue = {
    modalReference,
    currentModalContent,
    setModalContent: setCurrentModalContent,
    setOnModalClose: setOnModalCloseAction,
    closeModal
  };

  return (
    <>
      <CustomModalContext.Provider value={contextValue}>
        {children}
      </CustomModalContext.Provider>
      <div ref={modalReference} />
    </>
  );
}

export function Modal() {
  const { modalReference, currentModalContent, closeModal } = useContext(CustomModalContext);

  const isModalReadyToRender = !modalReference || !modalReference.current || !currentModalContent;
  if (isModalReadyToRender) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">{currentModalContent}</div>
    </div>,
    modalReference.current
  );
}

export const useCustomModal = () => useContext(CustomModalContext);
