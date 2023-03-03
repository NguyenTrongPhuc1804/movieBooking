import { configureStore } from "@reduxjs/toolkit";
import CaurouselSlice from "./reducer/CarouselSlice";
import counterSlice from "./reducer/counterSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    counterSlice,
    CaurouselSlice,
    ManagementFilmSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
