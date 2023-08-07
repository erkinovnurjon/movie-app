// import  { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import SinglePersonCard from "../Componenets/PopularCard/SinglePersonCard";

// const SinglePerson = () => {
//   const { id } = useParams();
//   const [state, setState] = useState({
//     isFetched: false,
//     data: [],
//     error: false,
//   });

//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/person/${id}`, {
//         params: {
//           api_key: "aaf4d16e6e17ea1911d45cb7465786d1",
//         },
//       })
//       .then((res) => res.data)
//       .then((data) =>
//         setState({
//           isFetched: true,
//           data: data,
//           error: false,
//         })
//       )
//       .catch((err) => {
//         setState({
//           isFetched: true,
//           data: [],
//           error: err,
//         });
//       });
//   }, [id]);

//   return (
//     <div className="m-0">
//       {state.isFetched ? (
//         <>
//           <SinglePersonCard
//           id={state.data.id}
//           name={state.data.name}
//           profilePath={state.data.profile_path}
//           birthday={state.data.birthday}
//           biography={state.data.biography}
//         />
//         </>
          
//       ) : (
//         <div className="loader"></div>
//       )}
//     </div>
//   );
// };

// export default SinglePerson;


import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import SinglePersonCard from "../Componenets/PeopleCard/SinglePersonCard";
import { data } from "autoprefixer";

const SinglePerson = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}`, {
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
        <SinglePersonCard
          id={state.data.id}
          name={state.data.name}
          profilePath={state.data.profile_path}
          birthday={state.data.birthday}
          biography={state.data.biography}
        />
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default SinglePerson;
