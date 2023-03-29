
document.getElementById("mark_read").addEventListener("click" , () => {
    document.getElementById("number_of_noti").style.display = "none";
    document.querySelectorAll(".dot").forEach(elem => {
        elem.style.display = "none";
    });
});