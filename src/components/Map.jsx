import { motion } from "framer-motion";

function Map() {

    const svgVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1, 
            transition: { 
                duration: .4
            }
        }
    }

    const pathVariants = {
        hidden: { 
            opacity: 0, 
            pathLength: 0 
        },
        visible: { 
            opacity: 1, 
            pathLength: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="637" height="656" viewBox="0 0 637 656" fill="none">
            <motion.path variants={pathVariants} d="M1.5 1.5V429H363H635V654.5" stroke="#FC6BFF" stroke-width="3" stroke-linecap="round" />
        </motion.svg>
    );
}

export default Map;