
import '../styles/Ex.scss'

export default function Ex() {


    function checkFor(text, e) {
        if (e.target.value === text)
            e.target.style.backgroundColor = 'green'
        else if (e.target.value === "")
            e.target.style.backgroundColor = 'white'
        else
            e.target.style.backgroundColor = 'red'
    }

    return(
        <div className="ex">
            <div className="ex-title">
                Completează exemplul după următoarele date de intrare:
            </div>
            <div className="ex-di">
                4 3<br />
                3 4 1 3<br />
                2 5 3 2<br />
                4 2 1 4<br />
            </div>
            <div className='ex-tables'>
                <div className="table1">
                    <table>
                        <tr>
                            <th></th>
                            <th>0</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>

                        <tr>
                            <th>0</th>
                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>
                        </tr>

                        <tr>
                            <th>1</th>
                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' id='inputBox1' onChange={(e) => {
                                    checkFor("3", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox2' onChange={(e) => {
                                    checkFor("4", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox3' onChange={(e) => {
                                    checkFor("1", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox4' onChange={(e) => {
                                    checkFor("3", e)
                                }}/>
                            </th>
                        </tr>

                        <tr>
                            <th>2</th>
                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' id='inputBox5' onChange={(e) => {
                                    checkFor("2", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox6' onChange={(e) => {
                                    checkFor("5", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox7' onChange={(e) => {
                                    checkFor("3", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox8' onChange={(e) => {
                                    checkFor("2", e)
                                }}/>
                            </th>
                        </tr>

                        <tr>
                            <th>3</th>
                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' id='inputBox9' onChange={(e) => {
                                    checkFor("4", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox10' onChange={(e) => {
                                    checkFor("2", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox11' onChange={(e) => {
                                    checkFor("1", e)
                                }}/>
                            </th>

                            <th>
                                <input type='text' id='inputBox12' onChange={(e) => {
                                    checkFor("4", e)
                                }}/>
                            </th>
                        </tr>

                        <tr>
                            <th>4</th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text'/>
                            </th>

                            <th>
                                <input type='text'/>
                            </th>

                            <th>
                                <input type='text'/>
                            </th>

                            <th>
                                <input type='text'/>
                            </th>
                        </tr>

                        <tr>
                            <th>5</th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>

                            <th>
                                <input type='text' />
                            </th>
                        </tr>
                        
                    </table>
                    <div className='table1-text'>
                        Matricea inițială
                    </div>
                </div>

                <div className="tables2-3">
                    <div className="table2">
                        <table>
                            <tr>
                                <th></th>
                                <th>0</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>

                            <tr>
                                <th>0</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                            </tr>

                            <tr>
                                <th>1</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>2</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("2", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("4", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>3</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("7", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("9", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>4</th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("13", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("9", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>5</th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("11", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("15", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("13", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                            </tr>
                        </table>
                        <div className='table2-text'>
                            Matricea auxiliară - sens invers-trigonometric
                        </div>
                    </div>

                    <div className="table3">
                    <table>
                            <tr>
                                <th></th>
                                <th>0</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>

                            <tr>
                                <th>0</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                            </tr>

                            <tr>
                                <th>1</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("11", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("14", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("15", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>2</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("12", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("11", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>3</th>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("4", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("7", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("9", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>4</th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("3", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("4", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>

                                <th>
                                    <input type='text'/>
                                </th>
                            </tr>

                            <tr>
                                <th>5</th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                            </tr>
                        </table>
                        <div className='table3-text'>
                           Matricea auxiliară - sens trigonometric
                        </div>
                    </div>
                </div>
                
                <div className="tables4-5">
                    <div className="table4">
                        <table>
                            <tr>
                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("3", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("7", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("11", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                            </tr>
                        </table>
                        <div className='table4-text'>
                           Vector de minim - sens invers-trigonometric
                        </div>
                    </div>

                    <div className="table5">
                        <table>
                            <tr>
                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("11", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("8", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("4", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' onChange={(e) => {
                                        checkFor("3", e)
                                    }}/>
                                </th>

                                <th>
                                    <input type='text' />
                                </th>

                                <th>
                                    <input type='text' />
                                </th>
                                
                                <th>
                                    <input type='text' />
                                </th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                            </tr>
                        </table>
                        <div className='table5-text'>
                           Vector de minim - sens trigonometric
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}