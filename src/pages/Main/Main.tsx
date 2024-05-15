import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { NAV_LIST } from "../../constants/constants";
import { Navigation } from "../../components/UIkit/Navigation/Navigation";
import { PostsList } from "../../components/UIkit/Posts/PostsList";
import { startFetchPosts } from "../../redux/postSlice";

export const Main = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const { posts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
		console.log(2)
    dispatch(startFetchPosts());
  }, []);

  if (!data) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Navigation navigationList={NAV_LIST} />
      <section className="section">
        <PostsList posts={posts} />
      </section>
    </>
  );
};
