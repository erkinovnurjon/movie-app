import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Componenets/MovieCard/MovieCard";

import "./page.css"

import Card from "../Componenets/PopularCard/Card";
import HomeCard from "../Componenets/HomeCard/HomeCard";


const Home = () => {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "aaf4d16e6e17ea1911d45cb7465786d1",
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
  }, []);

  
  return (
    <div className="">
      <div className="  mx-auto p-4 px-8 ">
        <div>
          <HomeCard />
        </div>
        <div>
          <Card />
          
        </div>

      </div>
      <div className="grid container mx-auto p-4 grid-cols-4 ">
      
       
      {state?.data?.map((movie) => (
        
       
        <MovieCard id={movie.id} key={movie.id} title={movie.title} rating={movie.vote_average}
        date={movie.release_date}
        img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
      ))}
    </div>
    </div>
  );
}

export default Home;
