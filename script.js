document.addEventListener('DOMContentLoaded', () => {
    const text = "Este é o texto que aparecerá um caractere por vez.";
    const cardAnswer = document.getElementById('card-answer');
    let index = 0;

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Evita o comportamento padrão da barra de espaço
            if (index < text.length) {
                cardAnswer.textContent += text[index];
                index++;
            }
        }
    });
});
