export default [
    {
        id: 1,
        title: "Enunț",
        text: `Pe țărmul insulei Mauritius sunt N localități, numerotate de la 1 la N, considerate puncte de maximă atracție pentru turiști. Acestea sunt conectate printr-o rețea feroviară cu linie ferată dublă ce leagă localitățile 1 de 2, 2 de 3, … , N-1 de N și N de 1, putându-se realiza astfel două circuite. Primul circuit presupune vizitarea localităţilor 1 2, ..., N 1, în această ordine, iar cel de-al doilea, vizitarea localităţilor 1, N, N – 1, …, 2, 1. În fiecare localitate există agenții ale tuturor celor M operatori de turism, numerotați de la 1 la M. 
        Un tichet de călătorie se poate achiziționa doar din localitatea în care se găsește călătorul și permite deplasarea din acea localitate până la următoarea localitate a circuitului. Pentru fidelizarea clienților, operatorii de turism utilizează următoarea regulă pentru prețurile tichetelor: dacă un călător a ajuns într-o gară, cu un tichet cumpărat de la un anumit operator de turism și își continuă călătoria către următoarea destinație cu un tichet pe care-l va cumpăra de la un alt operator de turism, atunci noul tichet își va dubla prețul.`
    },
    {
        id: 2,
        title: "Prezentare",
        text: `Ștefan se află în concediu pe insulă în localitatea 1 și tocmai a câștigat un premiu oferit de operatorul de turism numerotat cu 1, pentru o excursie cu N tichete de călătorie pe insula Mauritius.
        El pornește din localitatea în care se află și apoi parcurge cu trenul întregul circuit, astfel încât cu ultimul tichet cumpărat să se întoarcă în localitatea 1, de unde a plecat. Același operator de turism îi oferă contra cost, primul tichet de călătorie. Ștefan va studia toate ofertele și dacă e cazul poate refuza inclusiv acest prim tichet pentru a-l achiziționa de un alt operator de turism, chiar dacă i se va dubla prețul (fiindcă a schimbat operatorul).`
    },
    {
        id: 3,
        title: "Date de intrare",
        text: "Pe prima linie două numere naturale N și M, despărțite printr-un spațiu cu semnificația din enunț;\npe următoarele M linii, câte N numere naturale p[i,1], p[i,2], … , p[i,n], separate prin câte un spațiu. Valorile de pe linia i+1, reprezintă în ordine, prețurile stabilite de operatorul numerotat cu i pentru achiziționarea tichetelor de călătorie între localitățile 1 și 2, 2 și 3, …, N-1 și N, respectiv N și 1.",
        optTitle: "Date de ieșire",
        optText: "Fişierul de ieşire insula.out va conţine pe prima linie un singur număr natural ce reprezintă suma minimă cu care Ștefan poate achiziționa cele N tichete pentru călătoria sa."
    },
    {
        id: 4,
        title: "Explicație",
        text: "Pe circuit sunt 3 localități și 2 operatori de turism. Operatorul 1 are următoarele prețuri: pentru deplasarea între localitățile 1 și 2 tichetul are prețul 10, între localitățile 2 și 3 tichetul are prețul 9 iar între localitățile 3 și 1, tichetul are prețul 3. Operatorul 2 are următoarele prețuri: pentru deplasarea între localitățile 1 și 2 tichetul are prețul 2, între localitățile 2 și 3 tichetul are prețul 8 iar între localitățile 3 și 1, tichetul are prețul 5. Un traseu parcurs cu 3 tichete, poate fi: 1→3 preț 3 , 3→2 preț 9 , 2→1 cu preț 2 de la operatorul 2,(prețul se dublează). Cost minim total 3+9+2*2=16"
    }
]