import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleTrendCard = () => {
  const {id} = useParams()

  const [movies, setMovies] =useState()
  useEffect(()=>{
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "c52aac538904a08747df5e8da7018b07",
        },
      })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setMovies(data.data);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[])
  return (
    <>
      <div>
        <Link to={`/single-trending/${id}`}>
          <div key={id}>
            <h1>Movie Name: {movies.title}</h1>
            <h1>Date: {movies.release_date}</h1>
            <img src={`https://www.themoviedb.org/t/p/w500/${data.backdrop_path}`} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleTrendCard;
