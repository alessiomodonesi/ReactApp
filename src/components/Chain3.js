import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import styles from '../style/Chain3.module.css'

export default function Chain3() {
    let data = [
        {
            name: 'Terminal',
            css: 'linear-gradient(to bottom, #0f9b0f, #000000)',
            height: 400,
        },
        {
            name: 'Terminal',
            css: 'linear-gradient(to bottom, #0f9b0f, #000000)',
            height: 400,
        },
        {
            name: 'Terminal',
            css: 'linear-gradient(to bottom, #0f9b0f, #000000)',
            height: 400,
        },
        {
            name: 'Terminal',
            css: 'linear-gradient(to bottom, #0f9b0f, #000000)',
            height: 400,
        },
    ]

    const [open, set] = useState(false)
    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: 'black' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? '#fcf8ffea' : 'black',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    return (
        <div className={styles.wrapper}>
            <animated.div
                style={{ ...rest, width: size, height: size }}
                className={styles.container}
                onClick={() => set(open => !open)}>

                {transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{ ...style, background: item.css }}
                    />
                ))}
            </animated.div>
        </div>
    )
}
