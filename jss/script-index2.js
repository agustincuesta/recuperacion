
var Registro = [];
function agregar(){

    let strNombre = document.getElementById('txtNombre').value;
    let strPuesto = document.getElementById('txtPuesto').value;
    let strporcent9 = document.getElementById('porcent9').value
    let strsueldo= document.getElementById('sueldo').value
   
    


    let nuevoRegistro = {
        "Nombre" : strNombre,
        "Puesto" : strPuesto,
        "porcent9" : parseFloat(strporcent9),
        "sueldo" : parseFloat(strsueldo),
        
    };

Registro.push(nuevoRegistro);
imprimir();


}

function imprimir(){
    document.getElementById('tblRegistro').innerText='';
    Registro.forEach((x) => {

        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        let tdNombre = document.createElement('td');
        let tdPuesto = document.createElement('td');
        let tdporcent9 =document.createElement('tr');
        let tdsueldo = document.createElement('td');


        tdNum.innerText=Registro.indexOf(x) + 1;
        tdNombre.innerText = x.Nombre;
        tdPuesto.innerText = x.Puesto;
        tdporcent9.innerText = x.porcent9;
        tdsueldo.innerText = x.sueldo;

        tr.append(tdNum);
        tr.append(tdNombre);
        tr.append(tdPuesto);
        tr.append(tdporcent9);
        tr.append(tdsueldo);

        document.getElementById('tblRegistro').append(tr);



    });

}

