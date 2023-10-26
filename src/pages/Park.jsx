import { motion } from "framer-motion";
import Map from "../components/Map";
import useStandardAnimation from "../hooks/useStandardAnimation";
import { Outlet } from "react-router-dom";

function Park() {
    const { initial, animate } = useStandardAnimation();

    return (
        <section className="park">
            <motion.section animate={animate} initial={initial}>
                <h2>Welcome to Four Flags!</h2>
                <p>Unleash your inner child and let your wildest dreams and adventures come to life! Get ready to embark on a journey filled with heart-pounding excitement, laughter, and unforgettable memories. Our enchanting amusement park is more than just a place; it's a world of magic and wonder waiting for you to explore. Let your imagination run wild and let the fun begin!</p>                
                <h3>Attractions</h3>
                <p>Experience the thrills! At Four Flags, adventure knows no bounds. Our attractions are designed to make your heart race and your spirits soar. From exhilarating rides to enchanting experiences, there's something for everyone. Step into a world where the ordinary transforms into the extraordinary. Get ready for the ride of your life!</p>    

                <h3>Facilities</h3>
                <p>Your comfort, our priority! At Four Flags, we prioritize your comfort and convenience. Our top-notch facilities are here to ensure your visit is nothing short of perfect. From gender-neutral toilets that are clean and accessible to other amenities, we've got you covered. You can relax and rejuvenate, knowing that everything you need is right at your fingertips.</p>

                <h3>Don't forget!</h3>
                <p>At Four Flags, we wholeheartedly believe in the magic of equality and sustainability. Everyone is welcome here, and we celebrate the diverse tapestry of our visitors. You'll find recycling bins throughout the park, ready to do their part in preserving the beauty of our world. Together, we can make a difference and protect the environment. Join us in keeping our magical park and planet green, beautiful, and inclusive for all.</p>
            </motion.section>
            <Map />
            <section className="park__attraction">
                {/* Outlet from Map component */}
                <Outlet />
            </section>
        </section>
    );
}

export default Park;