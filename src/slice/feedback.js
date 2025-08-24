// src/slice/feedbackSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [], // store all feedbacks
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.feedbacks.push({
        id: Date.now(), // unique id
        ...action.payload,
      });
    },
    clearFeedbacks: (state) => {
      state.feedbacks = [];
    },
  },
});

export const { addFeedback, clearFeedbacks } = feedbackSlice.actions;
export default feedbackSlice.reducer;
