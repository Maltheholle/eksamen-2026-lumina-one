"use strict"



const circles = document.querySelectorAll(".circle");
const speaker = document.querySelector(".color-profile");

const title = document.querySelector("#color-description-headline");
const description = document.querySelector("#color-description");


circles.forEach(circle => {

    circle.addEventListener("click", () => {


        circles.forEach(c => {
            c.classList.remove("active");
        });


        circle.classList.add("active");


        // Skifter billede
        if(circle.classList.contains("sage")){

            speaker.src = "body.img/sage-green-profile-pic.svg";

        title.textContent = "SAGE GREEN";
        title.style.color = "var(--sage-green)";

        description.innerHTML =
        `Nice, natural and <br>
        minimalistic beauty.`;

        }

        else if(circle.classList.contains("lavender")){

            speaker.src = "body.img/lavender-profile-pic.svg";

            title.textContent = "LAVENDER";
            title.style.color = "var(--lavender)";

        description.innerHTML =
        `Elegant, soft and <br>
        pure vibes.`;

        }

        else if(circle.classList.contains("taupe")){

            speaker.src = "body.img/warm-taupe-profile-pic.svg";


             title.textContent = "WARM TAUPE";
            title.style.color = "var(--taupe)";

        description.innerHTML =
        `Grounded, warm and <br>
        timeless design.`;
        }

        else{

            speaker.src = "body.img/dusty-rose-profile-pic.svg";
            title.style.color = "var(--dusty-rose)";

            
        description.innerHTML =
            `Warm, cozy and <br>
            perfect for the sunset.`;

        }

    });

});