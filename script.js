const latwe = [
    ['Ile było trzech króli?', '3', 'Był jeden trzech król', 'Nieskończenie wiele', '471829'],
    ['Jaka marka jest znana za słynne trzy paski?', 'Adidas', 'Nike', 'Menelumpex', 'Tripoloski'],
    ['Dokończ modlitwę: "Odpuść nam nasze winy, jako i my odpuszczamy naszym..."', 'winowajcom', 'piwowajcom', 'nauczycielom', 'Ja nie odpuszczam nikomu!!!'],
    ['Gdzie znajduje się Sosnowski Park Narodowy?', 'Nie ma takiego parku', 'Tam gdzie Sosnowiec', 'W woj. lubelskim', 'W woj. irkuckim'],
    ['Kim był Jan Paweł I dla Jana Pawła II?', 'Poprzednikiem', 'Następcą', 'Przestępcą', 'Kuzynem'],
    ['Co obchodzimy 3 maja?', 'Uchwalenie konstytucji 3 maja', 'Dzień wolny od dnia wolnego od pracy', 'Święto flagi', 'Urodziny Wasilija Wołodina'],
    ['Kto napisał Pana Tadeusza?', 'Adam Mickiewicz', 'Pan Wołodyjowski', 'Pan Tadeusz', 'Henryk Sienkiewicz'],
    ['Kto jest wokalistą polskiego zespołu Akcent?', 'Zenon Martyniuk', 'James Hetfield', 'Karol Wojtyła', 'Joe Hawley'],
    ['Dokończ przysłowie: "Gdzie diabeł nie może..."', 'tam babę pośle', 'tam Tucka pomoże', 'to Zachodnie Pomorze', 'Jezus dosięgnie'],
    ['Jak ma na imię Syn Boży?', 'Jezus Chrystus', 'Jezus Chytrus Superstar', 'Abraham', 'Abrakadabra']
];
const srednie = [
    ['Jak ma na imię voxelbugged, twórca tej zacnej gry?', 'Jędrzej Kawa', 'Macij Hawyr', 'Andrzej Harkot', 'Jorge Mario Bergoglio'],
    ['Jakiego wyznania był św. Monitor?', 'Katolicyzm', 'Patolicyzm', 'PC Master Race', 'Prawosławie'],
    ['Jak miał na nazwisko Wolter?', 'Arouet', 'Wolter', 'White', 'François-Marie'],
    ['Jak nazywają się dwa koty voxela?', 'Pusia i Zenia', 'Kicikici i Belzebub Imperator', 'Mruczek i Miałczek', 'voxelbugged ma jednego kota'],
    ['Co oznacza skrót SPD?', 'Sozialdemokratische Partei Deutschlands', 'Sozialnational Partei Demokratische', 'spadaj', 'Polskie Stowarzyszenie Dyslektyków'],
    ['Kim z zawodu był Theodore John Kaczynski?', 'Matematykiem', 'Islamskim terrorystą', 'Liderem okręgu przemysłowego', 'Bratem Jarosława Kaczyńskiego'],
    ['Jak ma na pierwsze imię krzesło Juliusz dąb sonoma?', 'Placuch', 'Racuch', 'Mbambarabambavambahambalamba', 'idk'],
    ['Kto napisał Adama Mickiewicza?', 'Nikt', 'Pan Tadeusz', 'Dziady', 'Sofokles'],
    ['Kto napisał piosenkę "Narkotik Kal"?', 'Hard Bass School', 'DJ Blyatman', 'Arka Noego', 'Rosyjski faraon Adidaseusz'],
    ['Gdzie odbyła się bitwa pod Grunwaldem?', 'pod Grunwaldem', 'w 1410', 'w 1140', 'w 1989']
];
const trudne = [
    ['Dlaczego voxelbugged jest wielkim fanem zakolanówek?', 'Bo mają trzy paski, jak Adidas', 'Bo jest technikiem programistą', 'Bo jest femboyem', 'Bo jest sponsorowany przez ich producenta'],
    ['Jak poprawnie zagrać tzw. "The Lick" na pianinie?', 'A B C D B G A', 'E E E E E E', 'G A C A E E D', 'G E E F D D'],
    ['Który król stworzył Państwo Kościelne?', 'Pepin III Krótki', 'Państwo kościelne założył papież', 'Peppino Spaghetti', 'Karol I Wielki'],  
    ['Jak nazywał się nauczyciel w brytyjskim sitcomie pt. "Mind Your Language"?', 'Jeremy Brown', 'Grzegorz Braun', 'George White', 'Walter White'],
    ['Jaki jest wzór na pole powierzchni koła?', 'πr^2', '2hπ', 'π(w/o)^2', '2r^π'],
    ['Jaką grą voxelbugged wygrał Axxess Game Jam 2022?', 'Poltergeist Heist', 'Color Plane', 'Właśnie tą', 'Grand Theft Auto: San Escobar'],
    ['Co było przyczyną sporu między Antygoną a Kreonem?', 'Pochowanie Polinika', 'Pochowanie Sofoklesa', 'Wypicie ostatniego piwa w Tebach', 'Spór był między Antygoną a Winicjuszem'],
    ['Kto jest wokalistą rumuńskiego zespołu Akcent?', 'Adrian Sînă', 'Zenon Martyniuk', 'Klaus Iohannis', 'Wruk'],
    ['Jaki ciąg znaków nie spełnia wyrażenia regularnego [A-Z][a-z]{3,}?', 'Nie wiadomo', 'Janusz', 'Ufhund./3GUfj111,2iu', 'Katowice'],
    ['Kim był Ksiądz Robak dla Jacka Soplicy?', 'sobą', 'ojcem', 'kuzynem', 'sprzedawcą w monopolowym']
];


