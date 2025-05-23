const txtBusqueda = document.querySelector("#txtBusqueda");
const botonBusqueda = document.querySelector("#cmdBusqueda");
const botonReset = document.querySelector("#cmdReset");

botonReset.addEventListener("click",()=>{txtBusqueda.value=""});
botonBusqueda.addEventListener("click",()=>{buscarRecomendaciones()});

function buscarRecomendaciones(){
    fetch("travel_recommendation_api.json")
        .then((res)=>res.json())
        .then((data)=>mostrarRecomendaciones(data))
}

function mostrarRecomendaciones(datos){
    let strBusqueda = txtBusqueda.value.toLowerCase();
    let resultados = [];

    datos.countries.forEach((pais)=>{
        pais.cities.forEach((ciudad)=>{
            if(ciudad.name.toLowerCase().includes(strBusqueda)){
                resultados.push(ciudad)
            }
        })
    })

    datos.temples.forEach((templo)=>{
        if(templo.name.toLowerCase().includes(strBusqueda)){
            resultados.push(templo)
        }
    })

    datos.beaches.forEach((playa)=>{
        if(playa.name.toLowerCase().includes(strBusqueda)){
            resultados.push(playa)
        }
    })
    console.log(resultados);
}