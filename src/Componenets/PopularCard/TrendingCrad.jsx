import { Link } from "react-router-dom";

      


const TrendingCard = ({ data ,id }) => {
  
  if (!data || data.length === 0) {
    return <div>Loading...</div>; 
  }console.log(data);

  return (
    <Link to={`/single-movie/${id}`}>
        <div className="cards  flex  gap-4">
              {data.map((item) => (
               <div className="card" key={item.id}>
           <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
            alt={item.title || item.name}
            className="w-full h-auto rounded-lg mb-2"
          />
          <h2 className="text-lg font-semibold text-blue-900">
            {item.title || item.name}
          </h2>
          <p className="text-sm text-gray-500">{item.release_date}</p>
        </div>
      ))}
    </div>
    </Link>
  );
};

export default TrendingCard;






