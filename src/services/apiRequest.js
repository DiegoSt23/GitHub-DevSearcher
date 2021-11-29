import axios from "axios";

const searchUser = async (value) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.github.com/users/${value}`
  });
  return promise
};

const getRepos = async (user) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.github.com/users/${user}/repos`
  });
  return promise
};

const getFollowers = async (user) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.github.com/users/${user}/followers`
  });
  return promise
};

export { searchUser, getRepos, getFollowers }

