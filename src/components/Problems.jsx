import './Problems.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import List from './List'

export default function Problems(props) {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1])

    return (
        <>
            <div className="prob">
                <motion.div 
                ref={ref}
                style={{opacity, scale}}
                className="prob--title">
                    Probleme rezolvate de pe PbInfo.ro
                </motion.div>

                <div className="prob--list">
                    <List />
                </div>
            </div>
        </>
    )
}