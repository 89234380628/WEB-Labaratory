document.getElementById("panel_cod_for_HTML").style.display = "block";
document.getElementById("panel_cod_for_CSS").style.display = "none";
document.getElementById("panel_cod_for_JS").style.display = "none";

function Button_panel_cod_for_HTML() {
    document.getElementById("panel_cod_for_HTML").style.display = "block";
    document.getElementById("panel_cod_for_CSS").style.display = "none";
    document.getElementById("panel_cod_for_JS").style.display = "none";
}

function Button_panel_cod_for_CSS() {
    document.getElementById("panel_cod_for_HTML").style.display = "none";
    document.getElementById("panel_cod_for_CSS").style.display = "block";
    document.getElementById("panel_cod_for_JS").style.display = "none";
}

function Button_panel_cod_for_JS() {
    document.getElementById("panel_cod_for_HTML").style.display = "none";
    document.getElementById("panel_cod_for_CSS").style.display = "none";
    document.getElementById("panel_cod_for_JS").style.display = "block";
}