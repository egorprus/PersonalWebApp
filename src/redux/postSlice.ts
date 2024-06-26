import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../models/enums";

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const { data } = await axios.get(`/posts`);
//   return data;
// });
// '?tyapk=awesome'

// export const createPost = createAsyncThunk(
//   "posts/createPost",
//   async (params) => {
//     const { data } = await axios.post("/posts", params);
//     return data;
//   }
// );

interface DefaultObject {
  items: any;
  status: string;
}
interface InitState {
  posts: DefaultObject;
  tags: DefaultObject;
}
const initialState: InitState = {
  posts: {
    items: [],
    status: FetchStatus.init,
  },
  tags: {
    items: [],
    status: FetchStatus.init,
  },
};

const postsStore = createSlice({
  name: "posts",
  initialState,
  reducers: {
		startFetchPosts: (state) => {
			state.posts.status = FetchStatus.loading;
		},
		succesFetchPosts: (state, action) => {
			state.posts.items = action.payload;
			state.posts.status = FetchStatus.success;
		}
	}
});

export const postReducer = postsStore.reducer;

export const { startFetchPosts, succesFetchPosts } = postsStore.actions;