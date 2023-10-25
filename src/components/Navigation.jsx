import { NavLink } from "react-router-dom";

function Navigation({ options }) {

    const renderedOptions = options.map(({ title, path}, i) => {
        return (
            <NavLink to={path} key={i}>{title}</NavLink>
        );
    })

    return ( 
        <nav className="navigation">
            {renderedOptions}
        </nav>
    );
}

export default Navigation;