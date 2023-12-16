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
    ['Jak ma na imię Syn Boży?', 'Jezus Chrystus', 'Jezus Chytrus Superstar', 'Abraham', 'Abrakadabra'],
    ['Jak nazywa się hymn Polski?', 'Mazurek Dąbrowskiego', 'Polonez Piłsudskiego', 'Hymn państwowy Uzbekistanu', 'Kochana wierzę w miłość'],
    ['Co to jest femboy?', 'Chłop który wygląda jak baba', 'Malezyjski nawóz sztuczny', 'np. Mariusz Pudzianowski', 'Najsilniejszy polski wojownik'],
    ['Co zazwyczaj mówimy na końcu modlitwy?', 'Amen', 'Alleluja', 'Afromental', 'Alhamdulillah'],
    ['Jak nazywa się największy gatunek żaby?', 'Goliat', 'Beata Szydło', 'Dużyżabus', 'Ropucha Szara'],
    ['Według legendy, kto założył Polskę?', 'Lech', 'Czech', 'Rus', 'Pambuk'],
    ['Jak nazywa się hymn Francji?', 'Marsylianka', 'Marsjanka', 'Napoleonka', 'Marsz Bonaparte'],
    ['Kto to jest pirat?', 'Przestępca na morzu', 'Poncjusz Pirat', 'Obywatel Somalii', 'Polak oglądający filmy'],
    ['Kto wykonał singiel pt. "Ściernisco"?', 'Golec uOrkiestra', 'Stolec uOrkiestra', 'Burmistrz San Francisco', 'The Beatles'],
    ['W jaką grę obecnie grasz?', 'Chyba quiz ale nie wiem', 'Picipolo na małe bramki', 'Bejeweled Twist', 'Gram w Cookie Clicker w drugim oknie'],
    ['Kto stworzył ten quiz?', 'voxelbugged, na dole jest napisane', 'Sam Bóg go zesłał', 'Generator sprawdzianów Nowej Ery', 'CD Projekt Red'],
    ['Skąd pochodzą czarni ludzie?', 'z Afryki', 'ze śląskiej kopalni węgla', 'z Francji', 'z fabryki'],
    ['Jak nazywa się największy konkurent Coca-Coli?', 'Pepsi', 'Polo Cockta', 'Piwo marki Żulerinho', 'Fanta'],
    ['Jak naukowo nazywa się sól kuchenna?', 'Chlorek sodu', 'Siurczan kutasu', 'Siarczan potasu', 'Azbestek plastiku'],
    ['W którym roku powstał Windows 95?', '1995', '1195', '95 mln. lat p.n.e.', 'Windows 95 nie istnieje, 11 jest najnowszy'],
    ['Dlaczego nie możemy palić ognisk w lesie?', 'Bo jest ryzyko pożaru', 'Ta? To pa tera', 'Bo strażacy przyjdą i zgaszą', 'Bo nie mamy zapalniczki'],
    ['Co oznacza skrót PiS?', 'Prawo i Sprawiedliwość', 'Prezes i Spółka', 'Piwo i Spirytus', 'Prawo i Zjednoczona Demokracja Autonomiczna']
];
const srednie = [
    ['Jak ma na imię voxelbugged, twórca tej zacnej gry?', 'Jędrzej Kawa', 'Macij Hawyr', 'Andrzej Harkot', 'Jorge Mario Bergoglio'],
    ['Jakiego wyznania był św. Monitor?', 'Katolicyzm', 'Patolicyzm', 'PC Master Race', 'Prawosławie'],
    ['Jak miał na nazwisko Wolter?', 'Arouet', 'Wolter', 'White', 'François-Marie'],
    ['Jak nazywają się dwa koty voxela?', 'Pusia i Zenia', 'Kicikici i Belzebub Imperator', 'Mruczek i Miałczek', 'voxelbugged ma jednego kota'],
    ['Co oznacza skrót SPD?', 'Sozialdemokratische Partei Deutschlands', 'Sozialnational Partei Demokratische', 'spadaj', 'Polskie Stowarzyszenie Dyslektyków'],
    ['Kim z zawodu był Theodore John Kaczynski?', 'Matematykiem', 'Islamskim terrorystą', 'Liderem okręgu przemysłowego', 'Bratem Jarosława Kaczyńskiego'],
    //['Jak ma na pierwsze imię krzesło Juliusz dąb sonoma?', 'Placuch', 'Racuch', 'Mbambarabambava Mbahambalamba', 'idk'],
    ['Kto napisał Adama Mickiewicza?', 'Nikt', 'Pan Tadeusz', 'Dziady', 'Sofokles'],
    ['Kto napisał piosenkę "Narkotik Kal"?', 'Hard Bass School', 'DJ Blyatman', 'Arka Noego', 'Adolf Dassler'],
    ['Gdzie odbyła się bitwa pod Grunwaldem?', 'pod Grunwaldem', 'w 1410', 'w 1140', 'w 1989'],
    ['Kto był faworytem rodziny cara rosyjskiego Mikołaja II?', 'Rasputin', 'Dvaputin', 'Triputin', 'Vladimir Putin'],
    ['Jakiego aktora nie lubi moja mama w Barwach Szczęścia?', 'Rolnickiego', 'Rolnika który szuka żony', 'Rysia z Klanu', 'tego o'],
    ['Jak nazywa się pierwszy utwór na pierwszym albumie zespołu Tally Hall?', 'Good Day', 'Welcome to Tally Hall', 'Świat według Kiepskich', 'Koko Koko Euro Spoko'],
    ['Jak nazywa się obecny premier Polski?', 'Donald Tusk', 'Mateusz Morawiecki', 'gen. Wojciech Jaruzelski', 'Ramzan Achmatowicz Kadyrow'],
    ['Co znajdziemy na stronie kanyewest.eu?', 'Najlepszy fanclub Kanyego Westa', 'Oficjalną stronę Kanyego Westa', 'Oficjalną stronę Kanyego Easta', 'Sens życia'],
    ['Kto wygrał polskie wybory prezydenckie w 2010 roku?', 'Bronisław Komorowski', 'Paweł Panas', 'Jarosław Kaczyński', 'Polska ma premiera a nie prezydenta'],
    ['Jakie słowa znajdziemy w utworze "Przez twe oczy zielone"?', 'O miłość walczyć to nie wstyd', 'O miłość walczyć to nie grzech', 'Makumba makumba makumba ska', 'Пацаны, наркотик КАЛ, В школе в коробке сдавал'],
    ['W eposie "Pan Tadeusz", jak nazywał się żyd grający na cymbałach?', 'Jankiel', 'Cymbał to jesteś ty!', 'Bibi', 'Nie było takiej postaci'],
    ['Jak nazywa się gładka warstwa lodu pokrywająca podłoże?', 'Gołoledź', 'Goło leć', 'Soplica', 'Lodzica'],
    ['Gdzie leży San Escobar?', 'W umyśle pewnego ministra spraw zagranicznych', 'W Ameryce Południowej', 'W Afryce Środkowej', 'W Ameryce Północnej'],
    ['Jaki trunek jest najbardziej popularny w woj. lubelskim?', 'Wódka', 'Piwo', 'Widać zabory...', 'Spanish Brandy!'],
    ['Jak ma na nazwisko Lewandowski?', 'Lewandowski', 'Robert', 'Ronaldinho', 'Mariusz'],
    ['Jakiego koloru jest czarna skrzynka w samolocie?', 'Pomarańczowego', 'Czarnego', 'Zależy od marki', 'Żadnego'],
    ['Dokończ zdanie: "Czym chata bogata..."', 'tym rada', 'co ukradnie tata', 'tak spada', 'sam w nie wpada'],
    ['Czy odpowiedziałeś/łaś poprawnie na poprzednie pytanie?', 'Tak', 'Nie', 'Nie pamiętam', 'Tak, ale odpowiem na to niepoprawnie'],
    ['Jak nazywa się sławny ksiądz z Sandomierza?', 'Ojciec Mateusz', 'Ojciec Rydzyk', 'Ojciec Tadeusz', 'Ojciec Magda Gessler']
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
    ['Kim był Ksiądz Robak dla Jacka Soplicy?', 'Sobą', 'Ojcem', 'Kuzynem', 'Sprzedawcą w monopolowym'],
    ['Jaka firma produkuje samochód Lamborghini?', 'Volksvagen Group', 'Fiat', 'Ekonomik Zamość sp. z o.o.', 'Wehrmacht Group'],
    ['Jak nazywa się członek amerykańskiego zespołu Tally Hall który nosi niebieski krawat?', 'Zubin Sedghi', 'Joe Hawley', 'Joe Mama', 'Cyrus II Wielki'],
    ['Jak nazywał się układ ZSRR który powstał jako reakcja na NATO?', 'Układ Warszawski', 'Układ Moskiewski', 'PATOLA', 'Ruskij Pakt Ochronnyj'],
    ['Jaki tytuł miała Kay Faraday z gry Ace Attorney: Investigations?', 'The Great Thief Yatagarasu', 'Chytra baba z Kalifornii', 'Hoxton', 'Phoenix Wright'],
    ['Jak nazywa się główny antagonista serialu Breaking Bad?', 'Gustavo Fring', 'Gustavo Pierdollini', 'Sus Amogus', 'Los Pollo Hermano'],
    ['W którym roku została opublikowana gra SimCity 2000?', '1993', '2000', '2020', '966'],
    ['Jak zmarł 39 prezydent USA, Jimmy Carter?', 'Jimmy Carter żyje!', 'W zamachu na Jana Pawła MCCXXVI', 'Z przyczyn naturalnych w hospicjum', 'Został postrzelony'],
    ['W jakim rytmie jest utrzymana kolęda "Bóg się rodzi"?', 'Poloneza', 'Walca', 'Stożka', 'Graniastosłupa'],
    ['Kto wykonał piosenkę "Bad to the Bone"?', 'George Thorogood', 'Kurt Cobain', 'Fryderyk Chopin', 'Curt Kombajn'],
    ['Jak nazywała się klacz Józefa Piłsudskiego?', 'Kasztanka', 'Marszałka', 'Twilight Sparkle', 'Maria Piłsudska'],
    ['Skąd pochodził Józef Stalin?', 'z Gruzji', 'z Rosji', 'z Austrii', 'z woj. dolnośląskiego'],
    ['Jak umarła Balladyna?', 'Została porażona piorunem', 'Została otruta', 'Balladyna nadal żyje', 'Za szybko'],
    ['W jakim kierunku uczy się voxelbugged?', 'Technik Programista', 'Projektant słabych quizów', 'Żadnym, jest tłumokiem', 'Technik Informatyk'],
    ['Jak nazywał się kanclerz RFNu który wprowadził "Ostpolitik"?', 'Willy Brandt', 'Kurt Georg Kiesinger', 'Henry Kissinger', 'Ostpolitik było w NRD'],
    ['W którym pliku znajdują się pytania i odpowiedzi do quizu?', 'script.js', 'odpowiedzi.js', 'kanyewest.eu/grawideo.html', 'menel.vbs.png.docx.js.exe'],
    ['Jak nazywał się mistrz z filmu Magnaci i Czarodzieje?', 'Stachu Jones', 'Gandalf', 'Mateusz Trablin', 'Pateusz Treplin']
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
            document.getElementById("gra").innerHTML = "<a id='wygrana'>Kongratulejszyns! Wygrałeś/łaś/łoś i udowodniłeś/łaś/łoś że nie jesteś/taś/toś debilem/lam/lom!</a> <br> <button onclick='location.reload();'>Zagraj ponownie?</button>";
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
