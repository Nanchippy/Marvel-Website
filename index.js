function toggleBackground() {
    let body = document.getElementById("container-body");
    let navLinks = document.querySelectorAll(".menu li a");
    let introSections = document.querySelectorAll(".intro");
    let containerSections = document.querySelectorAll(".container");
    let inputButton = document.querySelector(".menu li input");

    body.classList.toggle('dark-background');

    if (body.classList.contains('dark-background')) {
        // Dark mode
        navLinks.forEach(link => {
            link.style.color = 'var(--bgcolor)';
        });

        introSections.forEach(section => {
            section.style.backgroundColor = '#121212';
        });

        containerSections.forEach(section => {
            section.style.backgroundColor = '#0e0e11';
            let h3 = section.querySelector("h3");
            if (h3) {
                h3.style.color = 'white';
            }
        });
        inputButton.style.backgroundColor = 'transparent';
        inputButton.style.color = 'white';
    } else {
        // Light mode
        navLinks.forEach(link => {
            link.style.color = 'black';
        });

        introSections.forEach(section => {
            section.style.backgroundColor = 'whitesmoke';
        });

        containerSections.forEach(section => {
            section.style.backgroundColor = '#dcdcdc';
            let h3 = section.querySelector("h3");
            if (h3) {
                h3.style.color = 'black';
            }
        });
         inputButton.style.backgroundColor = 'transparent';
        inputButton.style.color = 'black';
    }
}
