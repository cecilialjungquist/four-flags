import { motion, spring, stagger, useAnimate } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const [scope, animate] = useAnimate();
    const navigate = useNavigate();

    const headingVariants = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
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
    }

    const buttonContainerVariants = {
        initial: { opacity: 0, y: '60vh' },
        animate: { opacity: 1, y: 0, transition: { delay: 2, duration: 3.5, ease: 'linear', type: 'spring' } }
    }

    
    // Generate balloons
    let balloons = [];
    for (let i = 0; i < 18; i++) {

        const transition = {
            duration: Math.random() + 2,
            delay: Math.random() + .2,
            ease: 'easeIn'
        }

        const moveBalloon = {
            rotate: [30, 0, -20, 0],
            y: ['0vh', '-125vh']
        }

        if (i % 2 === 0) {
            balloons.push(<motion.img key={i} animate={moveBalloon} transition={transition} src="/src/assets/balloon-green.svg" alt="Green balloon." />);
        } else if (i % 3 === 0) {
            balloons.push(<motion.img key={i} animate={moveBalloon} transition={transition} src="/src/assets/balloon-pink.svg" alt="Pink balloon." />)
        } else {
            balloons.push(<motion.img key={i} animate={moveBalloon} transition={transition} src="/src/assets/balloon-red.svg" alt="Red balloon." />)
        }
    }

    async function handleClick() {
        await animate([
            [
                "button",
                { opacity: 0 }
            ],
            [
                ".home__smiley-svg",
                { y: '-100%', opacity: 0 }
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
                ".home__scaling-box",
                {
                    backgroundColor: '#FC6BFF',
                    scale: 100
                },
                { at: "-0.1" }
            ]
        ]);
        navigate('/the-park');
    }


    return (
        <section className="home" ref={scope}>
            <svg className="home__smiley-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M40.5312 25.5C40.5312 29.4865 38.9476 33.3098 36.1287 36.1287C33.3098 38.9476 29.4865 40.5312 25.5 40.5312C21.5135 40.5312 17.6902 38.9476 14.8713 36.1287C12.0524 33.3098 10.4688 29.4865 10.4688 25.5C10.4688 21.5135 12.0524 17.6902 14.8713 14.8713C17.6902 12.0524 21.5135 10.4688 25.5 10.4688C29.4865 10.4688 33.3098 12.0524 36.1287 14.8713C38.9476 17.6902 40.5312 21.5135 40.5312 25.5ZM44 25.5C44 30.4065 42.0509 35.1121 38.5815 38.5815C35.1121 42.0509 30.4065 44 25.5 44C20.5935 44 15.8879 42.0509 12.4185 38.5815C8.9491 35.1121 7 30.4065 7 25.5C7 20.5935 8.9491 15.8879 12.4185 12.4185C15.8879 8.9491 20.5935 7 25.5 7C30.4065 7 35.1121 8.9491 38.5815 12.4185C42.0509 15.8879 44 20.5935 44 25.5ZM19.1453 17.8687C19.9418 17.4104 20.8877 17.287 21.7752 17.5254C22.6627 17.7639 23.4193 18.3448 23.8789 19.1406C24.0298 19.4061 24.0696 19.7204 23.9896 20.0151C23.9096 20.3097 23.7163 20.5608 23.4519 20.7134C23.1875 20.8661 22.8734 20.908 22.5783 20.83C22.2831 20.7519 22.0307 20.5603 21.8763 20.2969C21.7749 20.1215 21.6292 19.9759 21.4537 19.8746C21.2783 19.7733 21.0794 19.7199 20.8768 19.7196C20.6743 19.7194 20.4752 19.7724 20.2995 19.8733C20.1239 19.9742 19.9778 20.1195 19.876 20.2946C19.7221 20.5598 19.469 20.7531 19.1726 20.8318C18.8762 20.9105 18.5607 20.8682 18.2954 20.7143C18.0301 20.5603 17.8369 20.3073 17.7582 20.0109C17.6795 19.7145 17.7217 19.3989 17.8757 19.1337C18.1814 18.6078 18.6177 18.1716 19.1453 17.8687ZM25.5 34.75C27.9533 34.75 30.306 33.7754 32.0407 32.0407C33.7754 30.306 34.75 27.9533 34.75 25.5H16.25C16.25 27.9533 17.2245 30.306 18.9593 32.0407C20.694 33.7754 23.0467 34.75 25.5 34.75ZM28.3953 17.8687C29.1918 17.4104 30.1377 17.287 31.0252 17.5254C31.9127 17.7639 32.6693 18.3448 33.1289 19.1406C33.2061 19.2722 33.2564 19.4177 33.2771 19.5688C33.2977 19.7198 33.2883 19.8735 33.2493 20.0209C33.2103 20.1684 33.1426 20.3066 33.0499 20.4277C32.9573 20.5489 32.8417 20.6505 32.7096 20.7267C32.5775 20.803 32.4317 20.8523 32.2805 20.872C32.1293 20.8917 31.9757 20.8812 31.8285 20.8412C31.6814 20.8013 31.5435 20.7326 31.423 20.6392C31.3025 20.5458 31.2017 20.4294 31.1263 20.2969C31.0249 20.1215 30.8792 19.9759 30.7037 19.8746C30.5283 19.7733 30.3294 19.7199 30.1268 19.7196C29.9243 19.7194 29.7252 19.7724 29.5495 19.8733C29.3739 19.9742 29.2278 20.1195 29.126 20.2946C28.9721 20.5598 28.719 20.7531 28.4226 20.8318C28.1262 20.9105 27.8107 20.8682 27.5454 20.7143C27.2801 20.5603 27.0869 20.3073 27.0082 20.0109C26.9295 19.7145 26.9717 19.3989 27.1257 19.1337C27.4314 18.6078 27.87 18.1716 28.3976 17.8687H28.3953Z" fill="#FC6BFF" />
            </svg>
            <motion.h4 initial={{ opacity: 0.3 }} animate={{ opacity: 1, y: 0 }} className="home__h4">- STEP INTO A WORLD OF WONDERS -</motion.h4>
            <motion.h1 variants={headingVariants} initial="initial" animate="animate" className="home__h1">
                Four Flags
            </motion.h1>
            <motion.div variants={buttonContainerVariants} initial="initial" animate="animate">
                <Button action={handleClick}>
                    Your Journey Starts Here
                </Button>
                <div className="home__scaling-box">
                </div>
            </motion.div>

            <div className="home__balloons">
                {balloons}
            </div>
        </section>
    );
}

export default Home;