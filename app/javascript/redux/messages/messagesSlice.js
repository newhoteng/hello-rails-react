import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost/api/messages';

const initialState = {
  message: [],
  isLoading: false,
  error: undefined,
};


const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // getbookItems
    // builder.addCase(getBookItems.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getBookItems.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.books = action.payload;
    // });
    // builder.addCase(getBookItems.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;