import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

const initialState = {
  listCinema: [],
};

export const ManagementInfoCinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getListInfoCinema.fulfilled, (state, action) => {
      state.listCinema = action.payload.content;
    });
  },
});

export const getListInfoCinema = createAsyncThunk(
  "cinema/getlistCinema",
  async () => {
    const { data } = await requestMovie(
      "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00"
    );
    return data;
  }
);

export const { reducerName } = ManagementInfoCinemaSlice.actions;

export default ManagementInfoCinemaSlice.reducer;
