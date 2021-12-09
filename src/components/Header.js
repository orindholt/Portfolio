import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";

const Header = () => {
    return (  
        <header className="Header">
            <Navbar />
            <div className="Header__search">
                <input type="text" name="search-field" id="search-field" placeholder="search..." />
                <button type="submit"><FontAwesomeIcon icon="search"/></button>
            </div>
            <div className="Header__intro">
                <h1 className="Header__intro__heading"><span>Oliver</span> Rindholt</h1>
                <p className="Header__intro__desc">Frontend Dev Portfolio</p>
            </div>
            <div style={{textAlign: "center", marginBottom: "10%"}}>
            <h3>This page is under development!</h3>
            <p>If want to reach me, you can do so at <a href="mailto:oliver.rindholt@gmail.com" style={{textDecoration: "underline"}}>oliver.rindholt@gmail.com</a></p>
            </div>
            {/* <button className="Header__btn"><FontAwesomeIcon icon="arrow-down"/></button> */}
        </header>
    );
}
 
export default Header;