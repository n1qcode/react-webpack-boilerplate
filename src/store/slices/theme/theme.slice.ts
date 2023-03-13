import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocalStorageEnum } from "../../../enums/localStorage.enums";

import { ThemeEnum } from "./theme.enums";
import { ITheme } from "./theme.typings";

const initialState: ITheme = {
  mode: ThemeEnum.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeEnum>) => {
      localStorage.setItem(LocalStorageEnum.THEME, action.payload);
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
