import useStandardAnimation from "../hooks/useStandardAnimation";
import { motion } from "framer-motion";

function AttractionHeader({ name, desc }) {
    const { initial, animate } = useStandardAnimation();

    return (
        <motion.header
            initial={initial}
            animate={animate}
        >
            <h2>{name}</h2>
            <p>{desc}</p>
        </motion.header>
    );
}

export default AttractionHeader;