import { createSlice } from '@reduxjs/toolkit';
import { PROFILE_DATA } from '../../data.js';

const postSlice = createSlice({
    name: "posts",
    initialState: () => {
        const posts = PROFILE_DATA.posts;
        return posts;
    },
    reducers: {
        // ===========================
        // New Post (Add)
        createPost: (state, action) => {
            const category = action.payload.category;

            // Debug
            //console.log("[On Add New Post] Payload.", action.payload);

            const nowDate = new Date();
            const newPost = {
                id: nowDate.valueOf(),
                image: action.payload.post.image,
                description: action.payload.post.description,
                date: nowDate.toISOString(),
                likes: 0,
                comments: 0,
            };

            state[category].push(newPost);
        },
        // ===========================
        // Edit Post (Update)
        updatePost: (state, action) => {
            const oldCategory = action.payload.oldCategory;
            const newCategory = action.payload.newCategory;

            // Debug
            //console.log("[On Modify Post] Old category.", oldCategory);
            //console.log("[On Modify Post] New category.", newCategory);

            if (oldCategory === newCategory) {
                const index = state[newCategory].findIndex((post) => post.id === action.payload.post.id);
                state[newCategory][index] = action.payload.post;
            }
            else {
                const oldIndex = state[oldCategory].findIndex((post) => post.id === action.payload.post.id);
                const newPost = state[oldCategory][oldIndex];

                state[oldCategory].splice(oldIndex, 1);

                // Debug
                //console.log("[On Modify Post] Push post to new category.", newPost);

                state[newCategory].push(newPost);
            }
        },
        // ===========================
        // Remove Post (Delete)
        deletePost: (state, action) => {
            const category = action.payload.category;

            // Debug
            //console.log("[On Delete Post] Payload.", action.payload);

            const index = state[category].findIndex((post) => post.id === action.payload.post.id);
            state[category].splice(index, 1);
        },
        // ===========================
        // Create new Post Comment (Add)
        createPostComment: (state, action) => {
            const category = action.payload.category;

            // Debug
            //console.log("[On Create New Post Comment] Payload.", action.payload);

            const index = state[category].findIndex((post) => post.id === action.payload.post.id);
            state[category][index].commentCount++;
            state[category][index].comments.push(action.payload.post.comment);
        },
        // ===========================
        // Like Post
        likePost: (state, action) => {
            const category = action.payload.category;

            // Debug
            //console.log("[On Like Post] Payload.", action.payload);

            const index = state[category].findIndex((post) => post.id === action.payload.post.id);
            state[category][index].likeCount++;
        }
        // ===========================
    }
});

export const {
    createPost, updatePost, deletePost,
    createPostComment, likePost
} = postSlice.actions;

export default postSlice.reducer;