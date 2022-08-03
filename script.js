const tags = document.querySelectorAll('.tags'); //catégories dans le menu
const boxItem = document.querySelectorAll('.box-item'); //cards pour les box

let activeBtn = "all"; //de base : affiche toutes les cards

showBoxMenu(activeBtn);

tags.forEach((li) => {
    li.addEventListener('click', () => {
        resetActiveBtn();
        showBoxMenu(li.id);
        li.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    tags.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showBoxMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    boxItem.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid"; //affiche tous les items contenant la classe de activeBtn (même nom dans id et class)
        } else {
            item.style.display = "none"; //sinon caché
        }
    });
}