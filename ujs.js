
/*Ejercicio 1

Crear una función que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avión



Ejercicio 2

Crear una función que reciba como parámetro un array de números y devuelva el mayor. */

function ejercicio_2(){
    const num=[];
    let i =0;
     while(i<5){
        num[i]=parseInt(prompt('ingrese el numero ' + (i+1) +'/5'));
        i++;
     }
     buscar_mas_grande(num);
}

function buscar_mas_grande(num){
    const lim = num.length -1;
    let i = 1;
    max=num[0];
    console.log(max);
    while(i<=lim){
        if(max<num[i]){
            max = num[i];
        }
        console.log(max);
        i++;
    }
    console.log('El numero mas grande es ' + max);
}


function ejercicio_1(){

    const distancia = prompt('Ingrese la distancia');
        
    if(distancia <1000){
        console.log("Pie");
    }
    else{
        if(distancia >= 1000 && distancia < 10000  ){
            console.log("Bicicleta");
        }
        else{
            if(distancia >= 10000 && distancia < 30000 ){
                console.log("Colectivo");
            }
            else{
                if(distancia >= 30000 && distancia < 100000 ){
                    console.log("Auto");
                }
                else{
                    console.log("Avion");
                }
            }
        }
    }
}