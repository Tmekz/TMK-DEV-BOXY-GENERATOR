import logo from "/TMK-LOGO-BLACK.svg";

const Header = () => {
  return (
    <div className="py-6 border-b-2 border-gray-200">
      <img
        className="w-38 h-10 absolute left-6 sm:flex hidden"
        src={logo}
        alt="logo"
      />
      <h1 className="font-semibold text-2xl text-center mx-auto">
        BOXY GENERATOR
      </h1>
    </div>
    
  );
};

export default Header;
