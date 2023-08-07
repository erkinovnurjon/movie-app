import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Componenets/MovieCard/MovieCard";

import "./page.css"

import Card from "../Componenets/PopularCard/Card";


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
    <div className="container">
      {/* <div className=" container mx-auto p-4 px-8 w-full h-96 bg-slate-400">
        <div>
          <Card />
          
        </div>

      </div> */}
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


// c52aac538904a08747df5e8da7018b07;
// import axios from "axios";
// import  { useEffect, useState } from "react";
// import DayTrend from "../components/trending/DayTrend";
// import WeekTrend from "../components/trending/WeekTrend";

// const Home = () => {
//   const [dayTrend, setDayTrend] = useState([])
//   const [weekTrend, setWeekTrend] = useState([])
//   const [searchkey, setSearchkey] = useState('Avatar');
//   const [tvPop, setTvPop] = useState([]);
//   // const [searchMovie, setSearchMovie] = useState('');
//   const [trend, setTrend] = useState();
//   const [defaultM, setDefaultM] = useState(true);
//   const [trendStyle, setTrendStyle] = useState({
//     day:'gradient day',
//     week:'day'
//   });
//   const [loader, setLoader] = useState({
//     day:true,
//     week:true,
//     tvPop:true
//   });
//   // console.log(trend);

//   useEffect(()=>{
//     axios.get("https://api.themoviedb.org/3/trending/all/day", {
//       params: {
//         api_key: "c52aac538904a08747df5e8da7018b07",
//       },
//     })
//     .then(res=>res)
//     .then(data=> 
//       setDayTrend(data.data.results),
//       setLoader({day:false})
//     )

//     axios
//       .get("https://api.themoviedb.org/3/trending/all/week", {
//         params: {
//           api_key: "c52aac538904a08747df5e8da7018b07",
//         },
//       })
//       .then((res) => res)
//       .then(
//         (data) => setWeekTrend(data.data.results),
//         setLoader({ week: false }),
//       );

//     axios
//       .get('https://api.themoviedb.org/3/tv/popular', {
//         params: {
//           api_key: "c52aac538904a08747df5e8da7018b07",
//         },
//       })
//       .then((res) => res)
//       .then((data) => setTvPop(data.data.results), setLoader({ tvPop: false }));

//     axios
//       .get('https://api.themoviedb.org/3/search/movie?query=${searchkey}', {
//         params: {
//           api_key: "c52aac538904a08747df5e8da7018b07",
//           // query: searchKey
//         },
//       })
//       .then((res) => res)
//       .then((data) => console.log(data));

    
//   },[])
//   console.log(searchkey);
//   // console.log(tvPop);

//   const homeHero = {
//     backgroundImage: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/sa9vB0xb3OMU6iSMkig8RBbdESq.jpg'),
//   };


  
//   const handleWeek =()=>{
//     setTrend(<WeekTrend weekTrend={weekTrend}  />);
//     setDefaultM(false)
//     setTrendStyle({
//       day:'day',
//       week:'gradient day'
//     })
    
//   }
//   const handleDay =()=>{
//     setTrend(<DayTrend dayTrend={dayTrend}/>);
//         setDefaultM(false);
//         setTrendStyle({
//           day: "gradient day",
//           week: "day"
//         });

//     console.log(trend);
//   }

//   // const searchMovies =(e)=>{
//   //     e.preventDefault()
//   // }

//   return (
//     <div>
//       <div className="home-hero" style={homeHero}>
//         <div className="home-blur">
//           <div className="container">
//             <h1 className="home-title">Welcome.</h1>
//             <h2 className="home-subtitle">
//               Millions of movies, TV shows and people to discover. Explore now.
//             </h2>
//             <form>
//               <input
//                 type="search"
//                 placeholder="Search for a movie, tv show, person . . ."
//                 onChange={(e) => setSearchkey(e.target.value)}
//               />
//               <button className="search-btn">Search</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       </div>
//       )
//   }