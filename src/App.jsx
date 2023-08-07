import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Movie, SingleMovie, Home, Tv } from "./pages"; // SingleTrending import qilishni unutmang
import Header from "./Componenets/MovieCard/Header";
import SearchMovie from "./Componenets/MovieCard/SearchMovie";
import People from "./pages/People";
import SinglePerson from "./pages/SinglePerson";
import SingleTrending from "./Componenets/PopularCard/SingleTrending";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/tv" element={<Tv />} />
          <Route exact path="/single-movie/:id" element={<SingleMovie />} />
          <Route exact path="/single-person/:id" element={<SinglePerson />} />
          <Route exact path="/people/:id" element={<People />} />
          <Route exact path="/search/:id" element={<SearchMovie />} />
          <Route exact path="/single-trending/:id" element={<SingleTrending />} /> {/* SingleTrending komponentini qo'shamiz */}
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

