import "./sass/main.css";
import { useState, useEffect } from "react";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Search from "./components/Search";
import DevInfo from "./components/devCard/DevInfo";
import Repos from "./components/devCard/repos/Repos";
import Followers from "./components/devCard/followers/Followers";

// Functions
import { searchUser } from "./services/apiRequest";

// Framer Motion
import { motion } from "framer-motion";

function App() {
  const [search, setSearch] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [joined, setJoined] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [location, setLocation] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");

  useEffect(() => {
    if (search) {
      const func = async () => {
        try {
          const res = await searchUser(search);
          setSearch("");
          setRequestStatus(false)
          setUserName(res.data.name);
          setLogin(res.data.login);
          setUserAvatar(res.data.avatar_url);
          setBio(res.data.bio);
          setJoined(res.data.created_at);
          setRepos(res.data.public_repos);
          setFollowers(res.data.followers);
          setFollowing(res.data.following);
          setLocation(res.data.location);
          setTwitter(res.data.twitter_username);
          setWebsite(res.data.blog);
          setGitHubUrl(res.data.html_url);
        } catch (error) {
          setRequestStatus(true)
          console.log(error.message);
        }
      };
      func();
    }
  }, [search]);

  return (
    <div className="main-container">
      <div className="title-container">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just", duration: 1 }}
        >
          DevSearcher
        </motion.h1>
      </div>
      <Router>
        <Search setSearch={setSearch} />
        {requestStatus && (
          <p className="error-message">Please enter a valid user</p>
        )}
        {login && (
          <motion.div
            className="dev-card"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "just", duration: 1 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <DevInfo
                    name={userName}
                    login={login}
                    avatar={userAvatar}
                    bio={bio}
                    joined={joined}
                    repos={repos}
                    followers={followers}
                    following={following}
                    location={location}
                    twitter={twitter}
                    website={website}
                    gitHubUrl={gitHubUrl}
                  />
                }
              />
              <Route path="/:user/repos" element={<Repos />} />
              <Route path="/:user/followers" element={<Followers setSearch={setSearch}/>} />
            </Routes>
          </motion.div>
        )}
      </Router>
    </div>
  );
};

export default App;
