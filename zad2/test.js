class Meal {
    constructor(json) {
        this.publisher = json.publisher;
        this.id = json.recipe_id;
        this.title = json.title;
        this.social_rank = json.social_rank;
        this.image = json.image_url;
        this.url = json.f2f_url;
    }

    toTableRow() {
        return `
        <tr>
            <td>  ${this.id} </td>
            <td> ${this.publisher} </td>
            <td> <a href= ${this.url}> ${this.title} </a> </td>
            <td> ${this.social_rank} </td>
            <td> <img class="img-thumbnail" width="304" height="236" src= ${this.image} > </td>
        </tr>`;
    }
};


class ListOfMeals {
    constructor() {
        this.meals = [];
    }

    addMeal(json) {
        this.meals.push(new Meal(json));
    };

    toTable() {
        let table = `
        <table class="table table-striped table-bordered">
        <tr>
            <th>ID</th>
            <th>Publisher</th>
            <th>Title</th>
            <th>Rank</th>
            <th>Picture</th>
        </tr>`;
        this.meals.forEach((meal) => table += meal.toTableRow());
        table += `</table>`;
        return table;
    };

    
    clear() {
        this.meals = [];
    }
};

function doJob(data) {
    console.log(data.recipes.length);
    let listOfMeals = new ListOfMeals();

    data.recipes.forEach((recipe) => listOfMeals.addMeal(recipe));

    let context = document.getElementById('table');
    context.innerHTML = listOfMeals.toTable();
};


function init() {
    let data = JSON.parse(text);
    doJob(data);
};









