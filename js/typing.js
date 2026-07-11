/* ==============================
   TYPING EFFECT
================================ */


const words = [

    "Product Support Engineer",

    "SaaS Specialist",

    "Data Analyst",

    "AI Enthusiast",

    "Python Learner"

];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;



const typingElement =
document.getElementById("typing");





function typeEffect(){


    if(!typingElement)
        return;



    const currentWord =
    words[wordIndex];



    if(!deleting){


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex >
        currentWord.length){


            deleting = true;


            setTimeout(typeEffect,1200);

            return;

        }


    }
    else{


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex--
        );


        if(charIndex===0){


            deleting=false;


            wordIndex =
            (wordIndex+1)
            %
            words.length;


        }


    }



    setTimeout(typeEffect,100);

}



typeEffect();
