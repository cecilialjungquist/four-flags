import { motion } from "framer-motion";
import MapDot from "./MapDot";
import useFetchParkInfo from "../hooks/useFetchParkInfo";

function Map() {
    const mapDots = useFetchParkInfo();

    const renderedDots = mapDots.map(dot => <MapDot 
        name={dot.name}
        offsetDistance={dot.offsetDistance}
        isAttraction={dot.isAttraction}
        id={dot.id} 
        key={dot.id} />
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
            <svg className="map-svg" xmlns="http://www.w3.org/2000/svg" width="637" height="1192" viewBox="0 0 637 1192" fill="none">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M1.5 1.5V429H363H635V763H217V1081.5H343.5V944H543.5V1081.5H635V1190.5H1.5" stroke="#2e7a82" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {renderedDots}
        </section>
    );
}

export default Map;