const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navigation ul li a').
    forEach(link => {
        console.log(activePage);
        console.log(link.href);
        if (link.href.includes(`${activePage}`)) {
            link.classList.add("current");
        }
    });