const output = document.getElementById("output");

window.addEventListener("load" , ()=>{
    fetchCharcters();
});

async function fetchCharcters(){

    let res = await fetch("https://www.breakingbadapi.com/api/characters");
    let results = await res.json();

    output.innerHTML=""

    results.map(result =>{
        const htmlPage = 
        `
        <img src=${result.img} class="img" >
        <div class="info-display">
            <h5> Name : <span> ${result.portrayed} </span> </h5>  
        </div>
        `;

        let outstring = document.createElement("div")
        outstring.classList.add("col-md-3" , "mb-3" , "img-info")
        outstring.innerHTML=htmlPage
        output.appendChild(outstring)
    });
}