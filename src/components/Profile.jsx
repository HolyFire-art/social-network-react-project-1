import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://i.pinimg.com/originals/14/d0/80/14d08067a392a16a330f787d980bebaa.jpg' />
      </div>
      <div>
        avatar + description
        </div>
      <div>
        My posts
          <div>
          New post
          </div>
        <div className={s.posts}>
          <div className={s.item}>
            post 1
            </div>
          <div className={s.item}>
            post 2
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;