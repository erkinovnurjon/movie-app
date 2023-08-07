import  { useEffect, useState } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCrad";


const DayTrending = () => {
  const [dayTrend, setDayTrend] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res.data.results)
      .then((data) => setDayTrend(data))
      .catch((error) => console.error("Error fetching day trending data:", error));
  }, []);

  return (
      <div className="flex">
            <TrendingCard  data={dayTrend} />
      </div>
  ) 
};

export default DayTrending;
