"use strict"



const circles = document.querySelectorAll(".circle");
const speaker = document.querySelector(".color-profile");

circles.forEach(circle => {

    circle.addEventListener("click", () => {

        // Fjerner aktiv styling
        circles.forEach(c => {
            c.classList.remove("active");
        });

        // Tilføjer aktiv styling
        circle.classList.add("active");


        // Skifter billede
        if(circle.classList.contains("sage")){

            speaker.src = "body.img/sage-green-profile-pic.svg";

        }

        else if(circle.classList.contains("lavender")){

            speaker.src = "body.img/lavender-profile-pic.svg";

        }

        else if(circle.classList.contains("taupe")){

            speaker.src = "body.img/warm-taupe-profile-pic.svg";

        }

        else{

            speaker.src = "body.img/dusty-rose-profile-pic.svg";

        }

    });

});