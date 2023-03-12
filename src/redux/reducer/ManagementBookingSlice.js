import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { InfoBookTiket } from "../../core/modal/InfoBookTicket";
import requestMovie from "../../services/servicesReques";
import { openCustomNotificationWithIcon } from "../../util/setting/nontification";
import { displayLoading, hiddenLoading } from "./LoadingSlice";

const initialState = {
  reloadPage: false,
  isLoading: false,
  errorMessage: "",
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoRoom.fulfilled, (state, action) => {
      const { content, statusCode } = action.payload;
      state.infoRoom = content;
    });
    //booking ticket api
    builder.addCase(bookingTicket.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        openCustomNotificationWithIcon(
          "success",
          "Đặt vé thành công",
          "",
          "topRight"
        );
      }
      console.log(action);
    });
    builder.addCase(bookingTicket.rejected, (state, action) => {
      // state.isLoading = false;
      // state.errorMessage = action.payload.message;
      // openCustomNotificationWithIcon(
      //   "error",
      //   `${state.errorMessage}`,
      //   "",
      //   "topRight"
      // );
      console.log(action);
    });
  },
});

// get list room
export const getInfoRoom = createAsyncThunk(
  "booking/getInfoRoom",
  async (idBooking, { dispatch }) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.get(
        `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
      );
      dispatch(hiddenLoading());

      return data;
    } catch (err) {
      console.log(err);
      return err;
      dispatch(hiddenLoading());
    }
  }
);

// booking ticket api
export const bookingTicket = createAsyncThunk(
  "booking/bookingTicket",
  async (
    infoBookTiket = new InfoBookTiket(),
    { rejectWithValue, dispatch }
  ) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.post(
        "QuanLyDatVe/DatVe",
        infoBookTiket
      );
      await dispatch(getInfoRoom(infoBookTiket.maLichChieu));
      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      console.log(err);
      dispatch(hiddenLoading());

      return rejectWithValue(err);
    }
  }
);
export const { updateTicket } = ManagementBookingSlice.actions;

export default ManagementBookingSlice.reducer;
