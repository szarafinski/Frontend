var Meal = (function () {
    function Meal(json) {
        this.publisher = json.publisher;
        this.id = json.recipe_id;
        this.title = json.title;
        this.social_rank = json.social_rank;
        this.image = json.image_url;
        this.url = json.f2f_url;
    };

    Meal.prototype.toTableRow = function () {
        return '<tr><td>'
            + this.id
            + '</td><td>'
            + this.publisher
            + '</td><td>'
            + '<a href=' + this.url + '>' + this.title + '</a>'
            + '</td><td>'
            + this.social_rank
            + '</td><td>'
            + this.makeImage(this.image)
            + '</td></tr>'
    };

    Meal.prototype.makeImage = function (url) {
        return '<img class="img-thumbnail" width="304" height="236" src= ' + url + ">";
    };
    return Meal;
})();

var ListOfMeals = (function () {
    function ListOfMeals() {
        this.meals = [];
    };

    ListOfMeals.prototype.addMeal = function (json) {
        this.meals.push(new Meal(json));
    };

    ListOfMeals.prototype.toTable = function () {
        var self = this;
        self.table = '<table class="table table-striped table-bordered">';
        self.table += this.generateTableHeader();
        for (var i = 0; i < this.meals.length; i++) {
            self.table += this.meals[i].toTableRow();
        }
        self.table += '</table>';
        return self.table;
    };

    ListOfMeals.prototype.generateTableHeader = function () {
        return '<tr>'
            + '<th>ID</th>'
            + '<th>Publisher</th>'
            + '<th>Title</th>'
            + '<th>Rank</th>'
            + '<th>Picture</th>'
            + '</tr>';
    }

    ListOfMeals.prototype.clear = function () {
        this.meals = [];
    };
    return ListOfMeals;
})();

function doJob(data) {
    console.log(data.recipes.length);
    var listOfMeals = new ListOfMeals();
    for (var i = 0; i < data.recipes.length; i++) {
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









