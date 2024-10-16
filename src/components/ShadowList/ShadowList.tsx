import Shadow from "./Shadow";
import { useAppDispatch } from "../../hook";
import { useAppSelector } from "../../hook";
import { addShadow } from "../../Redux/shadowsSlice";

const ShadowList = () => {
  // avec TS on doit utiliser useAppSelector
  const shadowState = useAppSelector((state) => state.shadowReducer);
  // avec TS on doit utiliser useAppDispatch
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-between items-center p-6 border-b border-gray-300 ">
        <p className="font-bold text-lg ">Customize Shadows</p>

        <button
          // on envoie au store la fonction qui est dans le slice
          onClick={() => dispatch(addShadow())}
          className="bg-blue-600 hover:bg-blue-700 focus:outline-none text-white py-2 px-3 rounded font-bold text-lg"
        >
          Add a shadow{" "}
        </button>
      </div>

      {shadowState.map((shadow, index) => (
        // important ici de mettre shadow.id pour reconnaitre chaque élément, car ce n'est pas comme dans boxPanel ou les datas sont seulement 4 objets à afficher
        <Shadow key={shadow.id} shadowData={shadow} panelNumber={index + 1} />
      ))}
    </>
  );
};

export default ShadowList;
