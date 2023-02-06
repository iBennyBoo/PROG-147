const show1 = {
    name: `Chowder`,
    description: `Young Chowder dreams of becoming a chef someday. He works as an apprentice to famous chef Mung Daal who is always offering Chowder advice on love and cooking. Panini also works in the kitchen and thinks Chowder is her boyfriend, while Shnitzel is a rock monster who doesn't think much of Chowder and his smelly best friend Kimchi the stinky cloud.`,
    episodes: `49 episodes`,
    runtime: `November 2, 2007 -> August 7, 2010`,
    image: "images/chowder.jpg"

};

const show2 = {
    name: `Uncle Grandpa`,
    description: `Uncle Grandpa is a magical uncle and grandpa to everyone, and he travels around the world in an RV on a mission to help people in any way they may need it.`,
    episodes: `153 episodes`,
    runtime: `September 2, 2013 -> June 30, 2017`,
    image: "images/unclegrandpa.jpg"

};

const show3 = {
    name: `Regular Show`,
    description: `Mordecai, a blue jay, and Rigby, a raccoon, are groundskeepers at a park. But these best friends are lazy and don't let their jobs interfere with their ability to have fun. While Mordecai tries to be responsible and do a good job, he's frequently led astray by his immature pal, who is totally without fear or shame, and has no boundaries at all. The friends often end up having to pay for their irresponsible actions as they usually get into more trouble than they anticipated.`,
    episodes: `261 episodes`,
    runtime: `September 6, 2010 -> January 16, 2017`,
    image: "images/regularshow.jpg"

};

const show4 = {
    name: `The Fairly OddParents`,
    description: `Timmy Turner, a 10-year-old boy, has had it with his babysitter! He summons his fairy godparents who have the power to grant him wishes. Some of the wishes are really helpful, others don't work out so well. Timmy's godparents Wanda and Cosmo have ideas of their own and always lead Timmy on interesting adventures.`,
    episodes: `172 episodes`,
    runtime: `March 30, 2001 -> July 26, 2017`,
    image: "images/oddparents.jpg"

};

const show5 = {
    name: `T.U.F.F. Puppy`,
    description: `Dudley Puppy joins the Turbo Undercover Fighting Force (T.U.F.F.) to help defeat the evil agents of the Diabolical Order Of Mayhem (D.O.O.M.), run by the wicked Verminious Snaptrap. With the help of the Chief, Kitty Katswell, and the gadget guru Keswick, Dudley does his best to fight his natural puppy urges and keep Petropolis safe.`,
    episodes: `65 episodes`,
    runtime: `October 2, 2010 -> April 4, 2015`,
    image: "images/tuffpuppy.jpg"

};

function display(){
    let html = `<h2>${show1.name}</h2>` + `<h3>Description</h3>``<p>${show1.description}</p>` + 
    `<p>${show1.episodes}</p>` + `<p>${show1.runtime}</p>` + `<img src= ${show1.image}>`;
    let html2 = `<h2>${show2.name}</h2>` + `<h3>${show2.description}</h3>` + 
    `<p>${show2.episodes}</p>` + `<p>${show2.runtime}</p>` + `<img src= ${show2.image}>`;
    let html3 = `<h2>${show3.name}</h2>` + `<h3>${show3.description}</h3>` + 
    `<p>${show3.episodes}</p>` + `<p>${show3.runtime}</p>` + `<img src= ${show3.image}>`;
    let html4 = `<h2>${show4.name}</h2>` + `<h3>${show4.description}</h3>` + 
    `<p>${show4.episodes}</p>` + `<p>${show4.runtime}</p>` + `<img src= ${show4.image}>`;
    let html5 = `<h2>${show5.name}</h2>` + `<h3>${show5.description}</h3>` + 
    `<p>${show5.episodes}</p>` + `<p>${show5.runtime}</p>` + `<img src= ${show5.image}>`;
    document.getElementById("ob1").innerHTML = html;
    document.getElementById("ob2").innerHTML = html2;
    document.getElementById("ob3").innerHTML = html3;
    document.getElementById("ob4").innerHTML = html4;
    document.getElementById("ob5").innerHTML = html5;
}

function display2() {
    let html = `<h2>${show1.name}</h2>` +
        `<p>${show1.description}</p>` + `<img src = ${show1.image}>` +
        `<h3>Episodes and Runtime</h3>` +
        `<p>${show1.episodes}<p>` +
        `<p>${show1.runtime}</p>`;
    document.getElementById('ob1').innerHTML = html;

    let html2 = `<h2>${show2.name}</h2>` +
        `<p>${show2.description}</p>` + `<img src = ${show2.image}>` +
        `<h3>Episodes and Runtime</h3>` +
        `<p>${show2.episodes}<p>` +
        `<p>${show2.runtime}</p>`;
    document.getElementById('ob2').innerHTML = html2;

    let html3 = `<h2>${show3.name}</h2>` +
        `<p>${show3.description}</p>` + `<img src = ${show3.image}>` +
        `<h3>Episodes and Runtime</h3>` +
        `<p>${show3.episodes}<p>` +
        `<p>${show3.runtime}</p>`;
    document.getElementById('ob3').innerHTML = html3;

    let html4 = `<h2>${show4.name}</h2>` +
        `<p>${show4.description}</p>` + `<img src = ${show4.image}>` +
        `<h3>Episodes and Runtime</h3>` +
        `<p>${show4.episodes}<p>` +
        `<p>${show4.runtime}</p>`;
    document.getElementById('ob4').innerHTML = html4;

    let html5 = `<h2>${show5.name}</h2>` +
        `<p>${show5.description}</p>` + `<img src = ${show5.image}>` +
        `<h3>Episodes and Runtime</h3>` +
        `<p>${show5.episodes}<p>` +
        `<p>${show5.runtime}</p>`;
    document.getElementById('ob5').innerHTML = html5;
}