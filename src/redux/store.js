import { configureStore } from "@reduxjs/toolkit";
import CaurouselSlice from "./reducer/CarouselSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";
import ManagementInfoCinemaSlice from "./reducer/ManagementCinemaSilce";
import ManagementUserSlice from "./reducer/ManagementUserSlice";

export const store = configureStore({
  reducer: {
    CaurouselSlice,
    ManagementFilmSlice,
    ManagementInfoCinemaSlice,
    ManagementUserSlice,
  },
});
