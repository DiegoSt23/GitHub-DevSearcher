import { useEffect, useState } from "react";

// React Router
import { useParams, Link } from "react-router-dom";

// Functions
import { getRepos } from "../../../services/apiRequest";

// Components
import Repo from "./Repo";

// Icons
import { IoReturnUpBackOutline } from "react-icons/io5";

const Repos = () => {
  const { user } = useParams();
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const func = async () => {
      try {
        const res = await getRepos(user);
        setRepos(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    func();
  }, [user]);

  const reposList = repos?.map((item, index) => (
    <Repo
      key={index}
      name={item.name}
      language={item.language}
      lastUpdate={item.pushed_at}
      url={item.html_url}
    />
  ));

  return (
    <div className="repos-main-container">
      <section className="nav-container">
        <Link to="/">
          <IoReturnUpBackOutline/>
        </Link>        
        <h2 className="title">@{user}</h2>
      </section>
      <section className="repos-container">
        {repos && reposList}
      </section>
    </div>
  );
};

export default Repos;
