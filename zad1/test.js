function Meal(json) {
    var self = this;
    self.publisher = json.publisher;
    self.id = json.recipe_id;
    self.title = json.title;
    self.social_rank = json.social_rank;
    self.image = json.image_url;
    self.url = json.f2f_url;

    self.toTableRow = function () {
        return '<tr><td>'
            + self.id
            + '</td><td>'
            + self.publisher
            + '</td><td>'
            + '<a href=' + self.url + '>' + self.title + '</a>'
            + '</td><td>'
            + self.social_rank
            + '</td><td>'
            + makeImage(self.image)
            + '</td></tr>'
    }

    function makeImage(url) {
        return '<img class="img-thumbnail" width="304" height="236" src= ' + url + ">";
    }
}
function ListOfMeals() {
    var meals = [];
    var self = this;

    self.addMeal = function (json) {
        meals.push(new Meal(json));
    }

    self.toTable = function () {
        var table = '<table class="table table-striped table-bordered">';
        table += generateTableHeader();
        for (var i = 0; i < meals.length; i++) {
            table += meals[i].toTableRow();
        }
        table += '</table>';
        return table;
    }

    var generateTableHeader = function () {
        return '<tr>'
            + '<th>ID</th>'
            + '<th>Publisher</th>'
            + '<th>Title</th>'
            + '<th>Rank</th>'
            + '<th>Picture</th>'
            + '</tr>';
    }

    self.clear = function () {
        meals = [];
    }
}

function doJob(data) {
    console.log(data.recipes.length);
    var listOfMeals = new ListOfMeals();
    for (var i = 0; i < data.recipes.length; i++){
        listOfMeals.addMeal(data.recipes[i]);
         if (i == data.recipes.length) {
            return false;
        }
    }
    var context = document.getElementById('table');
    context.innerHTML = listOfMeals.toTable();
}


function init() {
    var data = JSON.parse(text);
    doJob(data);
}









