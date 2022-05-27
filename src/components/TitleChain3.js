import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function TitleChain3() {
    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: 'white' },
            { opacity: 0, color: 'white' },
        ],
        from: { opacity: 0, color: 'white' },
    })
    return <animated.div style={styles}>unisciti a noi</animated.div>
}