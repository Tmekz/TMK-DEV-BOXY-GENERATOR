import { useAppDispatch } from "../../hook";
import { updateShadowValue } from "../../Redux/shadowsSlice";
import { shadowInputPropsTS } from "../../Redux/types";

type Props = {
  inputData: shadowInputPropsTS;
  shadowID: number | string;
};
const ShadowColorPicker = ({ inputData, shadowID }: Props) => {
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
    <>
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input
          type="text"
          className="w-full border py-1 px-2 outline-gray-400 focus:outline-1"
          value={inputData.value}
          onChange={handleInputs}
        />
        <input
          type="color"
          className="cursor-pointer h-[40px]"
          value={inputData.value}
          onChange={handleInputs}
        />
      </div>
    </>
  );
};

export default ShadowColorPicker;
