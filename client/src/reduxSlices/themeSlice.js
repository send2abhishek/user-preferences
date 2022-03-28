import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
  name: "theme",
  initialState: {
    themeList: [
      { id: 1, themeName: "light" },
      { id: 2, themeName: "dark" },
    ],
    selectedTheme: null,
  },
  reducers: {
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
    setThemeList: (state, action) => {
      state.themeList = [...action.payload];
    },
  },
});

export const { setTheme, setThemeList } = theme.actions;

export const updateSelectedTheme = (themeData) => (dispatch) => {
  dispatch(setTheme(themeData));
};

export default theme.reducer;
