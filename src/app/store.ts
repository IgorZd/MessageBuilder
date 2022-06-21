import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import messageBuilderReducer from "./state/messageBuilderSlice";

export const store = configureStore({
  reducer: {
    messageBuilder: messageBuilderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
