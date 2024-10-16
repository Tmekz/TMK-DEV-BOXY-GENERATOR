import BoxRange from "./BoxRange";
import BoxColorPicker from "./BoxColorPicker";
import { useAppSelector } from "../../hook";

const BoxPanel = () => {
  // avec TS on doit utiliser useAppSelector
  const boxState = useAppSelector((state) => state.boxPropertiesReducer);

  // avec TS on doit utiliser useAppDispatch
  // const dispatch = useAppDispatch();

  const boxInputs = boxState.map((value, index) => {
    if (value.type === "range") {
      return <BoxRange key={index} inputData={value} />;
    } else if (value.type === "color") {
      return <BoxColorPicker key={index} inputData={value} />;
    }
  });

  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
      <p className="font-bold text-lg my-2">Box properties</p>
      {boxInputs}
    </div>
  );
};

export default BoxPanel;
