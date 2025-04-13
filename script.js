const myDiv = document.getElementById('myDiv');
const myParagraph = document.getElementById('myParagraph');

myParagraph.textContent = 'Le texte a été modifié';

myParagraph.style.backgroundColor = 'lightblue';
myParagraph.style.textAlign = 'center';

myDiv.addEventListener('click', function() {
    myParagraph.textContent = 'Un clic a été détecté';
});
