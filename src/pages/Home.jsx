import { motion, stagger, useAnimate } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const [scope, animate] = useAnimate();
    const navigate = useNavigate();

    const initial = {
        opacity: 0,
        y: -100
    }

    const textAnimation = {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            type: 'spring',
            damping: 10,
            stiffness: 100,
        }
    }

    const moveBalloon = {
        opacity: [.3, 1, 1, 1],
        rotate: [30, 0, -20, 0],
        y: ['0vh', '-125vh']
    }

    let balloons = [];

    for (let i = 0; i < 10; i++) {
        const transition = {
            duration: Math.random() + 2,
            delay: Math.random()
        }

        if (i % 2 === 0) {
            balloons.push(<motion.img key={i} animate={moveBalloon} transition={transition} src="/src/assets/balloon-green.svg" alt="Green balloon." />);
        } else {
            balloons.push(<motion.img key={i} animate={moveBalloon} transition={transition} src="/src/assets/balloon-pink.svg" alt="Pink balloon." />)
        }
    }

    async function handleClick() {
        await animate([
            [
                "button",
                { scale: 0, color: '#2e7a82', boxShadow: '0px 0px 0px transparent' }
            ],
            [
                ".home__h4",
                { x: '-50vh', opacity: 0 },
                { at: "-0.1" }
            ],
            [
                ".home__h1",
                { x: "50vh", opacity: 0 },
                { at: "-0.1" }
            ],
            [
                "button",
                {
                    color: '#FC6BFF',
                    backgroundColor: '#FC6BFF',
                    scale: 20
                },
                { at: "-0.1" }
            ]
        ]);
        navigate('/the-park');
    }


    return (
        <section className="home" ref={scope}>
            <motion.h4 initial={{ opacity: 0.3 }} animate={{ opacity: 1, y: 0 }} className="home__h4">- STEP INTO A WORLD OF WONDER -</motion.h4>
            <motion.h1 initial={initial} animate={textAnimation} className="home__h1">
                Four Flags
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: -32 }} animate={{ opacity: 1, transition: { delay: 2, duration: 2 }}}>
                <Button className="home__button" action={handleClick}>
                    Your Journey Starts Here
                </Button>
            </motion.div>

            <div className="home__balloons">
                {balloons}
            </div>
        </section>
    );
}

export default Home;