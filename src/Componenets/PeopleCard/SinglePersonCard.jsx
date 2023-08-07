import { Link } from "react-router-dom";

const SinglePersonCard = ({ id, name, profilePath,  biography }) => {
  return (
    <div className="flex gap-5  m-5  rounded-lg p-4 shadow-2xl">
      <Link to={`/single-person/${id}`}>
        <div className="w-[250px]">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${profilePath}`}
          alt={name}
          className="w-[300px]  rounded-lg mb-4"
        />
        <h2 className="text-xl text-blue-700 font-semibold">{name}</h2>

        </div>
      </Link>
      <p >Biography: {biography}</p>
    </div>
  );
};

export default SinglePersonCard;
