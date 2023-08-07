import { Link } from "react-router-dom";

const SingleTrendCard = ({ id, data }) => {
  return (
    <>
      <div>
        <Link to={`/single-trending/${id}`}>
          <div key={id}>
            <h1>Movie Name: {data.title}</h1>
            <h1>Date: {data.release_date}</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleTrendCard;

