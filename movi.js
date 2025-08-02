let currentStep = 0;
const correctDate = "2023-03-03";

function handleLogin() {
    const dateInput = document.getElementById("dateInput").value;
    if (dateInput === correctDate) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
    } else {
        alert("Fecha incorrecta");
    }
}

function handleNext(step) {
    // Oculta todos los pasos
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.add('hidden'));

    // Muestra el siguiente paso
    const nextStep = document.getElementById(`step-${step}`);
    if (nextStep) {
        nextStep.classList.remove('hidden');
    } else {
        console.error(`No se encontró el paso con ID: step-${step}`);
    }
}


document.getElementById("no-btn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});

