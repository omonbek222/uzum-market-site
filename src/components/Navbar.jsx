import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/image.png"; // Assets papkasidan logo rasmni import qilamiz

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Izlanayotgan: ", searchQuery);
  };

  return (
    <nav className="p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo va "Uzum Market" matni */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo} // Rasmni import qilib chaqiramiz
            alt="Uzum Market"
            className="h-12" // Rasmning balandligini o'zgartirish
          />
          <h1 className="text-3xl font-bold text-[#00695c]">Uzum Market</h1> {/* Matnni qo'shdik */}
        </Link>

        {/* Izlash formasi */}
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Izlash..."
            className="p-3 w-[400px] rounded-l-md border-2 border-gray-500 focus:outline-none focus:border-gray-700 transition-all"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-700 transition duration-300"
          >
            Izlash
          </button>
        </form>

        {/* Navbar linklari */}
        <ul className="flex space-x-8 text-black">
          <li>
            <Link to="/" className="hover:text-gray-600 transition duration-300">
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className="hover:text-gray-600 transition duration-300"
            >
              Kategoriyalar
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-600 transition duration-300">
              Savat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
