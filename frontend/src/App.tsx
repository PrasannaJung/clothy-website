import { Navigate, Route, Routes } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import TestPage from "./pages/TestPage";
import AddToCart from "./pages/AddToCart";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products/all' element={<Products />} />
        <Route path='/products/men' element={<Men />} />
        <Route path='/products/women' element={<Women />} />
        <Route path='/data' element={<TestPage />} />
        <Route path='admin/add-to-cart' element={<AddToCart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
