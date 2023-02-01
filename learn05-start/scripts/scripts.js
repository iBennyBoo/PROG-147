const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket"
};

const dog2 = {
    heading: "Just Chilling",
    image: "images/gold-dog.jpg",
    caption: "Soaking up the rays",
    altTag: "Gold dog laying down"
};

const dog3 = {
    heading: "Finishing touch",
    image: "images/snow-dog.jpg",
    caption: "I will name the snowman George",
    altTag: "Dog making a snowman"
};

const dog4 = {
    heading: "Boop",
    image: "images/white-dogs.jpg",
    caption: "Just two dogs boopin noses",
    altTag: "Two white dogs"
};

function chooseDog(dog){
    if (dog == 1){
        loadMe(dog1, 1)
    } else if (dog == 2){
        loadMe(dog2, 2)
    } else if(dog == 3){
        loadMe(dog3, 3)
    } else if (dog == 4){
        loadMe(dog4, 4)
    }
}

function loadMe(dog, dogNum){
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
    document.getElementById("button" + dogNum).style.visibility = "hidden";
}