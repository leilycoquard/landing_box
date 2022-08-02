const tags = document.querySelectorAll('.tags');
const boxItem = document.querySelectorAll('.box-item');

let activeBtn = "all";

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
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}