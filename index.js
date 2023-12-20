function toggleBackground() {
    let body = document.getElementById("container-body");
    let navLinks = document.querySelectorAll(".menu li a");

    body.classList.toggle('dark-background');

    if (body.classList.contains('dark-background')) {
        // Dark mode
        navLinks.forEach(link => {
            link.style.color = 'var(--bgcolor)';
        });
    } else {
        // Light mode
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    }
}


// function toggleBackground() {
//     let body = document.getElementById("container-body");
//     body.classList.toggle('dark-background');
// }

// window.addEventListener("hashchange", function() { scrollBy(0, -70) })

