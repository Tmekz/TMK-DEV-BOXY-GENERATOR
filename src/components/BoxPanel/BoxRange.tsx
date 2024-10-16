import { useAppDispatch } from "../../hook";
import { updateBoxValue } from "../../Redux/boxPropertiesSlice";
import { boxPropertiesPropsTS } from "../../Redux/types";

type BoxProps = {
  inputData: boxPropertiesPropsTS;
};

const BoxRange = ({ inputData }: BoxProps) => {
  // avec TS on doit utiliser useAppDispatch
  const dispatch = useAppDispatch();

  // console.log(inputData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="my-8  z-10">
      <div className="flex justify-between ">
        <p>{inputData.name}</p>
        <div className="flex mb-2 ">
          <input
            type="number"
            className="text-center p-1 w-14 h-8 mr-2 border border-gray-200"
            value={inputData.value}
            onChange={handleChange}
            min={inputData.minMax && inputData.minMax[0]}
            max={inputData.minMax && inputData.minMax[1]}
          />
          <p>px</p>
        </div>
      </div>

      <div className="relative z-0 w-full flex items-center">
        <input
          type="range"
          className="w-full h-[2px] bg-gray-300  appearance-none cursor-pointer"
          onChange={handleChange}
          value={inputData.value}
          min={inputData.minMax && inputData.minMax[0]}
          max={inputData.minMax && inputData.minMax[1]}
        />

        <div className="absolute -z-10 h-10 w-0.5 bg-gray-300  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2   "></div>
      </div>
    </div>
  );
};

export default BoxRange;
