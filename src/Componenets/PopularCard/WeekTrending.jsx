import  { useEffect, useState } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCrad";


const WeekTrending = () => {
  const [weekTrend, setWeekTrend] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/week", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res.data.results)
      .then((data) => setWeekTrend(data))
      .catch((error) => console.error("Error fetching week trending data:", error));
  }, []);

  return (
      <div className="flex">
            <TrendingCard data={weekTrend} />
      </div>
  );
};

export default WeekTrending;
