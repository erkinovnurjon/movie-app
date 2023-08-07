const TrendingCard = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>; // "data" bo'sh yoki uzunligi 0 bo'lsa "Loading..." chiqarib beramiz
  }
  return (
    <div className="cards flex  ">
      
        {data.map((item) => (
          <div className="card w-[200]" key={item.id}>
            
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
              alt={item.title || item.name}
              />
              {item.title || item.name}
          </div>
        ))}
      
    </div>
  );
};

export default TrendingCard;




