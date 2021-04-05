import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.profile_head_picture}>
        <img src='https://i.pinimg.com/originals/14/d0/80/14d08067a392a16a330f787d980bebaa.jpg' />
      </div>
      <div>
        avatar + description
        </div>
      <MyPosts />
    </div>
  );
}

export default Profile;