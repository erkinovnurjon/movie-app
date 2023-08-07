import { Link } from "react-router-dom";

const SingleTrendCard = ({ id, data }) => {
  return (
    <>
      <div className="container">
        <Link to={`/single-trending/${id}`}>
          <div key={id}>
            <h1>Movie Name: {data.title}</h1>
            <h1>Date: {data.release_date}</h1>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.backdrop_path}`} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleTrendCard;


