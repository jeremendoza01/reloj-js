let alarmTime;
function enviarDatos(){
    let hora = document.getElementById("id1").value;
    let texto = document.getElementById("texto").value;
}
const AddZeros = n =>{
    if (n.toString().length < 2) return "0".concat(n)  
    return n
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = AddZeros(time.getHours());
    let min = AddZeros(time.getMinutes());
    let seg = AddZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}
actualizarHora();
setInterval(actualizarHora, 1000);


function setAlarm(){
    let time = id1.value

    if (time.includes(" ") ){
        return alert("xfa ingresa un dato")
    }
    alarmTime = time;
    console.log(time)
}
