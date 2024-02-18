import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileSection}>
      <div className={css.imageSection}>
        <img className={css.profileImg} src={image} alt={name} />
        <p className={css.title}>{name}</p>
        <p className={css.text}>{"@" + tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsFollowers}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsFollowers}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsFollowers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
