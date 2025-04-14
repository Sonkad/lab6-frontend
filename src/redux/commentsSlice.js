import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
