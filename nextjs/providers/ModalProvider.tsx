import react, { createContext, useState, ReactNode, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextProps {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
  isVisible: boolean;
}
const defaultModalContext: ModalContextProps = {
  showModal: () => {},
  hideModal: () => {},
  isVisible: false,
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const showModal = (content: ReactNode) => {
    setContent(content);
    setIsVisible(true);
  };

  const hideModal = () => {
    setContent(null);
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isVisible }}>
      {children}
      {isVisible && (
        <Transition.Root show={isVisible} as={Fragment}>
          <Dialog onClose={hideModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-stone-500" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="dialog-panel">
                    {content}
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm"
                        onClick={hideModal}
                      >
                        Close this modal
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </ModalContext.Provider>
  );
};

export const ModalContext =
  createContext<ModalContextProps>(defaultModalContext);
