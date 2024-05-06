const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let mensagem = document.getElementById('res')

const relogio = setInterval(function time(){

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    if (hr < 12 && hr > 6){
    mensagem.innerHTML = "Bom dia!"
} else if (hr > 12 && hr < 18 ) {
    mensagem.innerHTML = "Boa tarde!"
} else {
    mensagem.innerHTML = "Boa noite!"
}

} )

