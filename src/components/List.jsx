import '../styles/Problems.scss'
import list from '../assets/data.jsx'

import Problem1 from './Problem1.jsx';
import Problem2 from './Problem2.jsx';
import Problem3 from './Problem3.jsx';
import Problem4 from './Problem4.jsx';

import { motion } from 'framer-motion'
import { useState } from 'react';

export default function List() {

    const [problem, setProblem] = useState(10);

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

    function handleClick(index) {
        setProblem(index)
    } 

    return (
        <>
            <div className="prob--list">
                {list.map((item, id) => {
                    return (
                        <motion.button 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                        }}
                        custom={id}
                        onClick={() => handleClick(id)}
                        className="pb">
                            {item.text}
                        </motion.button>
                    )
                })}
            </div>

            <div className="hero--container">
                {problem === 0 && <Problem1 />}
                {problem === 1 && <Problem2 />}
                {problem === 2 && <Problem3 />}
                {problem === 3 && <Problem4 />}
            </div>
                
        </>
    )
    
}