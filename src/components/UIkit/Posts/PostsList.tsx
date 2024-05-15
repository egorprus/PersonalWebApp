import { Post } from "./Post";

interface Props {
	posts: any
}
export const PostsList = ({ posts }: Props) => {
  return (
    <>
      <ul className="posts">
        {posts.items.map((item: any) => (
          <li className="posts__item" key={item._id}>
            <Post post={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
