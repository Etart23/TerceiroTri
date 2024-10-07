function showAnswer(card) {
const answer = card.querySelector('.card-answer');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        }
