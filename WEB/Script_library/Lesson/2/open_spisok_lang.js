let sost = 0;
let sost2 = 0;

document.getElementById('id_button_spisok_lang').innerHTML = 'Раскрыть список &#11015;';
document.getElementById("id_button_spisok_lang").style.marginBottom = "0";
document.getElementById('id_button_spisok_code').innerHTML = 'Раскрыть список &#11015;';
document.getElementById("id_button_spisok_code").style.marginBottom = "0";

function open_spisok_lang() {
    if (sost == 0) {
        sost = 1;
        document.getElementById('id_button_spisok_lang').innerHTML = 'Скрыть список &#11014;';
        document.getElementById("table_spisok_lang").style.display = "block";
        document.getElementById("table_spisok_lang").style.width = "fit-content";
        document.getElementById("table_spisok_lang").style.marginLeft = "auto";
        document.getElementById("table_spisok_lang").style.marginRight = "auto";
        document.getElementById("id_button_spisok_lang").style.marginBottom = "25px";
        return
    }

    if (sost == 1) {
        sost = 0;
        document.getElementById('id_button_spisok_lang').innerHTML = 'Раскрыть список &#11015;';
        document.getElementById("table_spisok_lang").style.display = "none";
        document.getElementById("id_button_spisok_lang").style.marginBottom = "0";
        return
    }
}

function open_spisok_code() {
    if (sost2 == 0) {
        sost2 = 1;
        document.getElementById('id_button_spisok_code').innerHTML = 'Скрыть список &#11014;';
        document.getElementById("table_spisok_code").style.display = "block";
        document.getElementById("table_spisok_code").style.width = "fit-content";
        document.getElementById("table_spisok_code").style.marginLeft = "auto";
        document.getElementById("table_spisok_code").style.marginRight = "auto";
        document.getElementById("id_button_spisok_code").style.marginBottom = "25px";
        return
    }

    if (sost2 == 1) {
        sost2 = 0;
        document.getElementById('id_button_spisok_code').innerHTML = 'Раскрыть список &#11015;';
        document.getElementById("table_spisok_code").style.display = "none";
        document.getElementById("id_button_spisok_code").style.marginBottom = "0";
        return
    }
}