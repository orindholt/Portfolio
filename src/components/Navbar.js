import {IoCogSharp, IoMenuSharp} from "react-icons/io5"

const Navbar = () => {
	return (
		<nav className="Nav">
			<ul className="Nav__list">
				<li className="Nav__list__item">
					<button className="Nav__list__button">
                        <IoCogSharp />
                    </button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						<h2 className="Nav__list__header">Oliver <span>Rindholt</span></h2>
					</button>
				</li>
				<li className="Nav__list__item">
					<button className="Nav__list__button">
						<IoMenuSharp />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
