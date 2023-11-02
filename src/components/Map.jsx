import { motion } from "framer-motion";
import MapDot from "./MapDot";
import useFetchParkInfo from "../hooks/useFetchParkInfo";

function Map() {
    const mapDots = useFetchParkInfo();

    const renderedDots = mapDots.map(item => <MapDot
        name={item.name}
        offsetDistance={item.offsetDistance}
        type={item.type}
        id={item.id}
        key={item.id} />
    )

    const pathVariants = {
        hidden: {
            pathLength: 0
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 3
            }
        }
    }

    return (
        <section className="map">
            <svg className="map-svg" xmlns="http://www.w3.org/2000/svg" width="612" height="1260" viewBox="0 0 612 1260" fill="none">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M2 74V168H612V646H208.5V1099.5H328.5V904H524V1099.5H612V1255H3V475H458.5V2H2V74Z" stroke="#2e7a82" strokeWidth="4" strokeLinecap="round" />
            </svg>
            {renderedDots}
        </section>
    );
}

export default Map;