class Food{
    constructor(name, group, calories, flavor){
        this.name = name;
        this.group = group;
        this.calories = calories;
        this.flavor = flavor;
    }

    foodStats(){
        return `${this.name} is in the ${this.group} group, has 
        ${this.calories} calories and tastes ${this.name}.`
    }
}

const chicken = new Food("Chicken", "Protein", 231, "Savory");
const chocolate = new Food("Chocolate", "Fruit", 406, "Sweet");
const banana = new Food("Banana", "Fruit", 105, "Sweet");
const asparagus = new Food("Asparagus", "Vegetable", 3 ,"Tender");
console.log(chicken);
console.log(chicken.foodStats());

document.getElementById("chicken").innerHTML = chicken.foodStats();
document.getElementById("chocolate").innerHTML = chocolate.foodStats();
document.getElementById("banana").innerHTML = banana.foodStats();
document.getElementById("asparagus").innerHTML = asparagus.foodStats();