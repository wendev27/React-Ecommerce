import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages directories
import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";

// Auth directories
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

// Components directories
import Nabvar from "../Components/Navbar.jsx/Navbar";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";

export const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Nabvar></Nabvar>
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        ></Route>
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* {not found routes} */}
        <Route path="*" element={<Error />}></Route>
      </Routes>

      {/* footer compoennt */}
      <Footer></Footer>
    </BrowserRouter>
  );
};
