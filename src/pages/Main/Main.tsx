import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NAV_LIST } from "../../constants/constants";
import { Navigation } from "../../components/UIkit/Navigation/Navigation";
import { PostsList } from "../../components/UIkit/Posts/PostsList";
// import { startFetchPosts } from "../../redux/postSlice";
import { Spinner } from "../../components/UIkit/Spinner/Spinner";

export const Main = () => {
  // const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const { posts } = useSelector((state: RootState) => state.post);

  // useEffect(() => {
  //   dispatch(startFetchPosts());
  // }, []);

  if (!data) {
    return <Spinner />;
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
