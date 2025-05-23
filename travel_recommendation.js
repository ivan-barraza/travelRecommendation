const txtBusqueda = document.querySelector("#txtBusqueda");
const botonBusqueda = document.querySelector("#cmdBusqueda");
const botonReset = document.querySelector("#cmdReset");
const divResultados = document.querySelector("#resultados")

botonReset.addEventListener("click",()=>{txtBusqueda.value=""; divResultados.innerHTML=""});
botonBusqueda.addEventListener("click",()=>{buscarRecomendaciones()});

function buscarRecomendaciones(){
    fetch("travel_recommendation_api.json")
        .then((res)=>res.json())
        .then((data)=>mostrarRecomendaciones(data))
}

function mostrarRecomendaciones(datos){
    let strBusqueda = txtBusqueda.value.toLowerCase();
    let resultados = [];
    divResultados.innerHTML="";    

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

    resultados.forEach((resultado)=>{
        let tarjeta = document.createElement("div");
        let titulo = document.createElement("h2");
        let imagen = document.createElement("img");
        let descripcion = document.createElement("p")
        tarjeta.classList.add("tarjeta");
        titulo.textContent = resultado.name;
        imagen.src = resultado.imageUrl;
        descripcion.textContent = resultado.description;
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        divResultados.appendChild(tarjeta);
    })

}