import '../styles/Problems.scss'
import list from '../assets/data.jsx'
import '../App.css'

import Problem1 from './Problem1.jsx';
import Problem2 from './Problem2.jsx';
import Problem3 from './Problem3.jsx';
import Problem4 from './Problem4.jsx';
import BlankProblem from './BlankProblem.jsx';

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useState } from 'react';

export default function List() {

    const [problem, setProblem] = useState(10);
    
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const scrollOpacity = useTransform(scrollYProgress, 
        [-1, 0, 0.2, 0.3, 0.5, 0.65, 0.68, 0.7, 0.8, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0])

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

            <>
                {
                    problem === 10 &&
                    <BlankProblem />
                }

                

                {
                    (problem != 10) &&
                        <div className="hero-container">
                            <motion.div 
                            ref={targetRef}
                            style={{opacity: scrollOpacity}}
                            className="scrolldown">
                                <p>Scroll down!</p>
                                <img src='./scrolldown.png' />
                            </motion.div>

                            {problem === 0 && <Problem1 />}
                            {problem === 1 && <Problem2 />}
                            {problem === 2 && <Problem3 />}
                            {problem === 3 && <Problem4 />}
                        </div>
                }
                
            </>
        </>
    )
    
}