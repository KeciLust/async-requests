const xhr = new XMLHttpRequest;
const title = document.querySelector(`#poll__title`);
const answers = document.querySelector(`#poll__answers`);
xhr.open(`get`, `https://netology-slow-rest.herokuapp.com/poll.php`);
xhr.responseType = `json`;
xhr.addEventListener(`readystatechange`, () => {
    if (xhr.readyState !== xhr.DONE) {
        return;
    }
    title.textContent = xhr.response.data.title;
    const button = Array.from(xhr.response.data.answers);
    button.forEach((el, i) => {

        answers.insertAdjacentHTML(`afterbegin`, ` <button class="poll__answer">
    ${el}
  </button>`);

    });
    const id = xhr.response.id;
    const answer = Array.from(answers.children);
    answer.forEach((el, i) => {
        el.addEventListener(`click`, () => {
            alert(`Спасибо, ваш голос засчитан!`);
            Array.from(answers.querySelectorAll(`button`)).forEach(el => el.remove());
            const xhr1 = new XMLHttpRequest;
            xhr1.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr1.responseType = `json`;
            xhr1.addEventListener(`readystatechange`, () => {
                if (xhr1.readyState !== xhr1.DONE) {
                    return;
                }
                const answerServer = Array.from(xhr1.response.stat);
                answerServer.forEach((el, i) => {
                    answers.insertAdjacentHTML(`afterbegin`, `<div> ${el.answer}: ${el.votes}</div>`);
                });
            });
            const send = `vote=${id}&answer=${i}`;
            xhr1.send(send);
        });
    });
});
xhr.send();