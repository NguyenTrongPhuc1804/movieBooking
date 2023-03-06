import { configureStore } from "@reduxjs/toolkit";
import CaurouselSlice from "./reducer/CarouselSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";
import ManagementInfoCinemaSlice from "./reducer/ManagementCinemaSilce";

export const store = configureStore({
  reducer: {
    CaurouselSlice,
    ManagementFilmSlice,
    ManagementInfoCinemaSlice,
  },
});
