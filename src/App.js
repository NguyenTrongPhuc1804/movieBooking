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
import "./i18n";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Film from "./pages/Film/Film";
import AddNew from "./pages/Film/AddNew/AddNew";
import EditFilm from "./pages/Film/EditFilm/EditFilm";
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
            <Route path="/checkout/:id" element={<CheckoutTemplate />}>
              <Route path="" element={<Checkout />}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<UserTemplate />}>
            <Route path="sign-in" element={<Login />}></Route>
            <Route path="sign-up" element={<Register />}></Route>
          </Route>

          <Route path="/admin" element={<AdminTemplate />}>
            <Route path="" element={<Film />}></Route>
            <Route path="film" element={<Film />}></Route>
            <Route path="film/add-new" element={<AddNew />} />
            <Route path="film/edit/:id" element={<EditFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
