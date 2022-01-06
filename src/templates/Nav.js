import { useState } from "react";
import {IoCogSharp, IoMenuSharp, IoCloseSharp} from "react-icons/io5";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Nav = ({linkList}) => {
	let [menuBool, setMenuBool] = useState(false);

	return (
		<nav className="Nav">
			<ul className="Nav__list">
				<li className="Nav__list__item">
					<button className="Nav__list__button" onClick={()=>{setMenuBool(menuBool ? false : true)}}>
						{menuBool ? <IoCloseSharp /> : <IoMenuSharp />} <span className="Nav__list__button__span">Menu</span>
					</button>
					<Dropdown linkList={linkList} toggleState={menuBool} />
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						<Link to="/"><h2 className="Nav__list__header">Oliver <span>Rindholt</span></h2></Link>
					</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
            <IoCogSharp /> <span className="Nav__list__button__span">Settings</span>
          </button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
