"use strict"



const circles = document.querySelectorAll(".circle");
const speaker = document.querySelector(".color-profile");

const title = document.querySelector("#color-description-headline");
const description = document.querySelector("#color-description");

const ctaButton = document.querySelector(".purchase-button");
const ctaIcon =document.querySelector("#shopping-icon");

circles.forEach(circle => {

    circle.addEventListener("click", () => {


        circles.forEach(c => {
            c.classList.remove("active");
        });


        circle.classList.add("active");



        if(circle.classList.contains("sage")){

            speaker.src = "body.img/sage-green-profile-pic.svg";

        title.textContent = "SAGE GREEN";
        title.style.color = "var(--sage-green)";
        ctaButton.style.color = "var(--sage-green)";
        ctaButton.style.border = "2px solid var(--sage-green)";
        ctaIcon.src = "body.img/shopping-bag-icon-sage.svg";

        description.innerHTML =
        `Nice, natural and <br>
        minimalistic beauty.`;

        }

        else if(circle.classList.contains("lavender")){

            speaker.src = "body.img/lavender-profile-pic.svg";

            title.textContent = "LAVENDER";
            title.style.color = "var(--lavender)";
            ctaButton.style.color = "var(--lavender)";
            ctaButton.style.border = "2px solid var(--lavender)";
            ctaIcon.src = "body.img/shopping-bag-icon-lavender.svg";

        description.innerHTML =
        `Elegant, soft and <br>
        pure vibes.`;

        }

        else if(circle.classList.contains("taupe")){

            speaker.src = "body.img/warm-taupe-profile-pic.svg";


             title.textContent = "WARM TAUPE";
            title.style.color = "var(--taupe)";
            ctaButton.style.color = "var(--taupe)";
            ctaButton.style.border = "2px solid var(--taupe)";
            ctaIcon.src = "body.img/shopping-bag-icon-taupe.svg";

        description.innerHTML =
        `Grounded, warm and <br>
        timeless design.`;
        }

        else{

            speaker.src = "body.img/dusty-rose-profile-pic.svg";
            title.style.color = "var(--dusty-rose)";
            ctaButton.style.color = "var(--dusty-rose)";
            ctaButton.style.border = "2px solid var(--dusty-rose)";
            ctaIcon.src = "body.img/shopping-bag-icon-dusty.svg";


        description.innerHTML =
            `Warm, cozy and <br>
            perfect for the sunset.`;

        }

    });

});