import { configureStore } from "@reduxjs/toolkit";
import youtubeDatareducer from "../feature/youtubeApi/youtubeApiSlice";
export const store = configureStore({
  reducer: {
    youtubeApp: youtubeDatareducer,
  },
});
