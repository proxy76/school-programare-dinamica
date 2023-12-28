import '../styles/Problems.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import List from './List'


export default function Problems(props) {


    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress,
        [0, 0.2, 0.3, 0.5],
        [0, 0, 0.8, 1])
    const scale = useTransform(scrollYProgress,
        [0.1, 0.3, 0.5],
        [0.5, 0.8, 1])

    return (
        <>
            <div className="prob">
                <motion.div 
                ref={ref}
                style={{opacity, scale}}
                className="prob--title">
                    Probleme rezolvate de pe PbInfo.ro
                </motion.div>

                <motion.div 
                ref={ref}
                style={{opacity}}>
                    <List />
                </motion.div>
            </div>
        </>
    )
}