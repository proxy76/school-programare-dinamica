import '../styles/MainTitle.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MainTitle() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const position = useTransform(scrollYProgress, (pos) => {
        return "fixed"
    })

    return (
        <>
            <div className="main">
                <motion.p
                ref={ref}
                style={{scale, opacity, position}}
                >
                    Programare dinamică
                </motion.p>
                
            </div>
        </>
    )
}