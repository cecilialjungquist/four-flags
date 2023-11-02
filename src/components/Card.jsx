import { motion } from "framer-motion";
import Button from "./Button";

function Card({ className = '', name, svg, summary }) {

    const cardVariants = {
        normal: {
            boxShadow: '0px 0px 0px #FC6BFF',
            scale: 1,
        },
        hover: {
            boxShadow: '0px 0px 10px #FC6BFF',
            scale: 1.02
        },
        transition: {
            duration: 0.2,

        }
    }


    function handleClick() {

    }

    return (
        <motion.article
            variants={cardVariants}
            whileHover="hover"
            initial="normal"
            transition="transition"
            className={`card ${className}`}
        >
            <section className="card__section">
                <figure>
                    <img src={`src/assets/${svg}`} />
                </figure>
                <h3>{name}</h3>
                <p>{summary}</p>
            </section>
            <Button action={handleClick}>Book your stay now!</Button>
        </motion.article>
    );
}

export default Card;
