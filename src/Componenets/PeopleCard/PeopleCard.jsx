import { Link } from "react-router-dom";

const PeopleCard = ({ data, rating, name, profilePath, id }) => {
  return (
    <Link to={`/single-person/${id}`}>
      <div className="w-[350px]">
        <div className="relative m-5 bg-blue-200 rounded-lg p-4 shadow-2xl">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${profilePath}`}
            alt={name}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl text-blue-700 font-semibold">{name}</h2>
          {/* <p className="absolute top-0 right-0 bg-blue-400 p-1 rounded">
            {rating}
          </p> */}
          <p className="text-blue-900">Movie: {data}</p>
        </div>
      </div>
    </Link>
  );
};

export default PeopleCard;
