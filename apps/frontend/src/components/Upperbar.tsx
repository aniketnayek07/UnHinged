import { BiUndo } from "react-icons/bi";
import { FaFilter } from "react-icons/fa6";
const Upperbar = () => {
  return (
    <nav className="top-0">
      <div className="w-100 bg-black h-15 pb-5 pt-5">
        <div className="flex flex-row justify-between align-middle items-center">
          <BiUndo className="fill-white w-20 h-10" />
          <h1 className="text-4xl font-bold text-white">UnHinged</h1>
          <FaFilter className="fill-white w-20 h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Upperbar;
