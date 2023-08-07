import { useEffect, useState } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCrad";

import "./card.css" ;

const Trending = () => {
  const [dayTrend, setDayTrend] = useState([]);
  const [weekTrend, setWeekTrend] = useState([]);
  const [isDayTrend, setIsDayTrend] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
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
      .get("https://api.themoviedb.org/3/trending/all/week", {
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
       <div className="trending-container flex flex-row items-center">
      <h2 className="text-2xl font-semibold mb-4">Trending</h2>
      <button
        className="py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600"
        onClick={handleToggleTrend}
      >
        {isDayTrend ? "Week Trending" : "Day Trending"}
      </button>
      <div className="trending-cards w-full max-h-[350px] overflow-x-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
        <TrendingCard data={isDayTrend ? dayTrend : weekTrend} />
      </div>
    </div>
  );
};

export default Trending;

// import { useEffect, useState } from "react";
// import axios from "axios";

// import InfiniteScroll from "react-infinite-scroll-component";
// import "./card.css";
// import TrendingCard from "./TrendingCrad";

// const Trending = () => {
//   const [dayTrend, setDayTrend] = useState([]);
//   const [weekTrend, setWeekTrend] = useState([]);
//   const [isDayTrend, setIsDayTrend] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchTrendingData();
//   }, [isDayTrend]);

//   const fetchTrendingData = () => {
//     const endpoint = isDayTrend ? "day" : "week";
//     axios
//       .get(`https://api.themoviedb.org/3/trending/all/${endpoint}`, {
//         params: {
//           api_key: "c52aac538904a08747df5e8da7018b07",
//           page: page,
//         },
//       })
//       .then((res) => res.data)
//       .then((data) => {
//         const trendingData = data.results;
//         setPage((prevPage) => prevPage + 1);

//         if (isDayTrend) {
//           setDayTrend((prevTrend) => [...prevTrend, ...trendingData]);
//         } else {
//           setWeekTrend((prevTrend) => [...prevTrend, ...trendingData]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching trending data:", err);
//       });
//   };

//   const handleToggleTrend = () => {
//     setIsDayTrend(!isDayTrend);
//   };

//   return (
//     <div className="trending-container flex flex-col items-center">
//       <h2 className="text-2xl font-semibold mb-4">Trending</h2>
//       <button
//         className="py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600"
//         onClick={handleToggleTrend}
//       >
//         {isDayTrend ? "Week Trending" : "Day Trending"}
//       </button>
//       <div className="trending-cards w-full max-h-[350px] overflow-x-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
//         <InfiniteScroll
//           dataLength={isDayTrend ? dayTrend.length : weekTrend.length}
//           next={fetchTrendingData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//           scrollableTarget="trending-cards"
//         >
//           {isDayTrend
//             ? dayTrend.map((movie) => (
//                 <TrendingCard key={movie.id} data={movie} />
//               ))
//             : weekTrend.map((movie) => (
//                 <TrendingCard key={movie.id} data={movie} />
//               ))}
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default Trending;

