import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boxPropertiesPropsTS } from "./types";

const initialState: boxPropertiesPropsTS[] = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#ffffff",
    type: "color",
  },
];

export const boxPropertiesSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (
      state,
      action: PayloadAction<{ inputNumber: number; value: string }>
    ) => {
      // const { inputNumber, value } = action.payload;
      const box = state.find(
        (el) => el.inputNumber === action.payload.inputNumber
      );
      if (box) {
        box.value = action.payload.value;
      }
    },
    // VERSION SANS TYPESCRIPT
    // updateBoxValue2: (state, action) => {
    //   state.find((el) => el.inputNumber === action.payload.inputNumber).value =
    //     action.payload.value;
    // },
  },
});

export const { updateBoxValue } = boxPropertiesSlice.actions;
export default boxPropertiesSlice.reducer;
