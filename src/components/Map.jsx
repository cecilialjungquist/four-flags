import { motion } from "framer-motion";
import MapDot from "./MapDot";
import { render } from "react-dom";

function Map() {

    const mapSpots = [
        {
            name: 'Entrance',
            offsetDistance: '0%',
            isHorisontal: true
        },
        {
            name: 'Tickets',
            offsetDistance: '18%',
            isHorisontal: false
        },
        {
            name: 'Toilets',
            offsetDistance: '22%',
            isHorisontal: false
        },
        {
            name: 'Bunny Jump',
            offsetDistance: '33%',
            isHorisontal: true
        },
        {
            name: "Cherry's Cars",
            offsetDistance: '37%',
            isHorisontal: true
        },
        {
            name: "Grandma's",
            offsetDistance: '42%',
            isHorisontal: false
        },
        {
            name: "The Tea Cup",
            offsetDistance: '46%',
            isHorisontal: false
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
// function Map() {

//     const svgVariants = {
//         hidden: { 
//             opacity: 0 
//         },
//         visible: { 
//             opacity: 1, 
//             transition: { 
//                 duration: .4
//             }
//         }
//     }

//     const pathVariants = {
//         hidden: { 
//             opacity: 0, 
//             pathLength: 0 
//         },
//         visible: { 
//             opacity: 1, 
//             pathLength: 1,
//             transition: {
//                 duration: 2
//             }
//         }
//     }

//     return (
//         <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="637" height="1192" viewBox="0 0 637 1192" fill="none">
//             <motion.path variants={pathVariants} d="M1.5 1.5V429H363H635V763H217V1081.5H343.5V944H543.5V1081.5H635V1190.5H1.5" stroke="#FC6BFF" stroke-width="3" stroke-linecap="round" />
//         </motion.svg>
//     );
// }

export default Map;