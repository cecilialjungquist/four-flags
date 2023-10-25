import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu({ options }) {
    const [showMenu, setShowMenu] = useState(false);

    const renderedOptions = options.map((option, i) => <NavLink to={option.path} onClick={toggleMenu}>{option.title}</NavLink>)

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <section className="hamburger-menu">
            <button>
                <motion.svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 48 30" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2C0.5 0.89543 1.39543 0 2.5 0H46C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H2.5C1.39543 4 0.5 3.10457 0.5 2ZM0.5 15C0.5 13.8954 1.39543 13 2.5 13H46C47.1046 13 48 13.8954 48 15C48 16.1046 47.1046 17 46 17H2.5C1.39543 17 0.5 16.1046 0.5 15ZM2.5 26C1.39543 26 0.5 26.8954 0.5 28C0.5 29.1046 1.39543 30 2.5 30H46C47.1046 30 48 29.1046 48 28C48 26.8954 47.1046 26 46 26H2.5Z" fill="white" />
                </motion.svg>
            </button>
            { showMenu &&
                <nav>
                    <button onClick={toggleMenu}>Close menu</button>
                    {renderedOptions}
                </nav>
            }
        </section>
    );
}

export default HamburgerMenu;