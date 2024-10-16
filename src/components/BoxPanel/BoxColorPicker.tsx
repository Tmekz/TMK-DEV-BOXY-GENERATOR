import { useAppDispatch } from "../../hook";
import { updateBoxValue } from "../../Redux/boxPropertiesSlice";
import { boxPropertiesPropsTS } from "../../Redux/types";

type Props = {
  // import via notre fichier général Types.ts
  inputData: boxPropertiesPropsTS;
};

const BoxColorPicker = ({ inputData }: Props) => {
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
    <div className="">
      <p>{inputData.name}</p>
      <div className="flex mt-4 h-10 ">
        <input
          type="text"
          className=" w-full border  py-1 px-2 focus:outline-1 outline-gray-400"
          value={inputData.value}
          onChange={handleChange}
        />
        <input
          className="h-[40px] w-24 cursor-pointer"
          type="color"
          value={inputData.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BoxColorPicker;
