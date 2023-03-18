//list of characters and their links to images
const characters = ["pictures/ace.png", "pictures/akainu.png", "pictures/aokiji.png", "pictures/Apoo.png",
"pictures/ashura.png", "pictures/beckman.png", "pictures/bigmom.png", "pictures/blackbeard.png", "pictures/blueno.png",
"pictures/boa.png", "pictures/bonclay.png", "pictures/brook.png", "pictures/buggy.png", "pictures/burgess.png",
"pictures/caesar.png", "pictures/catviper.png", "pictures/chopper.png", "pictures/cracker.png", "pictures/crocodile.png",
"pictures/denjiro.png", "pictures/devon.png", "pictures/doflamingo.png", "pictures/dogstorm.png", "pictures/dragon.png",
"pictures/drake.png", "pictures/franky.png", "pictures/fujitora.png", "pictures/garp.png", "pictures/hawkins.png",
"pictures/Izou.png", "pictures/jack.png", "pictures/jinbe.png", "pictures/jozu.png", "pictures/katakuri.png",
"pictures/kin'emon.png", "pictures/king.png", "pictures/kizaru.png", "pictures/koala.png", "pictures/koby.png",
"pictures/kuma.png", "pictures/lucci.png", "pictures/luckyroux.png", "pictures/luffy.png", "pictures/marco.png",
"pictures/mihawk.png", "pictures/moria.png", "pictures/nami.png", "pictures/oden.png", "pictures/oven.png",
"pictures/perospero.png", "pictures/queen.png", "pictures/raizo.png", "pictures/rayleigh.png", "pictures/robin.png",
"pictures/roger.png", "pictures/sabo.png", "pictures/sanji.png", "pictures/sanjuan.png", "pictures/sengoku.png",
"pictures/shanks.png", "pictures/shiryu.png", "pictures/smoker.png", "pictures/smoothie.png", "pictures/sugar.png",
"pictures/usopp.png", "pictures/vanauger.png", "pictures/whitebeard.png", "pictures/xebec.png", "pictures/yasopp.png",
"pictures/zoro.png"];

const names = ["Ace", "Akainu", "Aokiji", "Apoo", "Ashura", "Benn Beckman", "Big Mom", "Blackbeard", "Blueno",
"Boa Hancock", "Bon Clay", "Brook", "Buggy", "Burgess", "Buggy", "Caesar", "Cat Viper", "Chopper", "Cracker", "Crocodile",
"Denjiro", "Devon", "Doflamingo", "Dogstorm", "Monkey D. Dragon", "X Drake", "Franky", "Fujitora", "Monkey D. Garp", "Basil Hawkins", "Izou",
"Jack", "Jinbe", "Jozu", "Katakuri", "Kin'emon", "King", "Kizaru", "Koala", "Koby", "Kuma", "Rob Lucci",
"Lucky Roux", "Monkey D. Luffy", "Marco", "Mihawk", "Moria", "Nami", "Oden", "Oven", "Perospero", "Queen", "Raizo",
"Rayleigh", "Robin", "Roger", "Sabo", "Sanji", "Sanjuan", "Sengoku", "Shanks", "Shiryu", "Smoker", "Smoothie",
"Sugar", "Usopp", "Van Auger", "Whitebeard", "Rocks D. Xebec", "Yasopp", "Zoro"];

const kaido = {
    name: "Kaido, The Strongest Creature",
    image: "pictures/kaido.png"
};

//setting images at beginning
//setting kadio image and h2
function start(){
    document.getElementById("body").src = `grey.png`;
    document.getElementById("haki").src = "grey.png";
    document.getElementById("devilFruit").src = `grey.png`;
    document.getElementById("combatSkill").src = `grey.png`;
    document.getElementById("strength").src = `grey.png`;
    document.getElementById("durability").src = `grey.png`;
    document.getElementById("speed").src = `grey.png`;
    document.getElementById("iq").src = `grey.png`;

    document.getElementById("kaido").src = kaido.image;
    document.getElementById("h2").innerHTML = `Can You Defeat ${kaido.name}?`;
}

//Shuffles between images before finally landing on one
document.getElementById("button1").addEventListener("click", function(event){
    setTimeout(randomize, 100)
    setTimeout(randomize, 200)
    setTimeout(randomize, 300)
    setTimeout(randomize, 400)
    setTimeout(randomize, 500)
    setTimeout(randomize, 600)
    setTimeout(randomize, 700)
    setTimeout(randomize, 800)
    setTimeout(randomize, 900)
    setTimeout(randomize, 1000)
});

//selects a random image and displays it to appropriate slot in HTML
function randomize(){
    var number = Math.floor(Math.random() * characters.length);
    document.getElementById("body").src = `${characters[number]}`;
    //document.getElementById("p1").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("haki").src = `${characters[number]}`;
    //document.getElementById("p2").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("devilFruit").src = `${characters[number]}`;
    //document.getElementById("p3").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("combatSkill").src = `${characters[number]}`;
    //document.getElementById("p4").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("strength").src = `${characters[number]}`;
    //document.getElementById("p5").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("durability").src = `${characters[number]}`;
    //document.getElementById("p6").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("speed").src = `${characters[number]}`;
    //document.getElementById("p7").innerHTML = `${names[number]}`;

    number = Math.floor(Math.random() * characters.length);
    document.getElementById("iq").src = `${characters[number]}`;
    //document.getElementById("p8").innerHTML = `${names[number]}`;
}