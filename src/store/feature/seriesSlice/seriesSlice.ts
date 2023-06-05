import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Series } from "../../../types";

const initialState: Series[] = [];

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    loadSeries: (currentState, action: PayloadAction<Series[]>) => ({
      ...currentState,
      series: action.payload,
    }),
  },
});

export const { loadSeries: loadSeriesActionCreator } = seriesSlice.actions;
export const seriesReducer = seriesSlice.reducer;
