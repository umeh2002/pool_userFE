import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
   <div>
    {
      scroll ?( <div className="w-full h-[70px] flex justify-center items-center bg-black text-white small:w-[100%] fixed z-[20px]">
      <div className="w-[90%] h-full flex justify-between items-center small:flex">
        <div className="text-[30px] hover:cursor-pointer transition-all duration-300">
          Logo
        </div>
        <div className="flex items-center small:hidden">
          <Link to="/create-user">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              create
            </nav>
          </Link>

          <Link to="/">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              view all
            </nav>
          </Link>
          <Link to="/profile">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              profile
            </nav>
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div
          className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineClose />
        </div>
      ) : (
        <div
          className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineMenu />
        </div>
      )}

      {isOpen && (
        <div
          className="w-[100%] h-[20vh] flex text-black absolute top-[60px] left-0  small:flex medium:hidden bg-white"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="flex flex-col w-full h-full">
            <Link to="/create-user">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                create
              </nav>
            </Link>

            <Link to="/">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                view all
              </nav>
            </Link>
            <Link to="/profile">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                profile
              </nav>
            </Link>
          </div>
        </div>
      )}
    </div>):( <div className="w-full h-[70px] flex justify-center items-center bg-black text-white small:w-[100%] ">
      <div className="w-[90%] h-full flex justify-between items-center small:flex">
        <div className="text-[30px] hover:cursor-pointer transition-all duration-300">
          Logo
        </div>
        <div className="flex items-center small:hidden">
          <Link to="/create-user">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              create
            </nav>
          </Link>

          <Link to="/">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              view all
            </nav>
          </Link>
          <Link to="/profile">
            <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none">
              profile
            </nav>
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div
          className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineClose />
        </div>
      ) : (
        <div
          className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineMenu />
        </div>
      )}

      {isOpen && (
        <div
          className="w-[100%] h-[20vh] flex text-black absolute top-[60px] left-0  small:flex medium:hidden bg-white"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="flex flex-col w-full h-full">
            <Link to="/create-user">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                create
              </nav>
            </Link>

            <Link to="/">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                view all
              </nav>
            </Link>
            <Link to="/profile">
              <nav className="text-[17px] mr-3 hover:cursor-pointer transition-all duration-300 decoration-none small:text-center border-b-2 mb-[10px]">
                profile
              </nav>
            </Link>
          </div>
        </div>
      )}
    </div>)
    }
   </div>
  );
};

export default Header;
