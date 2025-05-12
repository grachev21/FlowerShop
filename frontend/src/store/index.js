import { configureStore } from "@reduxjs/toolkit";
import frontendReducer from "@/store/frontendSlice";

export default configureStore({
    reducer: {
        worsa: frontendReducer,
    },
});