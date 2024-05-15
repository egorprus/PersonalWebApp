// import { UserPreview } from "../User/UserPreview";

interface Props {
	post: any
}
export const Post = ({ post }: Props) => {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <h2 className="post__item-title">{post.title}</h2>
        </div>
        <p className="post__item-text">{post.text}</p>
        <p className="post__item-tags">
          <a href="">#{post.tags}</a>
        </p>
        {/* <UserPreview /> */}
      </div>
    </>
  );
};
