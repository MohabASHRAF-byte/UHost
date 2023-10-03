var backdrop = document.querySelector('.droplist');
var model = document.querySelector('.modal')
var planButtons = document.querySelectorAll('.plans-article .button')
var sideNavButt = document.querySelector('.toggle-button')
var modelNoAnswer = document.querySelector('.modal__action--negative')
var sideNav = document.querySelector('.mobile-nav')

//

// click side bar buttons  
sideNavButt.addEventListener('click', function () {
    backdrop.classList.add('open');
    sideNav.classList.add('open');
})
// colsing the side bar
backdrop.addEventListener('click', function () {
    closeModel();
    if (model) {
        model.classList.remove('open')
    }
});
// closing confirm menu
if (modelNoAnswer) {
    modelNoAnswer.addEventListener('click', function () {
        model.classList.remove('open')
        closeModel()
    })
}

function closeModel() {
    backdrop.classList.remove('open')
    sideNav.classList.remove('open')
}

for (var i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener('click', function () {
        // backdrop.style.display = 'block';
        // model.style.display = 'block';
        backdrop.classList.add('open');
        model.classList.add('open');
    })
}













































