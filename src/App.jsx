import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Movie, SingleMovie, Tv, Home, Single } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/tv" element={<Tv />} />
          <Route exact path="/movie/:id" element={<SingleMovie />} />
          <Route exact path="/tv/:id" element={<Single />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
