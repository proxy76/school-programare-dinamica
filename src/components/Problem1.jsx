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
                <motion.div drag="x" dragConstraints={{right: 0, left: -window.innerWidth - 1743}} className="inner-carusel">
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
                
            {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p>#include <span style={{color: "#f50202"}}>&lt;fstream&gt;</span></p>
                            <p>#include <span style={{color: "#f50202"}}>&lt;iostream&gt;</span></p>
                            <p>#include <span style={{color: "#f50202"}}>&lt;climits&gt;</span></p>
                            <p>using namespace std;</p>
                            <br></br>
                            <p><span style={{color: "green"}}>ifstream</span> f;</p>
                            <p><span style={{color: "green"}}>ofstream</span> g;</p>
                            <br></br>
                            <p><span style={{color: "blue"}}>int</span> i, j, n, m, Min1;</p>
                            <p><span style={{color: "blue"}}>int</span> a[305][305], cost[305][305], Min[305];</p>
                            <br></br>
                            <p><span style={{color: "gray"}}>// initializezi minimul cu cea mai mica valoare</span></p>
                            <p><span style={{color: "blue"}}>void</span> init()｛</p>
                            <p></p>
                            <p style={{marginLeft: 30}}>for (<span style={{color: "blue"}}>int</span> i = 1; i &lt;= n + 1; ++i) ｛</p>
                            <p style={{marginLeft: 60}}>Min[i] = INT_MAX;</p>
                            <p style={{marginLeft: 60}}>for (<span style={{color: "blue"}}>int</span> j = 1; j &lt;= m; ++j)</p>
                            <p style={{marginLeft: 90}}>a[i][j] = INT_MAX;</p>
                            <p style={{marginLeft: 30}}>｝</p>
                            <p>｝</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Subprogramul init() este folosit de două ori în rezolvarea problemei. Prima dată înainte de prima trecere (cea în sensul acelor de ceasornic), iar a doua oară înainte de a doua trecere (cea în sens trigonometric). <br></br>
                        Scopul folosirii acestui subprogram este de a iniţializa cele două variabile ajutătoare (vectorul Min[] şi matricea a[]) cu cea mai mare valoare posibilă (INT_MAX).
                        </div>
                    </div>
                </div>

                {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p style={{color: "gray"}}>// minim dintre doua valori</p>
                            <p><span style={{color: "blue"}}>int</span> minim(<span style={{color: "blue"}}>int</span> a, <span style={{color: "blue"}}>int</span> b)｛</p>
                            <p style={{marginLeft: 30}}>if (a &gt; b)</p>
                            <p style={{marginLeft: 60}}><span style={{color: "red"}}>return</span> b;</p>
                            <p style={{marginLeft: 30}}>else</p>
                            <p style={{marginLeft: 60}}><span style={{color: "red"}}>return</span> a;</p>
                            <p>｝</p>
                            <br></br>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}>f.open("insula.in");</p>
                            <p style={{marginLeft: 30, color: "gray"}}>// se citeste cat costa pana in statia j cu transportatorul i</p>
                            <p style={{marginLeft: 30}}>f &gt;&gt; n &gt;&gt; m;</p>
                            <p style={{marginLeft: 30}}>for (i = 1; i &lt;= m; ++i)</p>
                            <p style={{marginLeft: 60}}>for (j = 1; j &lt;= n; ++j)</p>
                            <p style={{marginLeft: 90}}>f &gt;&gt; cost[i][j+1];</p>
                            <p style={{marginLeft: 30}}>f.close();</p>
                            <p style={{marginLeft: 30, color: "gray"}}>// cost[i][j] - costul pentru a merge cu transportatorul i</p>
                            <p style={{marginLeft: 30, color: "gray"}}>// a[i][j] - costum minim pentru a ajunge la statia i cu transportatorul j</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Secvenţa dată este folosită pentru citirea preţurilor fiecărui bilet de la operatorii de turism astfel încât cost[i][j] să reprezinte preţul unui bilet de la operatorul i pentru a ajunge în staţia j.
                        </div>
                    </div>
                </div>

                {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p style={{marginLeft: 30, color: "gray"}}>// trece stanga-dreapta</p>
                            <p style={{marginLeft: 30}}>init();</p>
                            <p style={{marginLeft: 30, color: "gray"}}>// minimul pentru a ajunge din statia 1-2 de forma a[statia 2][transp]</p>
                            <p style={{marginLeft: 30}}>for (i = 1; i &lt; m; i++)｛</p>
                            <p style={{marginLeft: 60}}>if (i == 1) a[2][i] = cost[i][2];</p>
                            <p style={{marginLeft: 60}}>else a[2][i] = cost[i][2] * 2;</p>
                            <p style={{marginLeft: 30}}>Min[2] = minim(Min[2], a[2][i]);</p>
                            <p>｝</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Secvenţa alăturată este folosită pentru a aborda un caz particlar al trecerii alese. Aceasta calculează minimul pentru a ajunge la staţia a doua luând fiecare operator în parte. Se ştie că: <br></br>
                        - a[2][i] - minimul pentru a ajunge în staţia 2 cu operatorul i <br></br>
                        - Min[2] - minimul pentru a ajunge în staţia 2 
                        </div>
                    </div>
                </div>

                {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p style={{marginLeft: 30, color: "gray"}}>// minimul sa ajunga la statia 1 din nou</p>
                            <p style={{marginLeft: 30}}>for (i = 3; i &lt;= n + 1; ++i)｛</p>
                            <p style={{marginLeft: 60}}>for (j = 1; j &lt;= m; ++j)｛</p>
                            <p style={{marginLeft: 90, lineHeight: 1.2}}>a[i][j] = minim(a[i - 1][j] + cost[j][i], Min[i - 1] + 2 * cost[j][i]);</p>
                            <p style={{marginLeft: 90}}>Min[i] = minim(Min[i], a[i][j]);</p>
                            <p style={{marginLeft: 60}}>｝</p>
                            <p style={{marginLeft: 30}}>｝</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Secvenţa 4 calculează minimului pentru a ajunge de la staţia a 3-a până la staţia N şi apoi 1 (N+1). Această secvență se folosește de minimul precedent pentru a ajunge până la stația i-1 și calculează care variantă este mai ieftină:<br></br>
                        - să rămână cu operatorul precedent<br></br>
                        - să schimbe operatorul
                        </div>
                    </div>
                </div>

                {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p style={{marginLeft: 30, color: "gray"}}>// memoreaza minimul</p>
                            <p style={{marginLeft: 30}}>Min1 = Min[n+1];</p>
                            <br></br>
                            <p style={{marginLeft: 30, color: "gray"}}>// reinitializeaza</p>
                            <p style={{marginLeft: 30}}>init();</p>
                            <br></br>
                            <p style={{marginLeft: 30, color: "gray"}}>// trece dreapta-stanga</p>
                            <p style={{marginLeft: 30}}>for (i = 1; i &lt;= m; ++i)｛</p>
                            <p style={{marginLeft: 60}}>if (i == 1)</p>
                            <p style={{marginLeft: 90}}>a[n][i] = cost[i][n + 1];</p>
                            <p style={{marginLeft: 60}}>else</p>
                            <p style={{marginLeft: 90}}>a[n][i] = cost[i][n + 1] * 2;</p>
                            <p style={{marginLeft: 60}}>Min[n] = minim(Min[n], a[n][i]);</p>
                            <p style={{marginLeft: 30}}>｝</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Acestă secvenţă este asemănătoare secvenţei 3, doar că aceasta caluculează minimul pentru staţia n deoarece cu această secvenţă începe trecerea în sens trigonometric.
                        </div>
                    </div>
                </div>

                {/*｛ ｝*/}

                <div className="algoritm1">
                    <div className="rezolvare1">
                        <div className="rezolvare1--text">
                            <p style={{marginLeft: 30}}>for (i = n - 1; i &gt;= 1; --i)｛</p>
                            <p style={{marginLeft: 60}}>for (j = 1; j &lt;= m; ++j)｛</p>
                            <p style={{lineHeight: 1.2, marginLeft: 90}}>a[i][j] = minim(a[i + 1][j] + cost[j][i + 1], Min[i + 1] + 2 * cost[j][i + 1]);</p>
                            <p style={{marginLeft: 90}}>Min[i] = minim(Min[i], a[i][j]);</p>
                            <p style={{marginLeft: 60}}>｝</p>
                            <p style={{marginLeft: 30}}>｝</p>
                            <br></br>
                            <p style={{marginLeft: 30}}><span style={{color: "green"}}>ofstream</span> g("insula.out");</p>
                            <p style={{marginLeft: 30, color: "gray"}}>// afla minim intre cele doua trasee</p>
                            <p style={{marginLeft: 30}}>g &lt;&lt; minim(Min1, Min[1]) &lt;&lt; " ";</p>
                            <p style={{marginLeft: 30}}>g.close();</p>
                            <p style={{marginLeft: 30}}><span style={{color: "red"}}>return</span> 0;</p>
                            <p>｝</p>
                        </div>
                    </div>

                    <div className="explicare1">
                        <div className="explicare1--text">
                        Secvența 6 este oglindirea Secvenței 4  dat fiind faptul că la Secvența 4 trecerea este în sensul acelor de ceasornic, iar la Secvența 6 este în sens trigonometric. De altfel modul de calcul este același.
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="gifuri">
                <img src='./Explicatie.gif' className='sens-ceas'></img>
                <img src='./Explicatie_trig.gif' className='sens-trig'></img>
            </div>

            
        </>
    )
}