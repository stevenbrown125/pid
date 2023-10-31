import { Dialog } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

const SuccessModal = ({
  message = "Message",
  title = "Success",
}: {
  message?: string;
  title?: string;
}): JSX.Element => (
  <>
    <div className="bg-green-200 dialog-header">
      <FaCheck className="w-6 h-6 text-green-600" aria-hidden="true" />
    </div>
    <div className="dialog-content">
      <Dialog.Title>{title}</Dialog.Title>
      <p>{message}</p>
    </div>
  </>
);

export default SuccessModal;
