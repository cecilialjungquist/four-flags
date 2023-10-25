import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Overlay({ className, children }) {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    function handleClick(event) {
        if (event.target.className.includes('overlay')) {
            setIsVisible(false);
        }
    }

    return (
        <AnimatePresence onExitComplete={() => navigate(-1)}>
            {
                isVisible &&
                <motion.section
                    className="overlay"
                    onClick={handleClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: .3 } }}
                    exit={{ opacity: 0, transition: { duration: .2 } }}
                >
                    <article className={className}>
                        {children}
                    </article>
                </motion.section>
            }
        </AnimatePresence>
    );
}

export default Overlay;