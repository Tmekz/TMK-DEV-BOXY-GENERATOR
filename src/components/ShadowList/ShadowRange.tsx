import { useAppDispatch } from "../../hook";
import { updateShadowValue } from "../../Redux/shadowsSlice";
import { shadowInputPropsTS} from "../../Redux/types";

type Props = {
  inputData: shadowInputPropsTS;
  shadowID: number | string;
};

const ShadowRange = ({ inputData, shadowID }: Props) => {
  // avec TS on doit utiliser useAppDispatch
  const dispatch = useAppDispatch();

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        id: shadowID,
      })
    );
  };

  return (
    <div className=" my-4">
      <div className="flex justify-between mb-2">
        <p>{inputData.name}</p>
        <div className="flex items-baseline">
          <input
            value={inputData.value}
            // pour jouer en continuer la fonction handleInputs on {handleInputs} et non pas {() => handleInputs()}
            onChange={handleInputs}
            className="w-14 h-8 border border-gray-200 text-center "
            type="number"
            placeholder={String(inputData.value)}
            min={inputData.minMax ? inputData.minMax[0] : 0}
            max={inputData.minMax ? inputData.minMax[1] : 0}
          />
          <p className="px-2">px</p>
        </div>
      </div>
      <div className="relative w-full z-0 flex items-center  ">
        <input
          value={inputData.value}
          onChange={handleInputs}
          className="w-full h-1 bg-gray-300 cursor-pointer appearance-none"
          type="range"
          min={inputData.minMax ? inputData.minMax[0] : 0}
          max={inputData.minMax ? inputData.minMax[1] : 0}
        />
        {/* div just design pour faire la ligne verticale au milieu */}
        <div className="absolute h-10 w-1 -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ShadowRange;
