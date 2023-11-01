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
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M458.565 171.132V2H2V171.132H348.949L458.565 171.132ZM458.565 171.132L610 171.132V647.841H208.826V1102.43H330.234V906.177H522.183V1102.43H610V1258H2V980.711V476.742H458.565V171.132Z" stroke="#2e7a82" strokeWidth="4" strokeLinecap="round" />
            </svg>
            {renderedDots}
        </section>
    );
}

export default Map;