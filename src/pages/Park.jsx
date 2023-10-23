import { motion } from "framer-motion";
import Map from "../components/Map";

function Park() {

    const initial = {
        x: -30,
        opacity: 0
    }
    const animate = {
        x: 0,
        opacity: 1,
        transition: {
            duration: .8
        }
    }

    return (
        <section className="park">
            <motion.section animate={animate} initial={initial}>
                <h2>Welcome to Four Flags!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum sollicitudin sapien sed fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et quam sit amet tellus dictum porta non facilisis nibh. Donec pharetra vestibulum magna, sit amet sagittis arcu imperdiet id. Sed ac interdum quam. Duis a libero ex. Nam enim sem, luctus id nisl congue, vulputate mollis justo.</p>
                <h3>Attractions</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et quam sit amet tellus dictum porta non facilisis nibh. Donec pharetra vestibulum magna, sit amet sagittis arcu imperdiet id. Sed ac interdum quam. Duis a libero ex. Nam enim sem, luctus id nisl congue, vulputate mollis justo.</p>
            </motion.section>

            <Map />
        </section>
    );
}

export default Park;