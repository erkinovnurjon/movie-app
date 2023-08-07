import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
      const [change, setChange] = useState("");
      const navigate = useNavigate();

      const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(e);
      navigate(`/search/${change}`);
  };
  return (
    <>
    <div className="container mx-auto  mt-0 px-8">
      <div className=" relative">
            
            <img className="w-full shadow-2xl max-h-[550px] object-cover rounded-2xl" src="https://i.pinimg.com/564x/31/75/91/317591f6ac958fe6873627eb3226f61b.jpg" alt="" />
              <div className=" absolute top-7 w-full">
                  <h1 className=" text-center  text-white text-6xl font-medium from-stone-50">Welcome</h1>
                  <h1 className=" pt-10 text-center  text-white text-5xl font-medium from-stone-50">
                        Unlimited movies, TV shows, and more
                  </h1>
                  <h1 className=" pt-10 text-center  text-white text-4xl font-medium from-stone-50">Watch anywhere. Cancel anytime.</h1>
                  
                  <form className="flex gap-3 mt-28 px-28" onSubmit={handleSubmit}>
                    <input

        
                    value={change}
                    onChange={(e) => setChange(e.target.value)}
                    className="text-blue-700 p-3 w-full outline-none rounded"
                    type="search"
                    placeholder="Search movie..."
          
                   />
                   <button type="submit" className=" text-white px-5 py-2 bg-blue-800 rounded">
                   Search
                   </button>
                  </form> 
             </div>   
      </div>
    </div>
    </>
  )
}

export default HomeCard