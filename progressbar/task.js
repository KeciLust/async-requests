const xhr = new XMLHttpRequest;
const progress = document.querySelector(`#progress`);
const form = document.querySelector(`#form`);
form.addEventListener(`submit`, (e) => {
const formData = new FormData(form);
xhr.open(`POST`, ``);
xhr.addEventListener(`readystatechange`, () => {
    if(xhr.readyState === 1){
        progress.value = 0.25;
    }else if(xhr.readyState === 2){
        progress.value = 0.5;
    }else if(xhr.readyState === 3){
        progress.value = 0.75;
    }else {
        progress.value = 1;
    }
});
xhr.send(formData);
e.preventDefault();
});