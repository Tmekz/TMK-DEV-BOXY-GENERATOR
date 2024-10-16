import { useEffect, useState } from "react";
import { shadowPropsTS } from "../../Redux/types";
import Chevron from "../../assets/chevron.svg";
import ShadowCheckbox from "./ShadowCheckbox";
import { useAppDispatch } from "../../hook";
import { removeShadow } from "../../Redux/shadowsSlice";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";

type ShadowProps = {
  shadowData: shadowPropsTS;
  panelNumber: number;
};

const Shadow = ({ shadowData, panelNumber }: ShadowProps) => {
  const [toggleShadow, setToggleShadow] = useState(false);
  // avec TS on doit utiliser useAppDispatch
  const dispatch = useAppDispatch();

  // pour afficher en petit les nouvelles shadows
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  // avec shadow.jsx on est déjà dans un map des DATA, donc il faut qu'on map le tableau inputs [] maintenant
  const shadowInputs = shadowData.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          shadowID={shadowData.id}
          inputData={shadowData.inputs[index]}
        />
      );
    }
    else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          shadowID={shadowData.id}
          inputData={shadowData.inputs[index]}
        />
      );
    }
  });
  

  return (
    <li className="border-b border-gray-300 list-none  ">
      <button
        className="flex w-full p-6 justify-between cursor-pointer hover:bg-gray-100 "
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <p>{`Shadow ${panelNumber}`}</p>

        {/* permet de changer de rotate au click */}
        <img
          src={Chevron}
          alt=""
          className="h-8 w-8"
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
        />
      </button>
      {toggleShadow && (
        <div className="py-2 px-6 ">
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <ShadowCheckbox name={"active"} shadowID={shadowData.id} />
              <ShadowCheckbox name={"inset"} shadowID={shadowData.id} />
            </div>
            <button
              onClick={() => dispatch(removeShadow(shadowData.id))}
              className="px-2 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
            >
              Remove
            </button>
          </div>
          <>{shadowInputs}</>
        </div>
      )}
    </li>
  );
};

export default Shadow;
