var animalPopulation = 0;
var allAnimals = [];

$(document).ready(function(){
    $("#creationbutton").click(function(){
        createAnimal($("#animalName").val());
    });
    $("#feedingbutton").click(function(){
        feedAnimals($("#foodToFeed").val());
    });
    $("#deleteButton").click(function(){
        deleteAnimal($("#delete").val());
    });
});

function start(){
    var nemo = new Clownfish("Nemo");
    var sebastian = new Crab("Sebastian");
    var inky = new Squid("Inky");
    var steve = new Stingray("Steve");
    var flipper = new Dolphin("Flipper");
    allAnimals.push(nemo, sebastian, inky, steve, flipper);
    console.log(allAnimals);
    var newId = "";
    for(var i = 0; i < allAnimals.length; i++){
        newId = allAnimals[i].name;
        $("#animalsListTitle").append('<div class="' + newId + '">' + allAnimals[i].name + " the " + allAnimals[i].constructor.name + "</div>");
    }
}

function createAnimal(name) {
    if(name == ""){
        alert("Please enter a name for your animal");
    }else{
        var animal = "";
        switch ($("#animalType").val()) {
            case "Clownfish":
                animal = new Clownfish(name);
                break;
            case "Crab":
                animal = new Crab(name);
                break;
            case "Squid":
                animal = new Squid(name);
                break;
            case "Stingray":
                animal = new Stingray(name);
                break;
            case "Dolphin":
                animal = new Dolphin(name);
                break;
        }
        $("#feedTitle").html("<div>" + animal.name + " the " + animal.constructor.name + " was created!</div>");
        listAnimals(animal);
    }
}

function deleteAnimal(name){
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i].name == name){
            $("#feedTitle").append("<div>" + name + " the " + allAnimals[i].constructor.name + " was deleted!</div>");
            allAnimals.splice(i, 1);
        }
    }
    $("." + name).hide();
}

function feedAnimals(food){
    $("#feedTitle").html("");
    for(var i = 0; i < allAnimals.length;i++){
        allAnimals[i].eat(food);
    }
}

function listAnimals(animal){
    allAnimals.push(animal);
    console.log(allAnimals);
    var newId = "";
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i] == animal){
            newId = allAnimals[i].name;
            $("#animalsListTitle").append('<div class="' + newId + '">' + allAnimals[i].name + " the " + allAnimals[i].constructor.name + "</div>");
        }
    }
}

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        $("#feedTitle").append("<div>" + this.name + " sleeps and snuggles</div>");
    }

    eat(food) {
        $("#feedTitle").append("<div>" + this.name + " eats " + food + "</div>");
        (food === this.favoriteFood) ? $("#feedTitle").append("<div>YUM!!! " + this.name + " wants more " + food + "</div>") : this.sleep();
    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Clownfish extends Animal {
    constructor(name) {
        super (name, "Leftovers");
    }
}

class Crab extends Animal {
    constructor(name) {
        super (name, "Algae");
    }
    sleep() {
        $("#feedTitle").append("<div>" + this.name + " sleeps during the day</div>");
    }
}

class Squid extends Animal {
    constructor(name){
        super(name, "Shrimp");
    }

    sleep(){
        $("#feedTitle").append("<div>" + this.name + " sleeps in a coral reef</div>");
    }
}

class Stingray extends Animal {
    constructor(name){
        super (name, "Clams");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("Clams") : $("#feedTitle").append("<div>" + this.name + " eats " + food + "</div>") + $("#feedTitle").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

class Dolphin extends Animal {
    constructor(name){
        super(name, "Herring");
    }

    sleep(){
       $("#feedTitle").append("<div>" + this.name + " never sleeps</div>");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("Herring") + this.sleep() : $("#feedTitle").append("<div>" + this.name + " eats " + food + "</div>") + $("#feedTitle").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

// class Zookeeper {
//     constructor(name){
//         this.name = name;
//     }
//
//     feedAnimals(animals, food){
//         $("#feedTitle").append(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " animals");
//         for(var i = 0; i < animals.length; i++){
//             animals[i].eat(food);
//         }
//     }
// }




