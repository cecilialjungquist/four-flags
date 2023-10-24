import { NavLink } from "react-router-dom";

function Navigation() {
    const options = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'The Park',
            path: 'the-park'
        },
        {
            title: 'Accomodation',
            path: 'accomodation'
        }
    ];

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