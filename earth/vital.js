// ======================================================
// EARTH FACTS
// ======================================================

let earthFactsVisible = false;
let earthFactsLoaded = false;

function toggleEarthFacts(){

    earthFactsVisible = !earthFactsVisible;

    let panel = document.getElementById("earthFactsPanel");

    if(earthFactsVisible){

        if(!panel){

            renderEarthFacts();

        }else{

            panel.style.display = "block";

        }

    }else{

        if(panel){

            panel.style.display = "none";

        }

    }

}


async function renderEarthFacts(){

    const panel = document.createElement("div");

    panel.id = "earthFactsPanel";

    panel.className = "side-panel";

    panel.innerHTML = `

        <div class="section-title">

            EARTH FACTS

        </div>

        <div id="earthFactsContent">

            Loading...

        </div>

    `;

    document.body.appendChild(panel);

    await loadEarthFacts();

}

async function loadEarthFacts(){

    try{

        const response = await fetch("earth/vital.json");

        const data = await response.json();

        updateEarthFacts(data);

    }catch(error){

        console.error(error);

        document.getElementById("earthFactsContent").innerHTML =

            "Unable to load Earth Facts.";

    }

}
