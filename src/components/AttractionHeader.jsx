import useStandardAnimation from "../hooks/useStandardAnimation";
import { motion } from "framer-motion";

function AttractionHeader({ name, desc }) {
    const { initial, animate } = useStandardAnimation();

    return (
        <header>
            <motion.h2
                initial={initial}
                animate={animate}
            >
                {name}
            </motion.h2>
            <p>{desc}</p>
        </header>
    );
}

export default AttractionHeader;