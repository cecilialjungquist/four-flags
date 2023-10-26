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
            {/* <svg className="map-svg" xmlns="http://www.w3.org/2000/svg" width="723" height="1260" viewBox="0 0 723 1260" fill="none">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M541.918 171.132V2H2V171.132H412.29L541.918 171.132ZM541.918 171.132L721 171.132V647.841H246.585V1102.43H390.158V906.177H617.151V1102.43H721V1258H2V980.711V476.742H541.918V171.132Z" stroke="#FC6BFF" stroke-width="3" stroke-linecap="round" />
            </svg> */}
            {/* <svg className="map-svg" xmlns="http://www.w3.org/2000/svg" width="637" height="1192" viewBox="0 0 637 1192" fill="none">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M1.5 1.5V429H363H635V763H217V1081.5H343.5V944H543.5V1081.5H635V1190.5H1.5" stroke="#2e7a82" strokeWidth="3" strokeLinecap="round" />
            </svg> */}
            {renderedDots}
        </section>
    );
}

export default Map;