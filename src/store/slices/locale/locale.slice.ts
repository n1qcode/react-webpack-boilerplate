import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocalStorageEnum } from "../../../enums/localStorage.enums";
import { LanguageEnum } from "../../../utils/i18n/i18n.enums";

import { ILocale } from "./locale.typings";

const initialState: ILocale = {
  language: LanguageEnum.RU,
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    toggleLanguage: (state, action: PayloadAction<LanguageEnum>) => {
      console.log("QWE ------- action.payload ---- ");
      localStorage.setItem(LocalStorageEnum.LANGUAGE, action.payload);
      state.language = action.payload;
    },
  },
});

export const { toggleLanguage } = localeSlice.actions;
export default localeSlice.reducer;
