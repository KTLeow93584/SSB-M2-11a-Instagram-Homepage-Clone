
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postSlice.js';

export default configureStore({
    reducer: {
        posts: postsReducer
    }
});