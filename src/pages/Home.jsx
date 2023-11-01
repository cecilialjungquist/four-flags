import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Button from "../components/Button";

function Home() {
    const [scope, animate] = useAnimate();

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

    // Gör nåt med button här!
    // useEffect(() => {
    //     animate([
    //     ])
    // }, [])

    async function handleClick() {
        await animate([
            [
                "button",
                { scale: 0 },
                { duration: .2 },
            ],
            [
                "img",
                {  }
            ]
        ])
        console.log(1)
    }


    return (
        <section className="home">
            <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="home__h4">- STEP INTO A WORLD OF WONDER -</motion.h4>
            <motion.h1 initial={initial} animate={textAnimation} className="home__h1">
                Four Flags
            </motion.h1>
            <div className="home__balloons">
                {balloons}
            </div>
            <div className="home__button-container" ref={scope}>
                <motion.img src="/src/assets/balloon-green.svg" alt="Green balloon" />
                <Button action={handleClick}>
                    Your Journey Starts Here
                </Button>
            </div>
        </section>
    );
}

export default Home;