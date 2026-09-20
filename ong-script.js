let check = document.getElementById('check');

check.addEventListener('click', function(){
if(check.checked){
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove("dark-mode");
}

});
