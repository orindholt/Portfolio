import SearchField from "../components/SearchField";
import { Link } from "react-router-dom";

const Home = ({linkList}) => {
  return (
    <div className="Home">
      <section className="Home__intro">
          <h1 className="Home__intro__heading"><span>Oliver</span> Rindholt</h1>
          <p className="Home__intro__desc">Frontend Dev Portfolio</p>
      </section>
      <SearchField />
      <div className="Home__buttons">
          {linkList.map((link, index) => link !== "home" &&
          <Link className="Home__button" to={link} key={index}>{link}</Link>)}
      </div>
    </div>
  );
}
 
export default Home;