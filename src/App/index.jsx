import Status from "../Status";
import StarRating from "../Star";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Status />} />
          <Route path="/rating" element={<StarRating />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
