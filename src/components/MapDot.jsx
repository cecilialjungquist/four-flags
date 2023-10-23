import { motion } from "framer-motion";

function MapDot({ name, offsetDistance, id }) {
    const styles = {
        offsetDistance: offsetDistance
    }
    const animate = {
        
    }

    return (
        <div className="map-dot" id={`map-dot-${id}`} style={styles}>
                <h4>{name}</h4>
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25.5" cy="25" r="25" fill="#FC6BFF" />
                </motion.svg>
        </div>
    );
}

export default MapDot;