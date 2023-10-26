import { motion } from "framer-motion";

function Button({ action, children }) {

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
    };

    return (
        <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={action}
        >
            {children}
        </motion.button>
    );
}

export default Button;