import { motion } from "framer-motion";
import MapDot from "./MapDot";

function Map() {

    const mapDots = [
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

    const renderedDots = mapDots.map(({ name, offsetDistance}, i) => <MapDot 
        name={name}
        offsetDistance={offsetDistance}
        id={i} 
        key={i} />
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
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M1.5 1.5V429H363H635V763H217V1081.5H343.5V944H543.5V1081.5H635V1190.5H1.5" stroke="#FC6BFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {renderedDots}
        </section>
    );
}

export default Map;