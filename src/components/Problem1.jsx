import '../styles/Problems.scss'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState} from 'react'

import data from '../assets/pb1.jsx'

export default function Problem1() {

    const [width, setWidth] = useState(0)
    const target = useRef();

    useEffect(() => {
        setWidth(target.current.offsetWidth)
    }, [])

    return(
        <>
            <div className="titlu">
                Problema #1243 - "Insula"
            </div>

            <motion.div ref={target} className="carusel">
                <motion.div drag="x" dragConstraints={{right: 0, left: -3450}} className="inner-carusel">
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

            <div className="algoritm">
                

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <p>#include &lt;fstream&gt;</p>
                        <p>#include &lt;iostream&gt;</p>
                        <p>#include &lt;climits&gt;</p>
                        <p>using namespace std;</p>
                        <br></br>
                        <p>ifstream f;</p>
                        <p>ofstream g;</p>
                        <br></br>
                        <p>int i, j, n, m, Min1;</p>
                        <p>int a[305][305], cost[305][305], Min[305];</p>
                        <br></br>
                        <p>// initializezi minimu cu cea mai mare valoare</p>
                        <p>void init()</p>
                    </div>

                    <div className="explicare1">

                    </div>
                </div>
            </div>
        </>
    )
}