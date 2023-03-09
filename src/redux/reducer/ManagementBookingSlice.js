import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

const initialState = {
  infoRoom: {},
  listTicket: [],
};

export const ManagementBookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateTicket: (state, action) => {
      // let listTicketUpdate = [...state.listTicket];
      let index = state.listTicket.findIndex(
        (ghe) => ghe.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        state.listTicket = state.listTicket.filter(
          (ghe) => ghe.maGhe !== action.payload.maGhe
        );
      } else {
        state.listTicket.push(action.payload);
      }
      // console.log(current(state));
    },
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
export const { updateTicket } = ManagementBookingSlice.actions;

export default ManagementBookingSlice.reducer;
