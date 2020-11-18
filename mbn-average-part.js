// ==UserScript==
// @name           MonBureauNumérique Average
// @description    Met une ligne Moyenne dans MBN
// @include        http*://*.monbureaunumerique.fr/*
// @match          http*://*.monbureaunumerique.fr/*
// @run-at         document-idle
// @author         NonozgYtb
// @icon           https://cdn.monbureaunumerique.fr/images/favicon.ico
// @downloadURL    https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-average-part.js
// @updateURL      https://github.com/NonozgYtb/mbn-enhancement-suite/blob/master/mbn-average-part.js
// @version        1.1
// ==/UserScript==

const average = true;
// Ajoute une ligne Moyenne dans le tableau Evaluation (y compris dans la page d'Accueil si "evalInHome" = est activé
// Adds an Average row in the Evaluation table (including in the Home page if "evalInHome" = is activated

const consoleClear = true;
// Effacez la console après avoir exécuté le script
// Clear the console after running the script

(function () {
    'use strict';
    var url = window.location.hostname;
    if (!url.includes("moodle") && !url.includes("moodle")) {
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
            };
        })();
    }
    if (consoleClear) {
        console.clear();
        console.log("%cMonBureauNumérique Average ️\n%cMoyenne dans le tableau Evaluations%c\nFrom the/Provient de MBN Enhancement Suite\n%cAjoute des fonctions utiles à MonBureauNumérique (ENT Grand-Est)\n© 2020 NonozgYtb\nVersion: %c1.0%c\nActivation: %c" + (!url.includes("moodle") && !url.includes("moodle")).toString() + "%c\n\nSource: https://github.com/NonozgYtb/mbn-enhancement-suite\n", "font-size: 25px; font-family: Arial;font-weight: bold;", "font-size: 18px; font-family: Arial;font-weight: bold; padding: 10px 0;", "color: #aaa; font-style: italic;", "color: #aaa", "color: #009378", "color: #aaa", "color: #009378", "color: #aaa")
    }
})();
