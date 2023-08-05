import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "aaf4d16e6e17ea1911d45cb7465786d1",
        },
      })
      .then((res) => res.data)
      .then((data) =>
        setState({
          isFetched: true,
          data: data,
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
    <div className="m-0">
      {state.isFetched ? (
  //       <>
  //      <div className="relative">
  //   <img
  //     className="w-full h-auto rounded-lg mb-4"
  //     src={`https://www.themoviedb.org/t/p/w780${state.data.backdrop_path}`}
  //     alt={state.data.title}
  //   />
  //   <div className="absolute top-0 left-0 text-white p-4">
  // <div className="flex">
  //   <img
  //     className="w-44 h-66 rounded-lg mr-4"
  //     src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${state.data.poster_path}`}
  //     alt={state.data.title}
  //   />
  //   <div>
  //     <h2>Director: {state.data.director}</h2>
  //     <p>{state.data.description}</p>
     
  //   </div>
  // </div>
  //     <h1 className="text-2xl font-semibold mb-2">Movie Name: {state.data.title}</h1>
  //     <div className="flex mb-2">
  //       <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2">Rating: {state.data.vote_average}</span>
  //       <span className="bg-blue-600 text-white px-2 py-1 rounded-md">Budget: {state.data.budget}</span>
  //     </div>
  //     <span className="text-gray-600 block mb-4">Release Date: {state.data.release_date}</span>
  //   </div>
  // </div>
  //         </>
        <>
  <div className="relative">
    <img
      className="w-full h-auto rounded-lg mb-4 "
      src={`https://www.themoviedb.org/t/p/w780${state.data.backdrop_path}`}
      alt={state.data.title}
    />
    <div className="absolute top-0 left-0 text-white p-4 w-full">
      <div className="flex justify-between text-center">
        <img
          className="w-1/4 h-66 rounded-lg mr-6"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${state.data.poster_path}`}
          alt={state.data.title}
        />
        <div className="w-2/5">
        <h1 className="text-2xl font-semibold mb-2">Movie Name: {state.data.title}</h1>
      
        <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2">Rating: {state.data.vote_average}</span>
        <span className="bg-blue-600 text-white px-2 py-1 rounded-md">Budget: {state.data.budget}</span><br />
      
        <span className="text-white mb-4 bg-blue-600 inline-block p-2 mt-3">Release Date: {state.data.release_date}</span>
          
        </div>
      </div>
    </div>
  </div>
</>


      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default SingleMovie;


