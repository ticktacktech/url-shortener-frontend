import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:shortUrl" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
