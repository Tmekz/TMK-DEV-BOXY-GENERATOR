import { useState } from "react";
import BoxPanel from "./BoxPanel/BoxPanel";
import ShadowList from "./ShadowList/ShadowList";

const LeftContainer: React.FC = () => {
  const [tabs, setTabs] = useState(0);

  const tabsList = [
    { name: "Shadow", component: <ShadowList /> },
    { name: "BoxPanel", component: <BoxPanel /> },
  ];

  return (
    <div className="relative mt-20 w-[600px] h-[650px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0 ">
      <div className="flex absolute -translate-y-full -left-[1px]">
        {tabsList.map((value, index) => (
          <button
            onClick={() => setTabs(index)} //change index
            key={index}
            className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300 "
          >
            {value.name}
          </button>
        ))}
      </div>
      <div className="h-full py-4 px-6 overflow-y-scroll">{tabsList[tabs].component}</div>
    </div>
  );
};

export default LeftContainer;
