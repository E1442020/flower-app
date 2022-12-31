import { Route, Routes } from "react-router-dom";
import Favourite from "./component/favourite/Favourite";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";


function App() {
  return (
   <>
   <Navbar />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view/:index" element={<Profile/>} />
        <Route path="fav" element={<Favourite/>} />
      </Routes>
   <Footer />
    </>
  );
}

export default App;
