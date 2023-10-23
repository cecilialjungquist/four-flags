import { NavLink } from "react-router-dom";

function Navigation() {
    return ( 
        <nav className="navigation">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'park'}>The Park</NavLink>
            <NavLink to={'accomodation'}>Accomodation</NavLink>
        </nav>
    );
}

export default Navigation;