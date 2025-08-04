import { createSlice } from '@reduxjs/toolkit';

// Function to get saved posts from localStorage
const getSavedPostsFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedPosts = localStorage.getItem('savedPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  }
  return [];
};

const initialState = {
  savedPosts: getSavedPostsFromLocalStorage(), // Initialize state from localStorage
};

const savesSlice = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    toggleSavePost: (state, action) => {
      const post = action.payload;
      const isSaved = state.savedPosts.some(savedPost => savedPost.id === post.id);

      if (isSaved) {
        state.savedPosts = state.savedPosts.filter(savedPost => savedPost.id !== post.id);
      } else {
        state.savedPosts.push(post);
      }
    },
  },
});

export const { toggleSavePost } = savesSlice.actions;

export default savesSlice.reducer;