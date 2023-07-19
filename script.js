const boxx = document.getElementsByClassName("create-box")[0];
const flashcards = document.getElementsByClassName("flashcards")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let cardArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

cardArray.forEach(divMaker);

function divMaker (text) {
    var newDiv = document.createElement("div");
    var h2_q = document.createElement("h2");
    var h2_a = document.createElement("h2");

    newDiv.className = 'flashcard';

    h2_q.setAttribute('style', "border-top: 1px solid red ; padding: 15px; margin-top: 30px");

    h2_q.innerHTML = text.myQuestion;

    h2_a.setAttribute('style', "display: none; color: red; text-align: center;border-top: 1px solid red ; padding: 15px; margin-top: 30px");
    h2_a.innerHTML = text.myAnswer;

    newDiv.appendChild(h2_q);
    newDiv.appendChild(h2_a);

    newDiv.addEventListener('click', function () {
        if (h2_a.style.display == "none"){
            h2_a.style.display = "block"
            h2_q.style.display = "none";
        }
        else{
            h2_a.style.display = "none"
            h2_q.style.display = "block";
        }
    })

    flashcards.appendChild(newDiv);
}

function addCard() {
    var FlashObject = {
        'myQuestion' : question.value,
        'myAnswer' : answer.value
    }

    cardArray.push(FlashObject);
    localStorage.setItem('items', JSON.stringify(cardArray));

    divMaker(cardArray[cardArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function delCard() {
    localStorage.clear();
    cardArray = [];
    flashcards.innerHTML = '';
}

function hideBox() {
    boxx.style.display = 'none';
}

function newShown() {
    boxx.style.display = 'block'
}