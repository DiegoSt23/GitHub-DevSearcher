import { useState, useEffect } from "react";

// React Router
import { useParams, Link } from "react-router-dom";

// Components
import Follower from "./Follower";

// Functions
import { getFollowers } from "../../../services/apiRequest";

// Icons
import { IoReturnUpBackOutline } from "react-icons/io5";

const Followers = ({setSearch}) => {
  const { user } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await getFollowers(user);
        console.log(res.data);
        setFollowers(res.data);
      } catch (error) {
        console.log(error.message)
      }
    };
    func();
  }, [user]);

  const followersList = followers?.map((item, index) => (
    <Follower
      key={index}
      name={item.login}
      avatar={item.avatar_url}
      setSearch={setSearch}
    />
  ));

  return (
    <div className="followers-main-container">
      <section className="nav-container">
        <Link to="/">
          <IoReturnUpBackOutline/>
        </Link>        
        <h2 className="user">@{user}</h2>
      </section>
      <section className="followers-container">
        {followers && followersList}
      </section>
    </div>
  )
};

export default Followers