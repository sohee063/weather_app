import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Home from "./page/Home";
import Auth from "./Auth";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
