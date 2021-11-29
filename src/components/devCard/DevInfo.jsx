// React Router
import { Link } from "react-router-dom";

// Icons
import { IoLocationSharp, IoLogoTwitter } from "react-icons/io5";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const DevInfo = ({
  name,
  login,
  avatar,
  bio,
  joined,
  repos,
  followers,
  following,
  location,
  twitter,
  website,
  gitHubUrl
}) => {

  const dateConverter = () => {
    if (joined) {
      const dateArr = joined.split("-");
      const day = dateArr[2];
      const month = dateArr[1];
      const year = dateArr[0];
      return `${day.slice(0, 2)} ${month} ${year}`;
    }
  };

  return (
    <>
      <section className="user-info-container">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
        <div className="info-container">
          <div className="info-sub-container">
            {name ? <h1>{name}</h1> : <h1>Not available</h1>}
            <p>Joined {dateConverter()}</p>
          </div>
          <div className="info-sub-container-2">
            <h3 className="login">@{login}</h3>
            {bio ? <p>{bio}</p> : <p>Not available</p>}
          </div>
        </div>
      </section>
      <section className="repos-info-container">
        <div className="repos">
          <div className="repos-sub-container">
            <Link to={`/${login}/repos`} className="link">
              <p>Repos</p>
              <h3>{repos}</h3>
            </Link>            
          </div>
          <div className="repos-sub-container">
            <Link to={`/${login}/followers`} className="link">
              <p>Followers</p>
              <h3>{followers}</h3>
            </Link>            
          </div>
          <div className="repos-sub-container">
            <p>Following</p>
            <h3>{following}</h3>
          </div>
        </div>
      </section>
      <section className="general-info-container">
        <div className="general-info">
          <p className="detail">
            <IoLocationSharp className="icon" />
            {location ? location : <p>Not available</p>}
          </p>
          <p className="detail">
            <IoLogoTwitter className="icon" />
            {twitter ? twitter : <p>Not available</p>}
          </p>
          <p className="detail">
            <AiOutlineLink className="icon" />
            {website ? (
              <a href={website} target="blank">
                <p>Open Website</p>
              </a>
            ) : (
              <p>Not available</p>
            )}
          </p>
          <p className="detail">
            <AiFillGithub className="icon" />
            <a href={gitHubUrl} target="blank">
              Open GitHub Profile
            </a>
          </p>
        </div>
      </section>
    </>
  )
};

export default DevInfo