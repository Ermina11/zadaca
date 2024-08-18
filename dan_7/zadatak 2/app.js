/*jlo varijable*/

let btn1 = document.getElementById("button1");
let tx1 = document.getElementById("text1");

let jloImage = document.getElementById("jlo-sml");
let jlo1 = "/media/jlo1.jpg";
let jlo2 = "/media/jlo2.jpg";

let btn2 = document.getElementById("button2");
let tx2 = document.getElementById("text2");

/*ronaldo varijable*/

let ronImage = document.getElementById("ron-sml");
let ron1 = "/media/ron1.jpg";
let ron2 = "/media/ron2.jpg";

let btn3 = document.getElementById("button3");
let tx3 = document.getElementById("text3");

/*ozzy varijable*/

let ozzyImage = document.getElementById("ozzy-sml");
let ozzy1 = "/media/ozzy1.jpg";
let ozzy2 = "/media/ozzy2.jpg";

let btn4 = document.getElementById("button4");
let tx4 = document.getElementById("text4");

/*brad pitt varijable*/

let bpImage = document.getElementById("bp-sml");
let bp1 = "/media/bp1.jpg";
let bp2 = "/media/bp2.jpg";

let btn5 = document.getElementById("button5");
let tx5 = document.getElementById("text5");

/*johnny depp varijable*/

let jdImage = document.getElementById("jd-sml");
let jd1 = "/media/jd1.jpg";
let jd2 = "/media/jd2.jpg";

let btn6 = document.getElementById("button6");
let tx6 = document.getElementById("text6");

/*john cena varijable*/

let jcImage = document.getElementById("jc-sml");
let jc1 = "/media/jc1.jpg";
let jc2 = "/media/jc2.jpg";

/*funkcija za button*/

function show(button, image, image1src, image2src, text) {
    if (button.innerText === "Moje ime je...") {
        button.innerText = "Kad sam bio dijete...";
        text.style.display = "block";
        image.src = image2src;
    } else {
        button.innerText = "Moje ime je...";
        image.src = image1src
        text.style.display = "none";

    }

}