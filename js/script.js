showPassw = () => {
    let passw = document.getElementById("passw");

    if (passw.type == "password") {
        passw.type = "text";
        document.getElementById("show").style.display = 'none';
        document.getElementById("hide").style.display = "block";
    } else {
        passw.type = "password";
        document.getElementById("show").style.display = 'block';
        document.getElementById("hide").style.display = "none";
    }
}