import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleTrendCard from "./SingleTrendCard";

const SingleTrending = () => {
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

  return (
    <>
      <div className="container mx-auto px-8 p-4">
        {isDayTrend
          ? dayTrend.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <SingleTrendCard data={movie} />
              </Link>
            ))
          : weekTrend.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <SingleTrendCard data={movie} />
              </Link>
            ))}
      </div>
    </>
  );
};

export default SingleTrending;
