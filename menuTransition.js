function openNav() {
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    body.classList.toggle("sidebar-close");
    const isClose = body.classList.contains("sidebar-close");
    if (isClose) {
        sidebar.style.width = '0px';
        mainContent.style.marginLeft = '0px';
    } else {
        sidebar.style.width = '300px';
        mainContent.style.marginLeft = '300px';
    }
}
// Hide yung menu bar pag nag scroll
function scrollFunction() {
    var openBtn = document.querySelector('.open-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        openBtn.classList.add('hidden');
    } else {
        openBtn.classList.remove('hidden');
    }
}