// ==UserScript==
// @name           MonBureauNumérique Eval in Home
// @description    Met une carte Evaluation dans la page d'Accueil de MBN
// @include        https://*.monbureaunumerique.fr/*
// @match          https://*.monbureaunumerique.fr/*
// @run-at         document-idle
// @author         NonozgYtb
// @icon           https://cdn.monbureaunumerique.fr/images/favicon.ico
// @downloadURL    https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-eval-in-home-part.js
// @updateURL      https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-eval-in-home-part.js
// @version        1.1
// ==/UserScript==

const evalInHome = true;
// Carte Evaluation dans la page d'Accueil
// Rating Card on the Home page

const consoleClear = true;
// Effacez la console après avoir exécuté le script
// Clear the console after running the script

(function () {
    'use strict';

    var url = window.location.hostname;
    if (!url.includes("moodle") && !url.includes("moodle")) {

        if (evalInHome && location.search.includes("PAGE_ACCUEIL")) {
            (() => {
                var c = document.createElement("iframe");
                c.style.visibility = "hidden";
                c.classList = "col--xs-12 col--lg-12";
                c.style.height = "-webkit-fill-available";
                c.id = "iiiidddd";
                c.src = `https://${window.location.hostname.split(".")[0]}.monbureaunumerique.fr/sg.do?PROC=CONSULTER_RELEVE&amp;ACTION=AFFICHER_RELEVE_NOTES_ELEVE`;
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
        }
    }
    if (consoleClear) {
        console.clear();
        console.log("%cMonBureauNumérique Eval. Section in Home Page ️\n%cSection Eval dans la Page d'Accueil de MBN%c\nFrom the/Provient de MBN Enhancement Suite\n%cAjoute des fonctions utiles à MonBureauNumérique (ENT Grand-Est)\n© 2020 NonozgYtb\nVersion: %c1.0%c\nActivation: %c" + (!url.includes("moodle") && !url.includes("moodle")).toString() + "%c\n\nSource: https://github.com/NonozgYtb/mbn-enhancement-suite\n", "font-size: 25px; font-family: Arial;font-weight: bold;", "font-size: 18px; font-family: Arial;font-weight: bold; padding: 10px 0;", "color: #aaa; font-style: italic;", "color: #aaa", "color: #009378", "color: #aaa", "color: #009378", "color: #aaa")
    }
})();
