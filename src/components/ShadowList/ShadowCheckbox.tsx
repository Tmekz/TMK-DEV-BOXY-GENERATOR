import { useAppDispatch, useAppSelector } from "../../hook";
import { updateCheckbox } from "../../Redux/shadowsSlice";

type Props = {
  name: "active" | "inset";
  shadowID: number | string;
};

const ShadowCheckbox = ({ name, shadowID }: Props) => {
  // avec TS on doit utiliser useAppDispatch
  const dispatch = useAppDispatch();

  // recupère les data du state qui sont dans le boxPropertiesSlice.js
  // avec TS on doit utiliser useAppSelector
  // const boxState = useAppSelector((state) => state.boxPropertiesReducer);

  const checkboxShadowState = useAppSelector((state) =>
    state.shadowReducer.find((el) => el.id === shadowID)
  );

  const handleCheckBoxChange = () => {
    dispatch(
      updateCheckbox({
        id: shadowID,
        name: name, // Propriété (active ou inset) passé en dur via parent
      })
    );
  };

  return (
    <>
      {/* si tu fais checked={checkboxShadowState.name}, JavaScript va chercher une propriété exactement appelée "name" dans l'objet checkboxShadowState. Comme elle n'existe pas, il retourne undefined.

      Par contre, en faisant checked={checkboxShadowState[name]}, JavaScript interprète name comme "active", donc il accède à checkboxShadowState.active, qui vaut true. */}
      <input
        id={`checkbox-${name}-${shadowID}`}
        type="checkbox"
        checked={checkboxShadowState ? checkboxShadowState[name] : false}
        onChange={() => handleCheckBoxChange()}
        className="h-4 w-5 rounded"
      />
      <label
        className="ml-2 mr-6 capitalize "
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {name}
      </label>
    </>
  );
};

export default ShadowCheckbox;
