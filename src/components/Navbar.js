import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
	return (
		<nav className="Nav">
			<ul className="Nav__list">
				<li className="Nav__list__item">
					<button className="Nav__list__button">about</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">contact</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						<h2 className="Nav__list__header">Oliver <span>Rindholt</span></h2>
					</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						projects
						<FontAwesomeIcon icon="chevron-left" />
					</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						<FontAwesomeIcon icon="cog" />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
