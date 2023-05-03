
let audio = document.getElementById("himna");


/*
konverzija .oga, .ogg fajlova u .wav
https://cloudconvert.com

*/

let flags = document.getElementsByClassName("flags");

let names = document.getElementsByClassName("naziviZemalja");

/*naziva zemalja ima isto koliko i zastava te cemo ih stavljati u istu petlju*/

for(i = 0; i < flags.length; i++)
{
    flags[i].addEventListener('mouseover', function (ev) {
        
//Pristup elementu nad kojim je pozvan event se vrsi preko ev.target
        if(ev.target.id == "serbiaFlag")
            audio.src += "Serbian_national_anthem,_instrumental.wav";

        else if(ev.target.id == "mneFlag")
            audio.src += "National_Anthem_of_Montenegro.wav";
        else if(ev.target.id == "albaniaFlag")
            audio.src += "Hymni_i_Flamurit_instrumental.wav";
        else if(ev.target.id == "macedoniaFlag")
            audio.src += "North_Macedonia's_national_anthem_(instrumental).wav";
        else if(ev.target.id == "bulgariaFlag")
            audio.src += "Mila_Rodino_instrumental.wav";
        else if(ev.target.id == "romaniaFlag")
            audio.src += "Desteapta-te,_romane!.wav";
        else if(ev.target.id == "hungaryFlag")
            audio.src += "Hungarian_national_anthem,_performed_by_the_United_States_Navy_Band_(1997_arrangement).wav"
        else if(ev.target.id == "croatiaFlag")
            audio.src += "Lijepa_nasa_domovino_instrumental.wav"
        else if(ev.target.id == "bihFlag")
            audio.src += "BihHimna.wav";

        audio.play();

    });

    flags[i].addEventListener("mouseout", function(ev){

        audio.src = "himne/";

        audio.pause();

    });


    names[i].addEventListener("click", function(ev){

        let cssLink="<link rel='stylesheet' href='style.css'/>";
        let body = "<body id='prozor'></body>";
        let title = "";
        let tekst = "";

        if(ev.target.id == "serbiaName")
        {
            title = "<title>Србија - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>СРБИЈА</h3><br><p>Главни град: Београд<br>Број становника: 6.945 милиона<br>Површина: 88,361 km<sup>2</sup></p>";
        } else if(ev.target.id == "croatiaName")
        {
            title = "<title>Хрватска - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>ХРВАТСКА</h3><br><p>Главни град: Загреб<br>Број становника: 3.871 милиона<br>Површина: 56,594 km<sup>2</sup></p>";
        } else if(ev.target.id == "bihName")
        {
            title = "<title>Босна и Херцеговина - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>БОСНА И ХЕРЦЕГОВИНА</h3><br><p>Главни град: Сарајево<br>Број становника: 3.531 милиона<br>Површина: 51,209 km<sup>2</sup></p>";
        } else if(ev.target.id == "montenegroName")
        {
            title = "<title>Црна Гора - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>ЦРНА ГОРА</h3><br><p>Главни град: Подгорица<br>Број становника: 604,966<br>Површина: 13,812 km<sup>2</sup></p>";
        } else if(ev.target.id == "albaniaName")
        {
            title = "<title>Албанија - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>АЛБАНИЈА</h3><br><p>Главни град: Тирана<br>Број становника: 2.821 милиона<br>Површина: 28,748 km<sup>2</sup></p>";
        } else if(ev.target.id == "macedoniaName")
        {
            title = "<title>Македонија - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>МАКЕДОНИЈА</h3><br><p>Главни град: Скопље<br>Број становника:  1.836 милиона<br>Површина: 25,713 km<sup>2</sup></p>";
        } else if(ev.target.id == "bulgariaName")
        {
            title = "<title>Бураска - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>БУГАРСКА</h3><br><p>Главни град: Софија<br>Број становника:  6.520 милиона<br>Површина: 110,993 km<sup>2</sup></p>";
        } else if(ev.target.id == "romaniaName")
        {
            title = "<title>Румунија - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>РУМУНИЈА</h3><br><p>Главни град: Букурешт<br>Број становника:  19.053 милиона<br>Површина: 238,397 km<sup>2</sup></p>";
        } else if(ev.target.id == "hungaryName")
        {
            title = "<title>Мађарска - Основни подаци</title>";
            
            tekst = "<br><h3 class='naslov'>МАЂАРСКА</h3><br><p>Главни град: Будимпешта<br>Број становника:  9.678 милиона<br>Површина: 93,030 km<sup>2</sup></p>";
        }

        let prozor = window.open('', '', 'width=400,height=400,top=400,left=150');
        prozor.document.write(title+cssLink+body+tekst);

    });
}