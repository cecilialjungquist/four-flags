import { motion } from "framer-motion";

function Button({ action, children }) {

    const buttonVariants = {
        normal: { 
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            scale: 1 
        },
        hover: { 
            boxShadow: 'inset 0px 3px 5px rgba(0, 0, 0, 0.5)',
            scale: 1,
        },
        tap: {
            boxShadow: 'inset 0px 3px 5px rgba(0, 0, 0, 0.5)',
            scale: .9
        }
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="normal"
            whileTap="tap"
            whileHover="hover"
            onClick={action}
            className="button"
        >
            {children}
        </motion.button>
    );
}

export default Button;