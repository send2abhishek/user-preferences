import { createSlice } from "@reduxjs/toolkit";
import axios from "config/axios";

export const theme = createSlice({
  name: "theme",
  initialState: {
    themeList: [
      { id: 1, themeName: "light" },
      { id: 2, themeName: "dark" },
    ],
    selectedTheme: null,
    dataFetchingStatus: false,
    errorMessage: undefined,
    isLoggedIn: false,
    isRegister: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
    setThemeList: (state, action) => {
      state.themeList = [...action.payload];
    },
    setDatFetchingStatus: (state, action) => {
      state.dataFetchingStatus = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsRegister: (state, action) => {
      state.isRegister = action.payload;
    },
  },
});

export const {
  setTheme,
  setThemeList,
  setDatFetchingStatus,
  setErrorMessage,
  setIsLoggedIn,
  setIsRegister,
} = theme.actions;

export const updateSelectedTheme = (themeData) => async (dispatch) => {
  dispatch(setDatFetchingStatus(false));
  dispatch(setErrorMessage(undefined));

  try {
    dispatch(setDatFetchingStatus(true));

    await axios.put(`/preference/theme/`, themeData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    dispatch(setTheme(themeData.preferenceValue));
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(undefined));
  } catch (error) {
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(error.response.data.message));
  }
};

export const autoLogin = () => (dispatch) => {
  let isAuthenticated = !!sessionStorage.getItem("token");

  if (isAuthenticated) {
    dispatch(setIsLoggedIn(true));
  }
};

export const loginRequest = (formData) => async (dispatch) => {
  dispatch(setDatFetchingStatus(false));
  dispatch(setErrorMessage(undefined));
  dispatch(setIsLoggedIn(false));

  try {
    dispatch(setDatFetchingStatus(true));
    const response = await axios.post("/login", formData);
    dispatch(setDatFetchingStatus(false));
    window.sessionStorage.setItem("token", response.data.token);
    window.sessionStorage.setItem("email", response.data.email);
    window.sessionStorage.setItem("name", response.data.name);
    window.sessionStorage.setItem("userId", response.data.userId);
    dispatch(setErrorMessage(undefined));
    dispatch(setIsLoggedIn(true));
  } catch (error) {
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(error.response.data.message));
  }
};

export const registerRequest = (formData) => async (dispatch) => {
  dispatch(setDatFetchingStatus(false));
  dispatch(setErrorMessage(undefined));
  dispatch(setIsRegister(false));
  dispatch(setIsRegister(false));

  try {
    dispatch(setDatFetchingStatus(true));
    await axios.post("/register", formData);
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(undefined));
    dispatch(setIsRegister(true));
  } catch (error) {
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(error.response.data.message));
  }
};

export const fetchUserCurrentTheme = (userId) => async (dispatch) => {
  dispatch(setDatFetchingStatus(false));
  dispatch(setErrorMessage(undefined));
  dispatch(setTheme(null));

  try {
    dispatch(setDatFetchingStatus(true));

    const response = await axios.get(`/preference/theme/${userId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    dispatch(setTheme(response.data.preferenceValue));
    dispatch(setDatFetchingStatus(false));
    dispatch(setErrorMessage(undefined));
  } catch (error) {
    dispatch(setDatFetchingStatus(false));
    dispatch(setTheme(null));
    dispatch(setErrorMessage(error.response.data.message));
  }
};

export const logoutRequest = () => async (dispatch) => {
  dispatch(setErrorMessage(undefined));
  dispatch(setTheme(null));
  window.sessionStorage.removeItem("token");
  window.sessionStorage.removeItem("email");
  window.sessionStorage.removeItem("name");
  window.sessionStorage.removeItem("userId");
  dispatch(setIsLoggedIn(false));
};

export default theme.reducer;
