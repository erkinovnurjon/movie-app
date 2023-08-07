import { useEffect, useState } from "react";
import axios from "axios";
import PeopleCard from "../Componenets/PeopleCard/PeopleCard";
import { data } from "autoprefixer";



const Popular = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/person/popular", {
        params: {
          api_key: "aaf4d16e6e17ea1911d45cb7465786d1",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setPeople(data.results);
      })
      .catch((err) => {
        console.error("Error fetching popular people:", err);
      });
  }, []);
  console.log(data);

  return (
    <div className="container mx-auto p-4 px-8">
      <h1 className=" text-center font-medium text-3xl  text-blue-900">Popular People</h1>
      
      <div className="grid grid-cols-4 gap-4">
        {people.map((person) => (
          <PeopleCard
            key={person.id}
            id={person.id}
            name={person.name}
            profilePath={person.profile_path}
            rating={person.popularity}
            data={person.known_for[1].original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
