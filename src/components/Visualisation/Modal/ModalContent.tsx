import { useEffect } from "react";
import { useAppSelector } from "../../../hook";
import getBoxShadowValue from "../../../utils/getBoxShadowValue";

type Props = {
  closeModal: () => void;
};

const ModalContent = ({ closeModal }: Props) => {
  const shadowsState = useAppSelector((state) => state.shadowReducer);

  //   fonction pour récupéré les data de box et shadow properties en chain de caractères
  const boxShadowValue = getBoxShadowValue(shadowsState);

  //   pour bloquer le scroll Y quand on est sur la modale

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  // Fonction pour copier le texte avec animation texte
  let runningAnimation = false;
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget; // on utilise e.currentTarget qui est plus approprié ici
    if (!runningAnimation) {
      runningAnimation = true;
      target.textContent = "Copied";

      setTimeout(() => {
        target.textContent = "Copy";
        runningAnimation = false;
      }, 1250);
    }

    // commande pour copier coller
    navigator.clipboard.writeText(`Box-shadow: ${boxShadowValue}`);
  };


  return (
    <div
      className="fixed z-10 inset-0 bg-gray-800/90 flex items-center justify-center"
      onClick={() => closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-100 text-black  max-w-[400px] rounded p-6 relative space-y-4"
      >
        <div className="flex  items-end">
          <p className="font-semibold">Here is your code 🍧</p>
          <button
            onClick={handleCopy}
            className="px-4 py-1 ml-auto  bg-blue-600 hover:bg-blue-700 texte-white rounded  text-white"
          >
            Copy
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-1 ml-2 bg-red-600 hover:bg-red-700 texte-white rounded  text-white"
          >
            Close
          </button>
        </div>

        <p className="font-bold bg-gray-300 w-fit p-4 rounded">
          box-shadow: {"  "}
          <span className="font-normal">
            {"  "}
            {boxShadowValue}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
