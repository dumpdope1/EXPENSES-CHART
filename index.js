const tgl = document.getElementById("toggler");
const tglContent = document.getElementById("togglerContent")
const question = document.getElementById("question");
const tgl1 = document.getElementById("toggler1");
const tglContent1 = document.getElementById("togglerContent1")
const question1 = document.getElementById("question1");
const tgl2 = document.getElementById("toggler2");
const tglContent2 = document.getElementById("togglerContent2")
const question2 = document.getElementById("question2");
const tgl3 = document.getElementById("toggler3");
const tglContent3 = document.getElementById("togglerContent3")
const question3 = document.getElementById("question3");
const tgl4 = document.getElementById("toggler4");
const tglContent4 = document.getElementById("togglerContent4")
const question4 = document.getElementById("question4");
const syntax =  tglContent.style;

tgl.onclick =  function () {
    
    if (syntax.visibility === "hidden" && tglContent.style.display === "none") {
        syntax.visibility = "visible";
        syntax.display = "contents";
        question.style.opacity = "1";
        
    }

    else {
        tglContent.style.visibility = "hidden";
        tglContent.style.display = "none";
        question.style.opacity = ".5";
    }
}


tgl1.onclick = function () {
    
    if (tglContent1.style.visibility === "hidden" && tglContent1.style.display === "none") {
        tglContent1.style.visibility = "visible";
        tglContent1.style.display = "contents";
        question1.style.opacity = "1";
        
    }
    else {
        tglContent1.style.visibility = "hidden";
        tglContent1.style.display = "none";
        question1.style.opacity = ".5";
    }

}

tgl2.onclick = function () {
    
    if (tglContent2.style.visibility === "hidden" && tglContent2.style.display === "none") {
        tglContent2.style.visibility = "visible";
        tglContent2.style.display = "contents";
        question2.style.opacity = "1";
    }
    else {
        tglContent2.style.visibility = "hidden";
        tglContent2.style.display = "none";
        question2.style.opacity = ".5";
    }

}

tgl3.onclick = function () {
    
    if (tglContent3.style.visibility === "hidden" && tglContent3.style.display === "none") {
        tglContent3.style.visibility = "visible";
        tglContent3.style.display = "contents";
        question3.style.opacity = "1";
    }
    else {
        tglContent3.style.visibility = "hidden";
        tglContent3.style.display = "none";
        question3.style.opacity = ".5";
    }

}
tgl4.onclick =  function () {
    
    if (tglContent4.style.visibility === "hidden" && tglContent4.style.display === "none") {
        tglContent4.style.visibility = "visible";
        tglContent4.style.display = "contents";
        question4.style.opacity = "1";
    }
    else {
        tglContent4.style.visibility = "hidden";
        tglContent4.style.display = "none";
        question4.style.opacity = ".5";
    }

}