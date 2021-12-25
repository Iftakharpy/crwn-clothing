import { createSlice } from "@reduxjs/toolkit";

const siteDefaultsSlice = createSlice({
  name: "siteDefaults",
  initialState: {
    base: "/crwn-clothing/",
    defaultPageTitle: "Crwn Clothing",
  },
});

const siteDefaultsReducer = siteDefaultsSlice.reducer;

export default siteDefaultsReducer;
