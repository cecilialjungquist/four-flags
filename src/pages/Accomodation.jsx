import { motion } from "framer-motion";
import useStandardAnimation from "../hooks/useStandardAnimation";
import Button from "../components/Button";
import useFetchParkInfo from "../hooks/useFetchParkInfo";
import Card from "../components/Card";

function Accomodation() {
    const { animate, initial } = useStandardAnimation();
    const accomodation = useFetchParkInfo('accomodation');

    const cards = accomodation.map((item, i) => {
        return (
            <Card
                name={item.name}
                svg={item.svg}
                summary={item.summary}
                className="card--small"
                key={i}
            />
        );
    })

    return (
        <section className="accomodation">
            <section className="accomodation__section">
                <motion.section animate={animate} initial={initial}>
                    <h2>Accomodation</h2>
                    <p>Experience unparalleled comfort and convenience during your stay at Four Flags Amusement Park. Our accommodations are designed with your utmost satisfaction in mind, ensuring a memorable and relaxing visit. Whether you choose a cozy room or a luxurious suite, you'll enjoy the perfect balance of modern amenities and enchanting surroundings.</p>
                    <p>Wake up to the magic of Four Flags right at your doorstep, and take in the breathtaking views of the park from your window. Enjoy a leisurely morning before embarking on a day filled with thrilling rides and captivating attractions. When the excitement of the park winds down, retreat to your comfortable haven to recharge for more adventures.</p>
                    <p>At Four Flags, we're committed to providing you with a stay that's as unforgettable as the park itself. Book your accommodations with us, and let the enchantment begin!</p>
                </motion.section>
            </section>
            <section className="accomodation__cardstack">
                {cards}
            </section>
        </section>
    );
}

export default Accomodation;