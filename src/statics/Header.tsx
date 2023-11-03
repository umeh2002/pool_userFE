import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-black text-white">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-[30px] hover:cursor-pointer transition-all duration-300">
          Logo
        </div>
        <div className="flex items-center">
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
    </div>
  );
};

export default Header;
