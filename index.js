document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu-toggle');
    let menuLinks = document.getElementById('menulinks');
    let closeBtn = document.getElementById('close-btn');

    // function to add or remove the menulinks when u click on the toggle
    menuToggle.addEventListener('click', function() {
        // menuLinks.classList.toggle('active'); //active is d name of the class & is wat u will call on the css

        // displays the menu button when u click on the toggle
        menuLinks.classList.add('active');
    })
    // closes the toggle when u click on the X
    closeBtn.addEventListener('click', function() {
        menuLinks.classList.remove('active')

    })
})