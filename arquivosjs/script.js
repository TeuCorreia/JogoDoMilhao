let acumulado = 0;

const valorElemento = document.getElementById("valor-acumulado");

const gruposDeAlternativas = document.querySelectorAll(".alternativas");

gruposDeAlternativas.forEach(grupo => {

    const alternativas = grupo.querySelectorAll(".alternativa");

    alternativas.forEach(alternativa => {

        alternativa.addEventListener("click", () => {

            if (grupo.classList.contains("respondida")) return;

            grupo.classList.add("respondida");

            const correta = alternativa.getAttribute("data-correta") === "true";

            if (correta) {
                acumulado += 125000;
                alternativa.style.backgroundColor = "green";
            } else {
                acumulado -= 50000;
                alternativa.style.backgroundColor = "red";
            }

            if (acumulado < 0) acumulado = 0;

            alternativas.forEach(alt => {
                if (alt.getAttribute("data-correta") === "true") {
                    alt.style.backgroundColor = "green";
                }
            });

            atualizarTela();
        });

    });

});

function atualizarTela() {
    valorElemento.innerText = acumulado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}