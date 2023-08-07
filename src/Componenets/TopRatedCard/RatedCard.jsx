import { useEffect, useState } from "react";
import axios from "axios";


import "../PopularCard/card.css" ;
import TrendingCard from "../PopularCard/TrendingCrad";

const RatedCard = () => {
  const [dayTrend, setDayTrend] = useState([]);
  const [weekTrend, setWeekTrend] = useState([]);
  const [isDayTrend, setIsDayTrend] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res.data)
      .then((data) => setDayTrend(data.results))
      .catch((err) => {
        console.error("Error fetching day trending data:", err);
      });

    axios
      .get("https://api.themoviedb.org/3/tv/top_rated", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res.data)
      .then((data) => setWeekTrend(data.results))
      .catch((err) => {
        console.error("Error fetching week trending data:", err);
      });
  }, []);

  const handleToggleTrend = () => {
    setIsDayTrend(!isDayTrend);
  };

  
  return (
    <div>
      <div className="flex flex-row items-center gap-5 container mx-auto px-8 p-4 mt-10 ">
      <div className="ml-12">
        <h2 className="text-4xl font-semibold mb-4 text-blue-900">Top Rated</h2>
        
      </div>
           <div className="buttons flex gap-2 rounded-3xl shadow-2xl">
             <button
             className={`p-3  text-blue-900 rounded-3xl ${
                isDayTrend
                 ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white"
                 : "bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
           }`}
            onClick={() => setIsDayTrend(true)}
       >
        Top Movies
       </button>
        <button
         className={`p-3 text-blue-900 rounded-3xl ${
         !isDayTrend
         ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white"
         : "bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
    }`}
    onClick={() => setIsDayTrend(false)}
  >
    Tv Shows
  </button>
</div>


      
    </div>
    <div className="trending-cards w-full  gap-4 mt-9 container overflow-auto">
        <TrendingCard data={isDayTrend ? dayTrend : weekTrend} />
      </div>
    </div>
       
  );
};

export default RatedCard;
