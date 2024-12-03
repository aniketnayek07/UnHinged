import { MdPerson } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BiSolidCarousel } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
const Bottombar = () => {
  return (
    <nav className="absolute bottom-0 w-screen">
      <div className="flex justify-center items-center ">
        <div className="bg-black w-1/2 h-12 rounded-t-xl flex flex-row align-middle items-center justify-between px-6">
          <MdPerson className="fill-white w-20 h-8 " />
          <BiSolidCarousel className="fill-white w-20 h-8 " />
          <FaHeart className="fill-white w-20 h-8 " />
          <FaComment className="fill-white w-20 h-8 " />
        </div>
      </div>
    </nav>
  );
};

export default Bottombar;
