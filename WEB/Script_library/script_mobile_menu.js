let push1 = 0;

function start_mobile_menu() {
    document.getElementById("mobile_bok_menu").style.width = "100%";
}

function end_mobile_menu() {
    document.getElementById("mobile_bok_menu").style.width = "0%";
    if (push1 == 0) {
        push1 = 1;
    }
    kurs_web_fun();
}
/*Расрывающая иконка*/
document.getElementById("svg1").style.display = "none";
/*Пункты раскрывающего списка*/
document.getElementById("leson_spisok_menu_id").style.display = "none";

function kurs_web_fun() {
    /*Раскрыт список*/
    if (push1 == 0) {
        push1 = 1;
        document.getElementById("vid1").style.display = "none";
        document.getElementById("vid2").style.display = "none";
        document.getElementById("vid3").style.display = "none";
        document.getElementById("kurs_web").style.transition = "0.3s";
        document.getElementById("kurs_web").style.marginTop = "50%";
        document.getElementById("svg1").style.display = "block";
        document.getElementById("svg2").style.display = "none";
        document.getElementById("leson_spisok_menu_id").style.display = "block";
        return;
    }

    /*Закрыт список*/
    if (push1 == 1) {
        push1 = 0;
        document.getElementById("vid1").style.display = "block";
        document.getElementById("vid2").style.display = "block";
        document.getElementById("vid3").style.display = "block";
        document.getElementById("kurs_web").style.transition = "0.3s";
        document.getElementById("kurs_web").style.marginTop = "0";
        document.getElementById("svg2").style.display = "block";
        document.getElementById("svg1").style.display = "none";
        document.getElementById("leson_spisok_menu_id").style.display = "none";
        return;
    }
}