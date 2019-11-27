document.getElementById("bigcontent").style.display = "none"
function bigMenu() {
    if (document.getElementById("bigcontent").style.display == "none") {
        document.getElementById("bigcontent").style.display = "block"
        document.getElementById("smallMenu").style.display = "none"
    }
    else {
        document.getElementById("bigcontent").style.display = "none"
        document.getElementById("smallMenu").style.display = "block"
}
}document.getElementById("smallcontent").style.display = "none"
function smallMenu() {
    if (document.getElementById("smallcontent").style.display == "none") {
        document.getElementById("smallcontent").style.display = "block"
    }
    else {
        document.getElementById("smallcontent").style.display = "none"
}
}