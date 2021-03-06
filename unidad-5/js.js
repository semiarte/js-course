var paragraph = document.querySelector('p');

function showsTitle() {
    var title = document.querySelector('h1');
    var button = document.querySelector('#getTitle');
    button.addEventListener('click', function () {
        console.log(title.getAttribute('class'));
    });
}

function addParagraphAttribute() {
    var button = document.querySelector('#setID');
    button.addEventListener('click', function () {
        paragraph.setAttribute('id', 'first-paragraph');
    });
}

function createAttribute() {
    var button = document.querySelector('#newAttribute');
    button.addEventListener('click', function () {
        console.log(paragraph.dataset.new);
    });
}

showsTitle();
addParagraphAttribute();
createAttribute()