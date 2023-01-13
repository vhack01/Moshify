
const collapse = document.querySelectorAll('.collapsible');
collapse.forEach(val => {
    val.addEventListener('click', function() {
       this.classList.toggle("collapsible--expanded");
    });
});

