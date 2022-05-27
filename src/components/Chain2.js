import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import Box from './Box';
import item from '../images/items/restock.png';
import styles from '../style/Chain2.module.css'

export default function Chain2() {
    let items = {
        boxes: [
            { id: 0, nome: "Item", prezzo: 10, image: item },
            { id: 1, nome: "Item", prezzo: 10, image: item },
            { id: 3, nome: "Item", prezzo: 10, image: item },
        ]
    }

    const [open, set] = useState(false)
    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: '#1aff1a' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? '#1aff1a' : '#1aff1a',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? items : [], {
        ref: transApi,
        trail: 400 / items.length,
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
                <h3 className="h3-title text-center">Section</h3>
                {transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{ ...style, background: item.css }}>
                            {items.boxes.map(box => (
                                <Box
                                    key={box.id}
                                    box={box}
                                />
                            ))}
                    </animated.div>
                ))}
            </animated.div>
        </div>
    )
}
