import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

const initialState = {
  infoRoom: {},
};

export const ManagementBookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoRoom.fulfilled, (state, action) => {
      const { content, statusCode } = action.payload;
      state.infoRoom = content;
    });
  },
});

// get list room
export const getInfoRoom = createAsyncThunk(
  "booking/getInfoRoom",
  async (idBooking) => {
    const { data } = await requestMovie.get(
      `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
    );
    return data;
  }
);
export const { reducerName } = ManagementBookingSlice.actions;

export default ManagementBookingSlice.reducer;
