import { useEffect, useState } from "react";
import axios from "axios";


import "./page.css"

import Card from "../Componenets/PopularCard/Card";
import HomeCard from "../Componenets/HomeCard/HomeCard";
import TvCard from "../Componenets/TvCard/TvCard";
import RatedCard from "../Componenets/TopRatedCard/RatedCard";
import Footer from "../Componenets/MovieCard/Footer";


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
        <div>
          <TvCard />
        </div>
        <div>
          <RatedCard />
        </div>

      </div>
        <Footer />
    </div>
  );
}

export default Home;
