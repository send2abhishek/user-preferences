import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "reduxSlices/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
