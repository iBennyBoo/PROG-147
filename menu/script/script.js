/*
let gingerbeer, lemonade, rootbeer, cola, fanta, water, rubin, pbj, grilledcheese,
italianbeef, meatballsub, wings, fries, tatertots, rings, sticks, vanilla, chocolate,
snowcone, tres, cinnamon = 0;
*/
function summary(){
    //name
    let name = document.getElementById("name").value;
    //drinks
    let gingerbeer = parseInt(document.getElementById("gingerbeer").value);
    let lemonade = parseInt(document.getElementById("lemonade").value);
    let rootbeer = parseInt(document.getElementById("rootbeer").value);
    let cola = parseInt(document.getElementById("cola").value);
    let fanta = parseInt(document.getElementById("fanta").value);
    let water = parseInt(document.getElementById("water").value);
    //sandwiches
    let rubin = parseInt(document.getElementById("rubin").value);
    let pbj = parseInt(document.getElementById("pbj").value);
    let grilledcheese = parseInt(document.getElementById("grilledcheese").value);
    let italianbeef = parseInt(document.getElementById("italianbeef").value);
    let meatballsub = parseInt(document.getElementById("meatballsub").value);

    //sides
    let wings = parseInt(document.getElementById("wings").value);
    let fries = parseInt(document.getElementById("fries").value);
    let tatertots = parseInt(document.getElementById("tatertots").value);
    let rings = parseInt(document.getElementById("rings").value);
    let sticks = parseInt(document.getElementById("sticks").value);

    //desserts
    let vanilla = parseInt(document.getElementById("vanilla").value);
    let chocolate = parseInt(document.getElementById("chocolate").value);
    let snowcone = parseInt(document.getElementById("snowcone").value);
    let tres = parseInt(document.getElementById("tres").value);
    let cinnamon = parseInt(document.getElementById("cinnamon").value);

    //calling calculate function to do math and to check for unanswered boxes
    let cost = parseFloat((gingerbeer * 2) + (lemonade * 1.5) + (rootbeer * 2) + (cola * 2) + (fanta * 2) + (water * 1) + (rubin * 6.99)
    + (pbj * 4.99) + (grilledcheese * 4.99) + (italianbeef * 8.5) + (meatballsub * 8.5) + (wings * 4.99) + (fries * 3) + (tatertots * 3)
    + (rings * 3.99) + (sticks * 4.99) + (vanilla * 5) + (chocolate * 5)  + (snowcone * 4) + (tres * 7) + (cinnamon * 6));
    
    //let cost = parseDouble(calculate(gingerbeer, lemonade, rootbeer, cola, fanta, water, rubin, pbj,
        //grilledcheese, italianbeef, meatballsub, wings, fries, tatertots, rings, sticks, vanilla,
        //chocolate, snowcone, tres, cinnamon));
    

    //summary text
    document.getElementById("summary").innerHTML = (name + ", your total is $" + cost);

} 

function calculate(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u){
    if (a == null){
        a = 0;
    } else{
        a = a * 2;
    }
    if (b == null){
        b = 0;
    } else{
        b = b * 1.5;
    }
    if (c == null){
        c = 0;
    } else{
        c = c * 2;
    }
    if (d == null){
        d = 0;
    } else{
        d = d * 2;
    }
    if (e == null){
        e = 0;
    } else{
        e = e * 2;
    }
    if (f == null){
        f = 0;
    }
    if (g == null){
        g = 0;
    } else{
        g = g * 6.99;
    }
    if (h == null){
        h = 0;
    } else{
        h = h * 4.99;
    }
    if (i == null){
        i = 0;
    } else{
        i = i * 4.99;
    }
    if (j == null){
        j = 0;
    } else{
        j = j * 8.50;
    }
    if (k == null){
        k = 0;
    } else{
        k = k * 8.50;
    }
    if (l == null){
        l = 0;
    } else{
        l = l * 4.99;
    }
    if (m == null){
        m = 0;
    } else{
        m = m * 3;
    }
    if (n == null){
        n = 0;
    } else{
        n = n * 3;
    }
    if (o == null){
        o = 0;
    } else{
        o = o * 3.99;
    }
    if (p == null){
        p = 0;
    } else{
        p = p * 4.99;
    }
    if (q == null){
        q = 0;
    } else{
        q = q * 5;
    }
    if (r == null){
        r = 0;
    } else{
        r = r * 5;
    }
    if (s == null){
        s = 0;
    } else{
        s = s * 4;
    }
    if (t == null){
        t = 0;
    } else{
        t = t * 7;
    }
    if (u == null){
        u = 0;
    } else{
        u = u * 6;
    }
    return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + 
    p + q + r + s + t + u;
}

function start(){
    //name
    document.getElementById("name").innerHTML = "";

    //drinks
    document.getElementById("gingerbeer").innerHTML = "";
    document.getElementById("lemonade").innerHTML = "";
    document.getElementById("rootbeer").innerHTML = "";
    document.getElementById("cola").innerHTML = "";
    document.getElementById("fanta").innerHTML = "";
    document.getElementById("water").innerHTML = "";

    //sandwiches
    document.getElementById("rubin").innerHTML = "";
    document.getElementById("pbj").innerHTML = "";
    document.getElementById("grilledcheese").innerHTML = "";
    document.getElementById("italianbeef").innerHTML = "";
    document.getElementById("meatballsub").innerHTML = "";

    //sides
    document.getElementById("wings").innerHTML = "";
    document.getElementById("fries").innerHTML = "";
    document.getElementById("tatertots").innerHTML = "";
    document.getElementById("rings").innerHTML = "";
    document.getElementById("sticks").innerHTML = "";

    //desserts
    document.getElementById("vanilla").innerHTML = "";
    document.getElementById("chocolate").innerHTML = "";
    document.getElementById("snowcone").innerHTML = "";
    document.getElementById("tres").innerHTML = "";
    document.getElementById("cinnamon").innerHTML = "";
}