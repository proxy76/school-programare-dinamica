import '../styles/Problems.scss'

export default function Problem1() {
    return(
        <>
            <div className='problem1-titlu'>
                Problema #1243 - "Insula"
            </div>

            <div className='problem1'>
            
            
                <div className='problem1-enunt'>
                    <h1>Enunț</h1>
                    <p>
                    Pe țărmul insulei Mauritius sunt N localități, numerotate de la 1 la N, considerate puncte de maximă atracție pentru turiști. Acestea sunt conectate printr-o rețea feroviară cu linie ferată dublă ce leagă localitățile 1 de 2, 2 de 3, … , N-1 de N și N de 1, putându-se realiza astfel două circuite. Primul circuit presupune vizitarea localităţilor 1 2, ..., N 1, în această ordine, iar cel de-al doilea, vizitarea localităţilor 1, N, N – 1, …, 2, 1. În fiecare localitate există agenții ale tuturor celor M operatori de turism, numerotați de la 1 la M.<br></br>
                    Un tichet de călătorie se poate achiziționa doar din localitatea în care se găsește călătorul și permite deplasarea din acea localitate până la următoarea localitate a circuitului. Pentru fidelizarea clienților, operatorii de turism utilizează următoarea regulă pentru prețurile tichetelor: dacă un călător a ajuns într-o gară, cu un tichet cumpărat de la un anumit operator de turism și își continuă călătoria către următoarea destinație cu un tichet pe care-l va cumpăra de la un alt operator de turism, atunci noul tichet își va dubla prețul.
                    </p>
                </div>

            </div>
        </>
    )
}