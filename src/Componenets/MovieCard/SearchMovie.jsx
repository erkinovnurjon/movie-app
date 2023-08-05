import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "aaf4d16e6e17ea1911d45cb7465786d1",
          query: id,
        },
      })
      .then((res) => res.data)
      .then((data) =>
        setState({
          isFetched: true,
          data: data.results,
          error: false,
        })
      )
      .catch((err) => {
        setState({
          isFetched: true,
          data: [],
          error: err,
        });
      });
  }, [id]);

  return (
    <div className="grid container mx-auto p-4 grid-cols-4 ">
      {state?.data?.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          date={movie.release_date}
          img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default SearchMovie;

