import { useAppSelector } from "../../hook";
import getBoxShadowValue from "../../utils/getBoxShadowValue";
import ModalBtn from "./Modal/ModalBtn";

const Visualisation = () => {
  const shadowsState = useAppSelector((state) => state.shadowReducer);
  const boxPropertiesSlice = useAppSelector(
    (state) => state.boxPropertiesReducer
  );
  return (
    <div className={`flex flex-col p-5 ml-10 lg:ml-28`}>
      <ModalBtn />
      <div
        className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"
        // on vient maintenant appliquer à notre carré blanc les valeurs des inputs pour box shadow, offset, radius, spread offset etc le .slice permet de régler une erreur d'écriture
        style={{
          boxShadow: `${getBoxShadowValue(shadowsState).slice(0, -1)}`,
          borderRadius: `${boxPropertiesSlice[0].value}px`,
          height: `${boxPropertiesSlice[1].value}px`,
          width: `${boxPropertiesSlice[2].value}px`,
          backgroundColor: `${boxPropertiesSlice[3].value}`,
        }}
      ></div>
    </div>
  );
};

export default Visualisation;
