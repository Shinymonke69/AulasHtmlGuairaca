let rotationDegree = 0;

function rotateElement() {
    rotationDegree +=45;
    document.getElementById('rotating_div').style.transform = `rotate(${rotationDegree}deg)`;
}

function toggleFade() {
    const div = document.getElementById('fading_div');
    div.classList.toggle('visible');
}

function togglePulse() {
    const div = document.getElementById('pulsing_div');
    div.classList.toggle('pulsing');
}

function zoomIn() {
    const div = document.getElementById('zooming_div');
    div.classList.add('zooming');
}