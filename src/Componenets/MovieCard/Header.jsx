import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(change);
    navigate(`/search/${change}`);
  };

  return (
    <div className=" bg-blue-600 w-full mb-0">
      <div className="container mx-auto p-4 px-8 flex text-white items-center justify-between">
      <NavLink to={"/"}>
        <img className=" w-10 rounded-[50%] h-10" src="https://i.pinimg.com/564x/ca/e3/e6/cae3e6de5a2b4ab40f283dda7c5ccdc8.jpg" alt="" />
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input

        
          value={change}
          onChange={(e) => setChange(e.target.value)}
          className="text-blue-700 p-2 w-96 outline-none rounded"
          type="search"
          placeholder="Search movie..."
          
        />
        <button type="submit" className=" text-white px-3 py-2 bg-blue-800 rounded">
          Search
        </button>
      </form>
      <ul className="flex space-x-5 ">
        <li className="hover:text-blue-200 transition-all">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-200 transition-all">
          <Link to={"/movie"}>Movie</Link>
        </li>
        <li className="hover:text-blue-200 transition-all">
          <Link to={"/people/:id"}>People</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Header;

