const xhr = new XMLHttpRequest;
const loader = document.querySelector(`#loader`);
const item = document.querySelector(`#items`);
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com`);
xhr.responseType = `json`;
xhr.addEventListener(`readystatechange`, () => {
    if (xhr.readyState !== xhr.DONE) {
        return;
    }
    loader.classList.remove(`loader_active`);
    const valute = (xhr.response.response.Valute);
    const arr = [];
    for (let key in valute) {
        arr.push(valute[key]);
    }
    arr.forEach(el => {
        item.insertAdjacentHTML(`afterbegin`, `<div class="item"><div class="item__code">
    ${el.CharCode}
</div>
<div class="item__value">
    ${el.Value}
</div>
<div class="item__currency">
    руб.
</div></div>`);
    });

});

xhr.send();