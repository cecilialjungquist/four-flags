function useStandardAnimation() {
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

    // Lägga till transition som en egen?

    return { initial, animate };
}

export default useStandardAnimation;