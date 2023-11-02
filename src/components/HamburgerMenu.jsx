import { AnimatePresence, animate, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu({ options }) {
    const [showMenu, setShowMenu] = useState(false);

    const menuVariants = {
        hidden: {
            y: "-100%",
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            }
        }
    };

    const optionVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const renderedOptions = options.map((option, i) => {
        return (
            <motion.div
                key={i}
                variants={optionVariants}
            >
                <NavLink to={option.path} onClick={toggleMenu}>
                    {option.title}
                </NavLink>
            </motion.div>
        );
    })

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    animate([
        [
            ".path-top",
            { d: showMenu ? "M2 31.6985L44 2" : "M2 31.6985L44 31.6985"},
            // Starts at the same time as prev animation = 0
            { at: "<" }
        ],
        [
            ".path-middle",
            { opacity: showMenu ? 0 : 1 },
            { at: "<" },
        ],
        [
            ".path-bottom",
            { d: showMenu ? "M2 2L44 32" : "M2 2L44 2" },
            { at: "<" } 
        ]
    ], [showMenu])

    return (
        <section className="hamburger-menu">
            <button>
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34">
                    <path className="path-top" d="M2 31.6985L44 31.6985" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
                    <motion.path className="path-middle" initial={{ opacity: 1 }} d="M2 17L44 17" stroke="#FFF" strokeWidth="4" strokeLinecap="round" fill="#FFF" />
                    <path className="path-bottom" d="M2 2L44 2" stroke="#FFF" strokeWidth="4" strokeLinecap="round" fill="#FFF" />
                </svg>
            </button>
            <AnimatePresence>
                {showMenu &&
                    <motion.nav
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {renderedOptions}
                    </motion.nav>
                }
            </AnimatePresence>
        </section>
    );
}

export default HamburgerMenu;
