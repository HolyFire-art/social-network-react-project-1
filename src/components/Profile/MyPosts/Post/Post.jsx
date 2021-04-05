import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://video-editor.su/images/kak-snimalsya-film-avatar_01.jpg' />
          post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;