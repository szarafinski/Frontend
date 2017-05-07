///////////////// Przypomnienie ////////////

function Person(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var p1 = Person('Jan', 'Kowalski'); // tworzy funkcje ktora przekazuje parametry do innej funkcji, zmienne z THIS sa globalne
var p2 = Person('Janina', 'Kowalska'); // analogicznie jak wyzej
var p3 = new Person('Kazimierz', 'Nowak'); // tworzy nowy obiekt typu Person z polami KAZIMIERZ oraz Nowak

// 1. THIS globalnie wiąże do WINDOW albo GLOBAL
// 2. THIS jako metoda - wiąże do obiektu w którym się znajduje
// 3. THIS jako konstruktor - wiąże do nowo powstałęgo obiektu (specjalna metoda jako konstruktor)
// 4. THIS w CALL/ APPLY - wiąże do obiektu który jest przesyłany

console.log(' ///////////// tworzenie klasy bez SELF z ukrytymi zmiennymi/polami w ECMA 5 ////////////')

var Osoba = (function () { // wzorzec na klase w ECMA 5
    var age = 23;  // zmienna prywatna w klasie
    function Osoba(imie, nazwisko) { // konstruktor
        this.imie = imie; // pole
        this.nazwisko = nazwisko;
    };

    Osoba.prototype.sayHello = function () { // metoda
        return "i'm " + this.imie + ' of ' + age;
    };
    return Osoba;
})();

var p4 = new Osoba('Bolek', 'Nowak');
console.log(p4.sayHello());
var p5 = new Osoba('Lolek', 'Nowak');
console.log(p5.sayHello());
p5.age = 18; // nie zmienia wartosci pola prywatnego
console.log(p5.sayHello());



