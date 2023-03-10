import "./index.css";
import "./App.css";
import _ from "lodash";
import {
  Route,
  Routes,
  Swicth,
  BrowserRouter,
  Navigate,
  redirect,
  Router,
} from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { Suspense, lazy } from "react";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Login from "./pages/Login/Login";
import UserTemplate from "./templates/UserThemplate/UserTemplate";
import Register from "./pages/Register/Register";
import { createBrowserHistory } from "history";
import Loading from "./components/Loading/Loading";
export const history = createBrowserHistory();
const CheckoutTemplateLazy = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTemplate")
);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Loading />
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route path="" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
          <Route path="/checkout/:id" element={<CheckoutTemplate />}>
            <Route path="" element={<Checkout />}></Route>
          </Route>
          <Route path="/login" element={<UserTemplate />}>
            <Route path="sign-in" element={<Login />}></Route>
            <Route path="sign-up" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