var pytanie = 1;
var poprawna = "";
var temporary = [];
var numarray = [1, 2, 3, 4]
var numerek = 0;

function randomize(values) //bardzo oryginalny kod do not steal
{
    let index = values.length,
      randomIndex;
  
    // While there remain elements to shuffle.
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
      // And swap it with the current element.
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }

    return values;
}
function generuj()
{
    if(pytanie < 6)
    {
        numerek = Math.floor(Math.random()*latwe.length);
        temporary = latwe[numerek]
        latwe.splice(numerek,1);
    }
    else if(pytanie < 11)
    {
        numerek = Math.floor(Math.random()*srednie.length);
        temporary = srednie[numerek]
        srednie.splice(numerek,1);
    }
    else
    {
        numerek = Math.floor(Math.random()*trudne.length);
        temporary = trudne[numerek]
        trudne.splice(numerek,1);
    }
    document.getElementById("pytanie").innerHTML = temporary[0];
    poprawna = temporary[1];
    randomize(numarray);
    document.getElementById("A").innerHTML = temporary[numarray[0]];
    document.getElementById("B").innerHTML = temporary[numarray[1]];
    document.getElementById("C").innerHTML = temporary[numarray[2]];
    document.getElementById("D").innerHTML = temporary[numarray[3]];
}
function odp(odpowiedz)
{
    if(document.getElementById(odpowiedz).innerHTML == poprawna)
    {
        pytanie++;
        if(pytanie == 16)
        {
            document.getElementById("gra").innerHTML = "<a id='wygrana'>Kongratulejszyns! Wygrałeś/łaś/łoś i udowodniłeś/łaś/łoś że nie jesteś debilem!</a> <br> <button onclick='location.reload();'>Zagraj ponownie?</button>";
        }
        else
        {
            document.getElementById("licznik").innerHTML = pytanie;
            generuj()
        }
    }
    else
    {
        document.getElementById("gra").innerHTML = "<a id='przegrana'>Niestety nie. Poprawna odpowiedź to: " + poprawna +".</a><br> <button onclick='location.reload();'>Spróbuj ponownie?</button>";
    }
    
}
generuj()
