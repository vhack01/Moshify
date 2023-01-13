
const collapse = document.querySelectorAll('.collapsible');
collapse.forEach(val => {
    val.addEventListener('click', function () {
        this.classList.toggle("collapsible--expanded");
    });
});


const nav_collapse = document.querySelectorAll('.nav');
nav_collapse.forEach(val => {
    val.addEventListener('click', function () {
        this.classList.toggle("nav--collapsible");
    });
});
