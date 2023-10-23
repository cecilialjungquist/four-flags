import Navigation from "./Navigation";
import logo from '../assets/logo.svg';
import { NavLink } from "react-router-dom";

function TopHeader() {
    return (
        <header className="top-header">
            <NavLink className="top-header__logo">
                Four Flags
                <img src={logo}/>
            </NavLink>
            <Navigation />
        </header>
    );
}

export default TopHeader;