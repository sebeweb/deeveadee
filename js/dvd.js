var URL = "http://deeveadee.my/";
var CONTENT = $("#result");

$().ready(function () {
    getDvds();
    getDvdOfTheMonth();
});
function getDvds() {
    $.ajax({
        url: URL + "dvd/getDvd",
        async: true,
        type: "GET",
        datatype: "json",
        success: function (data) {
            createDivDvds(data);
        },
        error: function () {
            alert("problème");
        }
    });

}
function getDvdOfTheMonth() {
    $.ajax({
        url: URL + "accueil/getDvdOfTheMonth",
        async: true,
        type: "GET",
        datatype: "json",
        success: function (data) {
            createDivDvdOfTheMonth(data);
        },
        error: function () {
            alert("problème");
        }
    });

}

function createDivDvds(dvds) {
    div = document.createElement("div");
//    $("#dvdOfTheMonth").append(div);
    $("#result").append(div);
    generateContentForTableDvd(dvds);
    $(div).addClass("container");
}

function createDivDvdOfTheMonth(dvds) {
    divMonth = document.createElement("div");
    $("#dvdOfTheMonth").append(divMonth);
    generateContentForDvdOfTheMonth(dvds);
    $(divMonth).addClass("container");
}

function generateContentForTableDvd(dvds) {
    $.each(dvds, function () {
        $(div).append(getLineForDivDvd(this));
    });
}
function generateContentForDvdOfTheMonth(dvds) {
    $.each(dvds, function () {
        $(divMonth).append(getLineForDivDvdOfTheMonth(this));
    });
}

function getLineForDivDvd(dvd) {

    var divLine = document.createElement("div");
    $(divLine).addClass("col-lg-12 text-center dvd");

    var divOffset = document.createElement("div");
    $(divOffset).addClass("col-lg-offset-2");
    var title = document.createElement("h2");
    var divImg = document.createElement("div");
    $(divImg).addClass("col-lg-2");
    var divTitle = document.createElement("div");
    $(divTitle).addClass("col-lg-12");
    var divContent = document.createElement("div");
    $(divContent).addClass("col-lg-8");

    var imgDvdSrc = document.createElement("img");
    imgDvdSrc.src = "/image/" + dvd.img;
    $(imgDvdSrc).addClass("img-thumbnail");
    $(imgDvdSrc).attr("width", "200");
    var dvdTitle = dvd.titre;

    $(divTitle).append("<h3>" + dvdTitle + "</h3> <br>");
    $(divContent).append(divTitle);
    $(divContent).append("<h4>Réalisateur : " + dvd.realisateur + "</h4>");
    $(divContent).append("<h4>Année de sortie : " + dvd.annee_sortie + "</h4>");

    $(divImg).append(imgDvdSrc);
    $(divLine).append(divOffset);
    $(divLine).append(divImg);
    $(divLine).append(divContent);

    /* Redirect at the dvd single page*/
//    $(lineDvd).click(function () {
//        window.location.href = "dvd/" + dvd.id_dvd;
//    });
    return divLine;
}

function getLineForDivDvdOfTheMonth(dvd) {

    var divLineMonth = document.createElement("div");
    $(divLineMonth).addClass("col-lg-12 text-center dvdOTM dvdContent2");

    var divOffset = document.createElement("div");
    $(divOffset).addClass("col-lg-offset-3");
    var divImg = document.createElement("div");
    $(divImg).addClass("col-lg-12");
    var divTitle = document.createElement("div");
    $(divTitle).addClass("col-lg-12 ");
    var divContent = document.createElement("div");
    $(divContent).addClass("col-lg-12");

    var imgDvdSrc = document.createElement("img");
    imgDvdSrc.src = "/image/" + dvd.img;
    $(imgDvdSrc).addClass("img-thumbnail");
    $(imgDvdSrc).attr("width", "250");
    var dvdTitle = dvd.titre;

    $(divTitle).append("<h3>" + dvdTitle + "</h3> <br>");
    $(divContent).append(divTitle);
//    $(divContent).append("<h4>Réalisateur : " + dvd.realisateur + "</h4>");
//    $(divContent).append("<h4>Année de sortie : " + dvd.annee_sortie + "</h4>");
//    $(divContent).append("<h4 class='warningExemplaire'>Plus que " + dvd.nbr_exemplaire + " exemplaires restant !</h4>");

    $(divImg).append(imgDvdSrc);

    $(divLineMonth).append(divOffset);
    $(divLineMonth).append(divContent);
    $(divLineMonth).append(divImg);

    /* Redirect at the dvd single page*/
//    $(lineDvd).click(function () {
//        window.location.href = "dvd/" + dvd.id_dvd;
//    });
    return divLineMonth;
}