import { Link } from "react-router-dom";
import "./style.css";

const MovieCard = ({ id , title , rating, date, img }) => {
  return (
    <Link to={`/single-movie/${id}`}>
      <div className="m-5 bg-blue-200 rounded-lg p-4 shadow-md relative card">
        <img src={img} alt="" className="w-full rounded-lg" />
        <h2 className="text-xl text-blue-700 font-semibold mt-2">{title}</h2>
        <div className="flex items-center mt-3 absolute top-2 right-4">
          <span className="w-[45px] text-blue-700 text-xl bg-cyan-300 rounded-full p-2 hover:bg-pink-900 hover:text-white hover:transition">
            {rating}
          </span>
        </div>
        <span className="text-sm text-blue-800">{date}</span>
      </div>
    </Link>
  );
};

export default MovieCard;




