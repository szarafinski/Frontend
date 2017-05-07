var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function (x) {
    return q.val();
})
    .switchMap(function (x) {
        return searchWikipedia(x);
    })
    .do(function (x) {
        console.log(x);
    })
    .subscribe(function (x) {
        let innerHtml;
        console.log(q.val().length );
        if (q.val().length > 0){
        innerHtml = new TableGenerator(x).toTable();
    } else {
        innerHtml = `<h1> Brak tekstu w polu wyszukiwania </h1>`;
    }
        $('#results').html(innerHtml);
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}

class TableGenerator {
    constructor(data) {
        this.request = data[0];
        this.name = data[1];
        this.description = data[2];
        this.nameUrl = data[3];
    }
    toTable() {
        let table = `<h1>Wyniki dla zapytania: ${this.request} </h1>
        <table style="border-collapse: collapse">
        <tr>
            <th style="border: 1px solid black">Nazwa</th>
            <th style="border: 1px solid black">Opis</th>
        </tr>`;
        // for (let index = 1; index < this.name.length; index++) {
        //     table += this.toTableRow(index);
        // }
        this.name.forEach((element, index) => table+= this.toTableRow(index));
        table += `</table>`;
        return table;
    }
    toTableRow(index) {
        return `
        <tr>
            <td style="border: 1px solid black"> <a href= ${this.nameUrl[index]}> ${this.name[index]} </a> </td>
            <td style="border: 1px solid black">  ${this.description[index]} </td>
        </tr>`;
    }
}