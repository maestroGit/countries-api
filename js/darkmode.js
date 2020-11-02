const btnDarkMode = document.getElementById('btn-dark-mode');
btnDarkMode.addEventListener('click',()=> {
    document.body.classList.toggle('dark-mode');

    if(document.body.className=== 'dark-mode') {
        btnDarkMode.innerHTML=`
        <i class="fas fa-moon"></i>
        Light Mode
        `
    } else {
        btnDarkMode.innerHTML=`
        <i class="far fa-moon"></i>
        Dark Mode
        `
    }
})
