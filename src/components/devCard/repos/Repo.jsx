const Repo = ({ name, language, lastUpdate, url }) => {
  const dateConverter = () => {
    if (lastUpdate) {
      const dateArr = lastUpdate.split("-");
      const day = dateArr[2];
      const month = dateArr[1];
      const year = dateArr[0];
      return `${day.slice(0, 2)}/${month}/${year}`;
    }
  };

  return (
    <div className="repo-container">
      <section className="repo-sub-container">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="language">
          <p>{language}</p>
        </div>
        <div className="date">
          <p>{dateConverter()}</p>
        </div>
      </section>
      <section className="repo-sub-container-2">
        <a href={url} target="blank">
          <h3>Open</h3>
        </a>
      </section>
    </div>
  );
};

export default Repo;
