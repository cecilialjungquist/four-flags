import { motion } from "framer-motion";
import MapDot from "./MapDot";

function Map() {

    const mapSpots = [
        {
            name: 'Entrance',
            offsetDistance: '0%'
        },
        {
            name: 'Tickets',
            offsetDistance: '18%'
        },
        {
            name: 'Toilets',
            offsetDistance: '22%'
        },
        {
            name: 'Bunny Jump',
            offsetDistance: '33%'
        },
        {
            name: "Cherry's Cars",
            offsetDistance: '36%'
        },
        {
            name: "Grandma's",
            offsetDistance: '42%'
        },
        {
            name: "The Tea Cup",
            offsetDistance: '46%'
        }
    ];

    const renderedSpots = mapSpots.map((spot, i) => <MapDot 
        name={spot.name} 
        offsetDistance={spot.offsetDistance} 
        id={i} 
        isHorisontal={spot.isHorisontal} 
        key={i} />
    )

    const svgVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: .2,
                duration: .2
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
                duration: 3
            }
        }
    }

    return (
        <section className="map">
            <motion.svg className="map-svg" variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="637" height="1192" viewBox="0 0 637 1192" fill="none">
                <motion.path variants={pathVariants} d="M1.5 1.5V429H363H635V763H217V1081.5H343.5V944H543.5V1081.5H635V1190.5H1.5" stroke="#FC6BFF" strokeWidth="3" strokeLinecap="round" />
            </motion.svg>
            {renderedSpots}
        </section>
    );
}

export default Map;