const TrendingCard = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>; // "data" bo'sh yoki uzunligi 0 bo'lsa "Loading..." chiqarib beramiz
  }

  // "data" mavjud bo'lsa unga qarab ma'lumotlarni ko'rsatib beramiz
  return (
    <div className="card">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title || item.name}
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
              alt={item.title || item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCard;




