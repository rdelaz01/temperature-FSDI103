// conversion table (o to 100 C)

function generateTable(){

    for(let i=0;i<101;i+=10){
        let f = (i*9/5) + 32;
        let c = (f - 32) * 5/9;

        document.getElementById("temps").innerHTML+=`
            <tr>
                <td>${c.toFixed()}°C</td>
                <td>${f.toFixed()}°F</td>
            </tr>
        `;
    }
}