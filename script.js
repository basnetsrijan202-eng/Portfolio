const message = "Marie, from the moment you entered my life, everything started feeling brighter and more beautiful 💕";
let index = 0;

function typeEffect() {
    if (index < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

function showMessage() {
    document.getElementById("finalMessage").innerHTML =
    "Will you make me the happiest person alive and stay with me forever? 💍❤️";
}
