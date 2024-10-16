import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const ModalBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="relative z-10 mx-auto mt-2 py-1 px-3 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
      >
        Get the code
        {showModal &&
          createPortal(
            <ModalContent closeModal={() => setShowModal(!showModal)} />,
            document.body
          )}
      </button>
    </>
  );
};

export default ModalBtn;
