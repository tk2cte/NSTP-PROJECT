let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

document.getElementById('productForm').addEventListener('submit', addProduct);

let salesChart;
let reportSalesChart;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const navOptions = document.querySelectorAll('.nav-option');
    navOptions.forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`.nav-option[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

showSection('home');
