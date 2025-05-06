const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

console.log(nota1.value, nota2.value, nota3.value)

const button = document.querySelector(".button-enter");

const result = document.getElementById("note");

function calcularNotas(nota1, nota2, nota3) {
    if (nota3.value === 0) {
        return ((nota1 * 4) + (nota2 * 5) + (nota3 * 6)) / 15;
    }
    return ((nota1 * 4) + (nota2 * 5)) / 9;
};

button.addEventListener("click", () => {
    const notaUnidade1 = parseFloat(nota1.value) || 0;
    const notaUnidade2 = parseFloat(nota2.value) || 0;
    const notaUnidade3 = parseFloat(nota3.value) || 0;

    const media = calcularNotas(notaUnidade1, notaUnidade2, notaUnidade3);

    result.textContent = media.toFixed(1);
})
