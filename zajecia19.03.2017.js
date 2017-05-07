// w JAVASCRIPT zasieg zmiennych jest funkcyjny, a nie blokowy
// dzisiejsze zajecia dotycza ECMA 6.0 

// ponizszy przyklad zwraca 7 poniewaz var jest zdefiniowane w czesci globalnej, niezaleznie czy jest IF czy nie. If też jest w części globalnej
// if nie jest funkcją. jest komenda.
var zm = 5;
if (true) {
    var zm = 7;
}
console.log(zm); // zwraca 7
// deklaracja LET pozwala ograniczenie widocznosci zmiennej do najblizsego bloku 
var zm = 5;
if (true) {
    let zm = 7;
}
console.log(zm); // zwraca 5

// w ECMA 6 mozna definiowac stale poprzez CONST np
const stala = 6;
//stala = 7; // wyskoczy blad "TypeError: Assignment to constant variable"

console.log("///////////// KONSTRUKTOR  w ECMA 5 ////////");
var Person = (function () {
    function Person(imie) {
        this.imie = imie;
    }
    Person.prototype.sayHello = function () {
        return 'Hello' + this.imie;
    };
    return Person;
})();

var jan = new Person("Jan");
console.log(jan.sayHello());
/// przypomnienie o co chodziło w THIS przy obiektach
function kwaKwa() {
    console.log("Kwa Kwa" + this.imie);
}
var kaczkaDziwaczka = {
    imie: "kaczka"
}
kwaKwa.call(kaczkaDziwaczka, null);
//// koniec przypomnienia

console.log("///////////// KONSTRUKTOR ECMA 6 ///////////");
class PersonDwa {
    constructor(imie) {
        this.imie = imie;
    }
    sayHello() {
        return "I'm " + this.imie;
    }
}

let monika = new PersonDwa('Monika'); // musi byc NEW kiedy obiekt jest zdefinowany jako klasa
console.log(monika.sayHello());

let family = {
    persons: ['Bolek', 'Lolek', 'Tola'],
    lastName: 'Kovalsky',
    sayHello: function () {
        var self = this; // (2) rozwiazuje problem barku globalnej deklaracji, przekazuje parametr do zagłębionej funkcji
        return this.persons.map(function (person) {
            return person + " " + self.lastName; // było: this.lastname // (1) THIS globalny i nie ma takiej wlasciwosci globalnie
        });
    },
    // przyklad z FAT ARROW
    sayHelloD: function () {
        return this.persons.map((person) => person + " " + this.lastName);
        // nie trzeba nawiasow klamrowych jak jest jedna linia
        // nie trzeba return bo jest jedna linia kodu   
        // nie trzeba deklarowac SELF poniewaz  jest to funkcja anonimowa i juz rozpoznaje ze THIS z obiektu nadrzednego         
    }
}

console.log(family.sayHello());
console.log(family.sayHelloD());

// funkcje typu FAT ARROW mozna przypisac do zmiennej:
let someFun = (name) => "I'm " + name;
console.log(someFun('Zosia'));


console.log("//////////// FUNKCJE HTML w ECMA 6 /////////////");
var person = {imie: 'Jan'}; // jest o obiekt person
var templateJeden= '<div>Hello ' + person.imie + '</div>'; // problem powstaje kiedy bedzie trzeba zrobi bardzo duzo konkatenacji (znakow plus)
var template = ` 
<div>
    Hello ${person.imie}
</div>`; // znak pod TYLDĄ. powoduje napisanie kodu jako czysty tekst z mozliwoscia odwolania sie do zmiennych

console.log(template);


var osoba = {
    imie: 'Janusz',
    nazwisko: "Kowalski",
    rokUrodzenia: 1987,
    sayHello: ()=> "Czesc " + imie
};
// DESTRUCTURING - wyciaganie zmiennych z obiektow
var {imie, rokUrodzenia: rok, sayHello: funkcja} = osoba;
// sprawdzenie destrukturyzacji
console.log(`${imie} urodzony w ${rok}`);
console.log(`${funkcja()}`);
console.log(imie + ' urodzil sie w ' +  rok);
console.log(funkcja());

/// analogicznie jest z funkcjami
function oblicz () {
    return [1,2,3]; // pomysl by funkcja zwracala kilka wartosci
};

var [srednia, mediana] = oblicz(); // przypisuje wartoci z talicy do zmiennych
console.log(srednia, mediana);


console.log("//////////// funkcje REST i SPREAD /////////////");
function funs(){
   // args = [].slice().arguments; - korzystało sie kiedyś by zrobic FOREACH na argumentach
   // args.forEach(); 
   // arguments - pseudo tablica zawierajca argumenty. nie da sie wywolac FOREACH na tym
}
// REST operator
function printArgs(prefix,...args){
    args.forEach(args => console.log(prefix + ':' + args));
};
printArgs('liczba', 'raz', 'dwa', 'trzy');
// SPREAD operator
var tab = [1,2,3];
function add(x, y, z){
    return x + y + z;
}
console.log(add(tab)); // nie dziala poprawnie poniewaz funkcja wymaga trzech argumenow, a dostaje jeden w postaci tablicy z trzema wartosciami
console.log(add.apply(null,tab)); // stosuje kazdy element tablicy jako oddzielny argumentach
console.log(add(...tab)); // trzy kropki (oeprator SPREAD), dzieki temu stosuje kazdy element tablicy jako oddzielny argumentach





