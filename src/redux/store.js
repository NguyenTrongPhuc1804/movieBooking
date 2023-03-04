import { configureStore } from "@reduxjs/toolkit";
import CaurouselSlice from "./reducer/CarouselSlice";
import counterSlice from "./reducer/counterSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import ManagementInfoCinemaSlice from "./reducer/ManagementCinemaSilce";

export const store = configureStore({
  reducer: {
    counterSlice,
    CaurouselSlice,
    ManagementFilmSlice,
    ManagementInfoCinemaSlice,
  },
});
