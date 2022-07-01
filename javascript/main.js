// funciones para abrir y cerrar el sidebar
function openNav() {
    document.getElementById("sidebar-container").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display = "none";
}

function closeNav() {
    document.getElementById("sidebar-container").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";
}