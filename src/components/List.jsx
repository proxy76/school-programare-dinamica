import '../styles/Problems.scss'
import list from '../assets/data.jsx'

import { motion } from 'framer-motion'

export default function List() {

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (id) => 
        ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.08 * id,
            }
        }),
    }

    return (
        list.map((item, id) => {
            return (
                <motion.div 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: false,
                }}
                custom={id}
                className="pb">
                    {item.text}
                </motion.div>
            )
        })
    )
    
}