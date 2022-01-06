import { Link } from "react-router-dom";

const Dropdown = ({linkList, toggleState}) => {
  console.log(toggleState);
  return (
    <ul className="Nav__dropdown" style={{transform: `translateX(${toggleState ? "0" : "-100%"})`}}>
			{linkList.map((link, index) => 
      <li className="Nav__dropdown__item" key={index}>
        <Link to={link === "home" ? "/" : link}>{link}</Link>
      </li>)}
		</ul>
  );
}
 
export default Dropdown;