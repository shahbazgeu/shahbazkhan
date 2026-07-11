/* ==============================
   MAIN SCRIPT
================================ */


/*
   Smooth scrolling navigation
*/

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        const target =
            document.querySelector(
                this.getAttribute("href")
            );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





/*
   Current year footer update
*/


const yearElement =
document.querySelector(".footer-bottom p");


if(yearElement){


    const year =
    new Date().getFullYear();


    yearElement.innerHTML =
    `© ${year} Shahbaz Khan. All Rights Reserved.`;


}






/*
   Add loaded class
*/


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
