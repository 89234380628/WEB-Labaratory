<?php
header("HTTP/1.0 404 Not Found")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="imagetoolbar" content="no" />
    <title>404. Страница не найдена.</title>

<style>

@font-face {
    font-family: "Press Start 2P";
    font-style: normal;
    font-weight: 400;
    /* Браузер сначала попробует найти шрифт локально */
    src: /* Если не получилось, загрузит woff2 */
    url("/WEB/Fonts/Library/Press_Start_2P/PressStart2P-Regular.ttf")format("woff2");
}
@font-face {
    font-family: "Rubik Moonrocks";
    font-style: normal;
    font-weight: 400;
    /* Браузер сначала попробует найти шрифт локально */
    src: /* Если не получилось, загрузит woff2 */
    url("/WEB/Fonts/Library/Rubik_Moonrocks/RubikMoonrocks-Regular.ttf")format("woff2");
}

    html,body{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: auto;
    }
    .block_for_gif{
        width: 50%;
        height: 50%;
        display: block;
        margin: 0 auto;
        margin-top: 10%;
        background-image: url("/WEB/ERROR/error_404.gif");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    .out1,.out2{
        position: absolute;
        text-align: center;
        width: calc(100% - 10px);
        display: block;
        margin: 0 auto;
        font-size: 40px;
        font-family: 'Press Start 2P';
        cursor: default;
        user-select: none;
        line-height: 50px;
        padding-left: 5px;
        padding-right: 5px;

    }
    .out1{
        top: 10%;
    }
    .out2{
        top: 20%;
    }
    
a{
    font-family: 'Rubik Moonrocks';
    color:white;
    text-decoration: none;
}

    .button_for_page{
        width: max-content;
        padding: 10px;
        outline: 3px solid black;
        display: block;
        margin:0 auto;
        font-size: 25px;
        cursor: pointer;
        user-select: none;
        background-color: #ee9403;
    }

    a .button_for_page:hover{
        transition-delay: 0.1s;
        box-shadow: 5px 3px 5px black;
    }

    @media screen and (min-width:1086px) and (max-width:1300px){
        .out1,.out2{
            font-size: 30px;
        }
    }
    @media screen and (min-width:811px) and (max-width:1085px){
        .out1,.out2{
            font-size: 25px;
        }
        .block_for_gif{
            margin-top: 20%;
        }
    }

    @media screen and (min-width:751px) and (max-width:810px){
        .out1,.out2{
            font-size: 25px;
        }
        .block_for_gif{
            margin-top: 30%;
        }
    }
    
@media screen and (min-width:600px) and (max-width:750px){
    .out1,.out2{
            font-size: 20px;
        }
        .out1{
        top: 10%;
    }
        .out2{
        top: 20%;
    }
        .block_for_gif{
            margin-top: 30%;
            width:100%;
        }
}

@media screen and (min-width:450px) and (max-width:599px){
    .out1,.out2{
            font-size: 20px;
        }
        .out1{
        top: 5%;
    }
        .out2{
        top: 20%;
    }
    .block_for_gif{
            margin-top: 30%;
            width:100%;
        }
}

@media screen and (min-width:350px) and (max-width:449px){
    .out1,.out2{
            font-size: 16px;
        }
        .out1{
        top: 5%;
    }
        .out2{
        top: 20%;
    }
    .block_for_gif{
            margin-top: 30%;
            width:100%;
        }
}

@media screen and (max-width:349px){
    .out1,.out2{
            font-size: 14px;
        }
        .out1{
        top: 2.5%;
    }
        .out2{
        top: 15%;
    }
    .block_for_gif{
            margin-top: 30%;
            width:100%;
        }
        .button_for_page{
            font-size: 16px;
        }
}
</style>

</head>
<body>
    <div class="out1">
        УПС. Вы набрели на ошибку 404!
    </div>
    <div class="out2">
        Ни чего страшного не произошло, просто данной страницы не существует :)
    </div>
<div class="block_for_gif"></div>
<a href="/WEB/start_page.html"><div class="button_for_page">
    Отбыть к началу
</div></a>
</body>
</html>