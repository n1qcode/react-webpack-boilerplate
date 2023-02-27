import { createSlice } from "@reduxjs/toolkit";

import { ILocale } from "./locale.slice.typings";

const initialState: ILocale = {
  language: "ru",
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    toggleLanguage: (state, action) => {
      localStorage.setItem("language", action.payload);
      state.language = action.payload;
    },
  },
});

export const { toggleLanguage } = localeSlice.actions;
export default localeSlice.reducer;
