import '../styles/Problems.scss'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState} from 'react'

import data from '../assets/pb1.jsx'

export default function Problem1() {

    const [width, setWidth] = useState(0)
    const target = useRef();


    return(
        <>
            <div className="titlu">
                Problema #1243 - "Insula"
            </div>

            <motion.div ref={target} className="carusel">
                <motion.div drag="x" dragConstraints={{right: 0}} className="inner-carusel">
                    {
                        data.map((item) => {
                            return (
                                <motion.div className='card'>
                                    <h1>
                                        {item.title}
                                    </h1>
                                    <p>
                                        {item.text}
                                    </p>
                                    <h1>
                                        {item.optTitle}
                                    </h1>
                                    <p>
                                        {item.optText}
                                    </p>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </>
    )
}