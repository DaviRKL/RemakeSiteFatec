function toogleSidebar(){
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px"){
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px"
    }
}