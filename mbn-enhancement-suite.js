// ==UserScript==
// @name           MonBureauNumérique Enhancement Suite
// @description    Ajoute des fonctions utiles à MonBureauNumérique (ENT Grand-Est)
// @include        https://*.monbureaunumerique.fr/*
// @match          https://*.monbureaunumerique.fr/*
// @run-at         document-idle
// @author         NonozgYtb
// @icon           https://cdn.monbureaunumerique.fr/images/favicon.ico
// @downloadURL    https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-enhancement-suite.js
// @updateURL      https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-enhancement-suite.js
// @version        1.0
// ==/UserScript==

const evalInHome = true;
// Carte Evaluation dans la page d'Accueil
// Rating Card on the Home page

const average = true;
// Ajoute une ligne Moyenne dans le tableau Evaluation (y compris dans la page d'Accueil si "evalInHome" = est activé
// Adds an Average row in the Evaluation table (including in the Home page if "evalInHome" = is activated

const consoleClear = true;
// Effacez la console après avoir exécuté le script
// Clear the console after running the script

(function () {
    'use strict';

    if (average)(function () {
        var elements = document.getElementsByClassName("yui-dt-liner bulletin-note bulletin-note-eleve");

        function moyenne(e, t) {
            var l = 0,
                n = 0;
            return Object.keys(e).forEach(function (t, i) {
                n += e[t], l++
            }, e), e = void 0, n /= l
        }

        function addDecimal(e, t = 0) {
            e = !t ?
                Math.round(10 * e) / 10 : Math.round(100 * e) / 100;
            return (e = new String(e)).include(".") ? e : e + ".0"
            //return (e = new String(e)).include(".") ? e : e + ".0"
        }
        if (elements != null) {
            var tmp, matieres = [];
            for (let e = 0; e < document.getElementsByClassName("yui-dt-liner bulletin-note bulletin-note-eleve").length; e++) {
                if (tmp = parseFloat(new String(document.getElementsByClassName("yui-dt-liner bulletin-note bulletin-note-eleve")[e].innerText).replace(",", ".")),
                    aa = document.getElementsByClassName("bulletin-matiere-libelle ellipse fw-700")[e].innerText, "number" != typeof matieres[aa]) {
                    matieres[aa] = tmp;
                } else {
                    matieres[aa] = moyenne([matieres[aa], tmp]);

                    /*var aaa = document.getElementsByClassName("bulletin-matiere-libelle ellipse fw-700")[5].parentElement.parentElement.parentElement.parentElement.lastElementChild.firstChild.firstChild.children;

                    for (let e = 0; e < aaa.length; e++) {
                        console.log([aaa[e]], e);
                        //aaa[e].classList.add("devoir-facultatif"), aaa[e].children[0].classList.add("devoir-facultatif-note"), aaa[e].children[0].style.color = "#bababa", aaa[e].children[1].classList.add("devoir-facultatif-bareme");
                    }*/

                    console.log(e)

                    var aaa = document.getElementsByClassName("bulletin-matiere-libelle ellipse fw-700")[e].parentElement.parentElement.parentElement.parentElement;
                    //console.log(aaa.getElementsByClassName("list-devoirs-eleve")[0].children);
                    Array.prototype.slice.call(aaa.getElementsByClassName("list-devoirs-eleve")[0].children).forEach(element => {
                        element.classList.add("devoir-facultatif");
                        element.children[0].classList.add("devoir-facultatif-note");
                        element.children[1].classList.add("devoir-facultatif-bareme");
                    });
                    aaa.style.color = "#6e6e6e";
                    aaa.firstChild.style.transform = "translateX(15px)";
                    aaa.firstChild.style.boxShadow = "-6px 0 #6e6e6e4f"
                }
            }
            var tr = document.createElement("tr");

            var name = document.getElementsByClassName("user")[0].children[0].innerText;

            tr.classList = "yui-dt-last yui-dt-odd";

            tr.innerHTML = `
            <td headers="yui-dt0-th-matiere" class="yui-dt0-col-matiere yui-dt-col-matiere yui-dt-sortable yui-dt-first" style="width: 150px;">
                <div class="yui-dt-liner">
                    <div class="bulletin-matiere-ligne">
                        <div class="bulletin-matiere-libelle ellipse fw-700" title="MOYENNE">
                            MOYENNE
                        </div>
                        <div class="releve-matiere-professeur f-left c-both ellipse" title="${name}">
                            ${name}
                        </div>
                    </div>
                </div>
            </td>
            <td headers="yui-dt0-th-yui-dt-col1 yui-dt0-th-moyenneEleve " class="yui-dt0-col-moyenneEleve yui-dt-col-moyenneEleve yui-dt-sortable" style="width: 30px;">
                <div class="yui-dt-liner bulletin-note bulletin-note-eleve" id="__moyenne__">
                </div>
            </td>
            <td headers="yui-dt0-th-yui-dt-col1 yui-dt0-th-nombreDevoirComptabilises " class="yui-dt0-col-nombreDevoirComptabilises yui-dt-col-nombreDevoirComptabilises yui-dt-sortable" style="width: 30px;">
                <div class="yui-dt-liner bulletin-note">
                    <div class="txt-center" id="__notes__">
                    </div>
                </div>
            </td>
            <td headers="yui-dt0-th-yui-dt-col4 yui-dt0-th-moyenneClasse " class="yui-dt0-col-moyenneClasse yui-dt-col-moyenneClasse" style="width: 30px;">
                <div class="yui-dt-liner bulletin-note" id="__tagsmoy__">
                </div>
            </td>
            <td headers="yui-dt0-th-yui-dt-col4 yui-dt0-th-moyenneClasseMin " class="yui-dt0-col-moyenneClasseMin yui-dt-col-moyenneClasseMin" style="width: 30px;">
                <div class="yui-dt-liner bulletin-note" id="__tagsmin__">
                </div>
            </td>
            <td headers="yui-dt0-th-yui-dt-col4 yui-dt0-th-moyenneClasseMax " class="yui-dt0-col-moyenneClasseMax yui-dt-col-moyenneClasseMax" style="width: 30px;">
                <div class="yui-dt-liner bulletin-note" id="__tagsmax__">
                </div>
            </td>
            <td headers="yui-dt0-th-notesEleve " class="yui-dt0-col-notesEleve yui-dt-col-notesEleve yui-dt-last">
                <div class="yui-dt-liner">
                    <div class="list-devoirs-eleve">
                    </div>
                </div>
            </td>
            `;

            if (document.getElementsByClassName("yui-dt-data")[0] != undefined)
                document.getElementsByClassName("yui-dt-data")[0].appendChild(tr);

            var aa = [];
            var bb = 0;

            document.getElementsByClassName("bulletin-note");

            for (let e = 0; e < document.getElementsByClassName("yui-dt-liner bulletin-note").length; e++) {
                String(document.getElementsByClassName("yui-dt-liner bulletin-note")[e].innerHTML).include("txt-center") && aa.push(document.getElementsByClassName("yui-dt-liner bulletin-note")[e].children[0]);
            }

            if (typeof aa.each == "function") {
                aa.each(e => {
                    "" == e.id && (bb += parseInt(e.innerHTML))
                });

                document.getElementById("__moyenne__").innerHTML = addDecimal(new String(moyenne(matieres).toString()), 1).replace(".", ",");
                document.getElementById("__notes__").appendChild(document.createTextNode(bb));
                document.getElementById("__tagsmoy__").innerHTML = addDecimal(new String(moyenne(matieres, !0).toString()), 1).replace(".", ",");

                var min = 1 / 0;
                var max = 0;

                Object.keys(matieres).forEach(function (e, t) {
                    let mat = matieres[e];
                    mat > max ? max = mat : mat < min && (min = mat)
                }, matieres);

                document.getElementsByClassName("yui-dt-liner bulletin-note").__tagsmin__.innerHTML = addDecimal(new String(min)).replace(".", ",");
                document.getElementsByClassName("yui-dt-liner bulletin-note").__tagsmax__.innerHTML = addDecimal(new String(max)).replace(".", ",");
            }
        }
    })();

    if (consoleClear) {
        console.clear();
        console.log("%cMonBureauNumérique Average ️\n%cMoyenne dans le tableau Evaluations%c\nFrom the/Provient de MBN Enhancement Suite%c\nAjoute des fonctions utiles à MonBureauNumérique (ENT Grand-Est)\n© 2020 NonozgYtb\nVersion: %c1.0%c\n\nSource: https://github.com/NonozgYtb/mbn-enhancement-suite\n", "font-size: 25px; font-family: Arial;font-weight: bold;", "font-size: 18px; font-family: Arial;font-weight: bold; padding: 10px 0;", "color: #aaa; font-style: italic;", "color: #aaa", "color: #009378", "color: #aaa")
    }

    if (evalInHome && location.search.includes("PAGE_ACCUEIL"))
        (() => {
            var c = document.createElement("iframe");
            c.style.visibility = "hidden";
            c.classList = "col--xs-12 col--lg-12";
            c.style.height = "-webkit-fill-available";
            c.id = "iiiidddd";
            c.src = "https://clg-anne-frank-illzach.monbureaunumerique.fr/sg.do?PROC=CONSULTER_RELEVE&amp;ACTION=AFFICHER_RELEVE_NOTES_ELEVE";
            var r = document.createElement("ul");
            var y = document.createElement("div");
            y.classList = "panel panel--outlined";
            y.appendChild(r);
            y.appendChild(c);
            var E = document.createElement("div");
            E.classList = "col--xs-12 col--lg-12";
            E.appendChild(y);
            null != document.getElementsByClassName("col--xs-12 col--lg-12 ") && document.getElementsByClassName("col--xs-12 col--lg-12 ").length >= 1 && null != document.getElementsByClassName("col--xs-12 col--lg-12 ")[document.getElementsByClassName("col--xs-12 col--lg-12 ").length - 1].parentElement && (document.getElementsByClassName("col--xs-12 col--lg-12 ")[document.getElementsByClassName("col--xs-12 col--lg-12 ").length - 1].parentElement.appendChild(E), r.outerHTML = '<ul class="tabs__list list--inlined text--center js-tabs__list" data-activeid="ACTUALITE_FEED" role="tablist"><li class="tabs__item"><a class="tabs__link  js-tabs__btn" role="tab" style="cursor: default;"><span class="">Evaluations</span></a></li></ul>', c.onload = function () {
                ! function () {
                    c.contentDocument.getElementsByClassName("content js-content")[0].outerHTML = "", c.contentDocument.getElementsByClassName("header")[0].outerHTML = "", c.contentDocument.getElementsByClassName("js-filters")[0].outerHTML = "", c.contentDocument.getElementsByTagName("thead")[0].outerHTML = "", c.contentDocument.getElementById("contenu").style.padding = "0", c.contentDocument.getElementById("contenu_deco").style.float = "unset", c.contentDocument.getElementById("modalCreerDocOfficeFranky_c").outerHTML = "", c.contentDocument.getElementById("_yuiResizeMonitor").outerHTML = "", c.contentDocument.getElementById("kui_messages").outerHTML = "", c.contentDocument.getElementById("page").style.minHeight = "unset", c.contentDocument.getElementById("page").style.padding = "0", c.contentDocument.getElementsByTagName("body")[0].style.overflow = "hidden", c.contentDocument.getElementsByTagName("table")[0].style.borderTop = "unset", c.contentDocument.getElementsByClassName("hidden")[0].outerHTML = "", c.contentDocument.getElementsByClassName("yui-dt-first")[0].classList.remove("yui-dt-first");
                    for (let e = 0; e < c.contentDocument.getElementsByClassName("yui-skin-sam")[0].getElementsByClassName("yui-dt-liner").length; e++) c.contentDocument.getElementsByClassName("yui-skin-sam")[0].getElementsByClassName("yui-dt-liner")[e].parentElement.style.background = "white";
                    c.style.height = c.contentDocument.getElementsByTagName("body")[0].offsetHeight + "px", c.contentDocument.getElementsByTagName("head")[0].innerHTML += "<style>.tabs__button:focus, .tabs__button:hover, .tabs__link:focus, .tabs__link:hover {color: unset} .bulletin-matiere-ligne .releve-matiere-professeur, .bulletin-matiere-ligne .bulletin-matiere-libelle {max-width: 110px;}</style>", c.style.visibility = "visible";
                    var e = c.contentDocument;
                    c.onchange = (() => {
                        c.contentDocument = e
                    })
                }()
            })
        })()

})();