import { useState } from "react";

// React Router
import { useNavigate } from "react-router";

// Icons
import { BsSearch } from "react-icons/bs";

// Framer Motion
import{ motion } from "framer-motion";

const Search = ({setSearch}) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  
  const handleSetQuery = () => {
    if (value) {
      setSearch(value)
      navigate("/")
    }
  };

  return (
    <motion.div 
      className="search-container"
      initial={{x: 50, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "just", duration: 1}}
    >  
      <div className="search-icon-container">
        <BsSearch/>
      </div>          
      <input 
        type="text" 
        value={value}
        placeholder="Search GitHub username"
        onChange={e => setValue(e.target.value)}
      />      
      <button onClick={handleSetQuery}>Search</button>
    </motion.div>
  )
};

export default Search