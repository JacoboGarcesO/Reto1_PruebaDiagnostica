function MostrarArbol(){
    var arbolD=''
    var cont=0
    var cont2=0
    var arbol='<br/>'
    var tronco='<br/>'
    var troncoD=''
    for(i=0;i<19;i++){
        for(j=0;j<cont;j++){
            arbol=arbol+getRandomInt(0,2)
        }
        cont2=cont2+1
        arbolD=arbolD+arbol
        cont=cont+1
        if(cont2==6){
            cont=cont-5
            cont2=0
        }
        
    }
    for(i=0;i<3;i++){
        for(j=0;j<10;j++){
            tronco=tronco+getRandomInt(0,2)
        }
        troncoD=troncoD+tronco
        tronco='<br/>'
    }

    document.getElementById("contenedor_Arbol").innerHTML=`
    <h1 style="font-size:30px;color:white;">Árbol de Navidad </h1>
    <i class="material-icons" style="padding-left: 100px; font-size:100px;color:goldenrod;">start</i>
    <span style="font-size:20px;color:white;">${arbolD}</span>
    <span style="font-size:20px;color:red;">${troncoD}</span>

    `
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }