const slike = document.querySelectorAll(".slike");
const zvuk = document.querySelector("#zvuk");
const naziviZemalja = document.querySelectorAll(".naziviZemalja");

/*
Vise o automatskom pustanju zvuka na veb stranici i
objasnjenje zasto se u konzoli ispusuje error
https://developer.chrome.com/blog/autoplay/
*/
/*mogla je i petlja po nazivima Zemalja jer je isto. Jednak je broj
zastava zemalja koliko i naziva*/
for(let i = 0; i < slike.length; i++)
{
    slike[i].addEventListener('mouseover', function() {
        if(slike[i].id === "albanija-zastava")
            zvuk.src = "himne/Hymni_i_Flamurit_instrumental.wav"

        else if(slike[i].id === "hrvatska-zastava")
            zvuk.src = "himne/Lijepa_nasa_domovino_instrumental.wav";

        else if(slike[i].id === "madjarska-zastava")
            zvuk.src = "himne/Hungarian_national_anthem,_performed_by_the_United_States_Navy_Band_(1997_arrangement).wav";

        else if(slike[i].id === "makedonija-zastava")
            zvuk.src = "himne/North_Macedonia's_national_anthem_(instrumental).wav";

        else if(slike[i].id === "crna_gora-zastava")
            zvuk.src = "himne/National_Anthem_of_Montenegro.wav";

        else if(slike[i].id === "srbija-zastava")
            zvuk.src = "himne/Serbian_national_anthem,_instrumental.wav";

        else if(slike[i].id === "bosna-zastava")
            zvuk.src = "himne/BihHimna.wav";

        else if(slike[i].id === "bugarska-zastava")
            zvuk.src = "himne/Mila_Rodino_instrumental.wav";

        else if(slike[i].id === "rumunija-zastava")
            zvuk.src = "himne/Desteapta-te,_romane!.wav";
        

        zvuk.play();
    });

     slike[i].addEventListener('mouseout', function() {
        zvuk.pause();
    });

     naziviZemalja[i].addEventListener('click', function() {

        let title = "";
        let cssLink="<link rel='stylesheet' href='style.css'/>";
        let body = "<body id='prozor'></body>";
        let tekst;
    
        if(naziviZemalja[i].id === "albanijaNaziv")
        {
            title = "<title>Албанија - Основни подаци -</title>";
            tekst = '<h3 id="naslov">АЛБАНИЈА</h3><p class="opis">Главни град: Тирана Број становника: Површина: km<sup>2</sup></p>';

        }
        else if(naziviZemalja[i].id === "hrvatskaNaziv") {
            title = "<title>Хрватска - Основни подаци -</title>";
            tekst = '<h3 id="naslov">ХРВАТСКА</h3><p class="opis">Главни град: Загреб Број становника: Површина: km<sup>2</sup></p>';

        }
        else if(naziviZemalja[i].id === "madjarskaNaziv") {
            title = "<title>Мађарска - Основни подаци -</title>";
            tekst = '<h3 id="naslov">МАЂАРСКА</h3><p class="opis">Главни град: Будимпешта Број становника: Површина: km<sup>2</sup></p>';
        }
        else if(naziviZemalja[i].id === "makedonijaNaziv") {
             title = "<title>Македонија - Основни подаци -</title>";
            tekst = '<h3 id="naslov">МАКЕДОНИЈА</h3><p class="opis">Главни град: Скопље Број становника: Површина: km<sup>2</sup></p>';
        }
        else if(naziviZemalja[i].id === "crna_goraNaziv") {
             title = "<title>Црна Гора - Основни подаци -</title>";;
            tekst = '<h3 id="naslov">ЦРНА ГОРА</h3><p class="opis">Главни град: Подгорица Број становника: Површина: km<sup>2</sup></p>';
        }
        else if(naziviZemalja[i].id === "srbijaNaziv") {
             title = "<title>Србија - Основни подаци -</title>";
            tekst = '<h3 id="naslov">СРБИЈА</h3><p class="opis">Главни град: Београд Број становника: 6,945 милиона Површина: 88,361 km<sup>2</sup></p>';

        }
        else if(naziviZemalja[i].id === "bosnaNaziv") {
             title = "<title>Босна и Херцеговина - Основни подаци -</title>";
            tekst = '<h3 id="naslov">БОСНА И ХЕРЦЕГОВИНА</h3><p class="opis">Главни град: Сарајево Број становника: Површина: km<sup>2</sup></p>';

        }
        else if(naziviZemalja[i].id === "bugarskaNaziv") {
             title = "<title>Бугарска - Основни подаци -</title>";
            tekst = '<h3 id="naslov">БУГАРСКА</h3><p class="opis">Главни град: Софија Број становника: Површина: km<sup>2</sup></p>';
        }
        
         else if(naziviZemalja[i].id === "rumunijaNaziv") {
             title = "<title>Румунија - Основни подаци -</title>";
            tekst = '<h3 id="naslov">РУМУНИЈА</h3><p class="opis">Главни град: Букурешт Број становника: Површина: km<sup>2</sup></p>';

         }
        let prozor = window.open('', '', 'width=400,height=400, top=700, left=850');
        prozor.document.querySelector("html").innerHTML = title+cssLink+body+tekst;
        
    });
}
