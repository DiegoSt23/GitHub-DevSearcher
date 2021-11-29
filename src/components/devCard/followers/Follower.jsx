// React Router
import { useNavigate } from "react-router";

const Follower = ({name, avatar, setSearch}) => {
  const navigate = useNavigate();

  const handleSetSearch = () => {
    setSearch(name)
    navigate("/")
  };

  return (
    <div className="follower-card" onClick={handleSetSearch}>
      <img src={avatar} alt="avatar" className="follower-avatar"/>
      <h3>{name}</h3>
    </div>
  )
};

export default Follower