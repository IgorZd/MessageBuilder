import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MessageBuilderState } from "./messageBuilderInterfaces";

const initialState: MessageBuilderState = {
  message: "",
  review: "",
};

export const messageBuilderSlice = createSlice({
  name: "messageBuilder",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<any>) => {
      state.message = action.payload.message;
    },
    setReview: (state, action: PayloadAction<any>) => {
      state.review = action.payload.review;
    },
  },
});

export const { setMessage, setReview } = messageBuilderSlice.actions;

export const selectMessage = (state: RootState) => {
  return state.messageBuilder.message;
};
export const selectReview = (state: RootState) => {
  return state.messageBuilder.review;
};

export default messageBuilderSlice.reducer;
