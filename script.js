const slike = document.querySelectorAll(".slike");
const zvuk = document.querySelector("#zvuk");
const naziviZemalja = document.querySelectorAll(".naziviZemalja");
let pesma = "";
let zemlja = "";
let opis = "";
let cssLink = "<link rel='stylesheet' href='style.css'/>";
let body = "<body id='prozor'></body>";
/*
Vise o automatskom pustanju zvuka na veb stranici i
objasnjenje zasto se u konzoli ispusuje error
https://developer.chrome.com/blog/autoplay/
*/
/*mogla je i petlja po nazivima Zemalja jer je isto. Jednak je broj
zastava zemalja koliko i naziva*/
for (let i = 0; i < slike.length; i++) {

    slike[i].addEventListener('mouseover', function () {

        if (slike[i].id === "albanija-zastava")
            pesma = "Hymni_i_Flamurit_instrumental.wav"

        else if (slike[i].id === "hrvatska-zastava")
            pesma = "Lijepa_nasa_domovino_instrumental.wav";

        else if (slike[i].id === "madjarska-zastava")
            pesma = "Hungarian_national_anthem,_performed_by_the_United_States_Navy_Band_(1997_arrangement).wav";

        else if (slike[i].id === "makedonija-zastava")
            pesma = "North_Macedonia's_national_anthem_(instrumental).wav";

        else if (slike[i].id === "crna_gora-zastava")
            pesma = "National_Anthem_of_Montenegro.wav";

        else if (slike[i].id === "srbija-zastava")
            pesma = "Serbian_national_anthem,_instrumental.wav";

        else if (slike[i].id === "bosna-zastava")
            pesma = "BihHimna.wav";

        else if (slike[i].id === "bugarska-zastava")
            pesma = "Mila_Rodino_instrumental.wav";

        else if (slike[i].id === "rumunija-zastava")
            pesma = "Desteapta-te,_romane!.wav";

        zvuk.src = `himne/${pesma}`;
        zvuk.play();
    });

    slike[i].addEventListener('mouseout', function () {
        zvuk.pause();
    });

    naziviZemalja[i].addEventListener('click', function () {

        if (naziviZemalja[i].id === "albanijaNaziv") {
            zemlja = "Албанија";
            opis = "Главни град: Тирана Број становника: Површина: km";

        }
        else if (naziviZemalja[i].id === "hrvatskaNaziv") {
            zemlja = "Хрватска";
            opis = 'Главни град: Загреб Број становника: Површина: km';

        }
        else if (naziviZemalja[i].id === "madjarskaNaziv") {
            zemlja = "Мађарска";
            opis = 'Главни град: Будимпешта Број становника: Површина: km';
        }
        else if (naziviZemalja[i].id === "makedonijaNaziv") {
            zemlja = "Македонија";
            opis = 'Главни град: Скопље Број становника: Површина: km';
        }
        else if (naziviZemalja[i].id === "crna_goraNaziv") {
            zemlja = "Црна Гора";
            opis = 'Главни град: Подгорица Број становника: Површина: km';
        }
        else if (naziviZemalja[i].id === "srbijaNaziv") {
            zemlja = "Србија ";
            opis = 'Главни град: Београд Број становника: 6,945 милиона Површина: 88,361 km';

        }
        else if (naziviZemalja[i].id === "bosnaNaziv") {
            zemlja = "Босна и Херцеговина";
            opis = 'Главни град: Сарајево Број становника: Површина: km';

        }
        else if (naziviZemalja[i].id === "bugarskaNaziv") {
            zemlja = "Бугарска";
            opis = 'Главни град: Софија Број становника: Површина: km';
        }
        else if (naziviZemalja[i].id === "rumunijaNaziv") {
            zemlja = "Румунија";
            opis = 'Главни град: Букурешт Број становника: Површина: km';
        }

        let title = `<title>${zemlja} - Основни подаци -</title>`;
        let tekst = `<h3 id="naslov">${zemlja.toUpperCase()}</h3><p class="opis">${opis}<sup>2</sup></p>`;
        let prozor = window.open('', '', 'width=400,height=400, top=700, left=850');
        prozor.document.querySelector("html").innerHTML = title + cssLink + body + tekst;
    });
}
