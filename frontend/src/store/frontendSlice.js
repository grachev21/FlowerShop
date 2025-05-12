import { createSlice } from "@reduxjs/toolkit";

const frontendSlice = createSlice({
    name: "frontend",
    initialState: {
        inputTest: { windowCondition: false },
    },
    reducers: {
        inputTest: (state, action) => {
            state.inputTest = action.payload;
        },
    },
});

export const { inputTest, } = frontendSlice.actions;

export default frontendSlice.reducer;