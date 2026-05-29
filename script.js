"use strict"



const circles = document.querySelectorAll(".circle");
const speaker = document.querySelector(".color-profile");

const title = document.querySelector("#color-description-headline");
const description = document.querySelector("#color-description");

const ctaButton = document.querySelector(".purchase-button");
const ctaIcon =document.querySelector("#shopping-icon");

function changeSpeakerImage(newImage){
    speaker.classList.add("fade-out");

    setTimeout(() => {
        speaker.src = newImage;
        speaker.classList.remove("fade-out");
    }, 320);
}

circles.forEach(circle => {

    circle.addEventListener("click", () => {


        circles.forEach(c => {
            c.classList.remove("active");
        });


        circle.classList.add("active");



        if(circle.classList.contains("sage")){

        changeSpeakerImage("body.img/sage-green-profile-pic.svg");

        title.textContent = "SAGE GREEN";
        title.style.color = "var(--sage-green)";
        ctaButton.style.color = "var(--sage-green)";
        ctaButton.style.border = "2px solid var(--sage-green)";
        ctaIcon.src = "icons.img/shopping-bag-icon-sage.svg";

        description.innerHTML =
        `Nice, natural and <br>
        minimalistic beauty.`;

        }

        else if(circle.classList.contains("lavender")){

            changeSpeakerImage("body.img/lavender-profile-pic.svg");

            title.textContent = "LAVENDER";
            title.style.color = "var(--lavender)";
            ctaButton.style.color = "var(--lavender)";
            ctaButton.style.border = "2px solid var(--lavender)";
            ctaIcon.src = "icons.img/shopping-bag-icon-lavender.svg";

        description.innerHTML =
        `Elegant, soft and <br>
        pure vibes.`;

        }

        else if(circle.classList.contains("taupe")){

            changeSpeakerImage("body.img/warm-taupe-profile-pic.svg");


             title.textContent = "WARM TAUPE";
            title.style.color = "var(--taupe)";
            ctaButton.style.color = "var(--taupe)";
            ctaButton.style.border = "2px solid var(--taupe)";
            ctaIcon.src = "icons.img/shopping-bag-icon-taupe.svg";

        description.innerHTML =
        `Grounded, warm and <br>
        timeless design.`;
        }

        else{

            changeSpeakerImage("body.img/dusty-rose-profile-pic.svg");
            title.textContent = "DUSTY ROSE";
            title.style.color = "var(--dusty-rose)";
            ctaButton.style.color = "var(--dusty-rose)";
            ctaButton.style.border = "2px solid var(--dusty-rose)";
            ctaIcon.src = "icons.img/shopping-bag-icon-dusty.svg";


        description.innerHTML =
            `Warm, cozy and <br>
            perfect for the sunset.`;

        }

    });

});




const featureItems = document.querySelectorAll(".feature-item");

const underline = document.querySelector("#underline");


// her bygges animationen til ikonerne - til feature-sections 
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

else{

entry.target.classList.remove("show");
}

});

},
{
threshold:0.3
});


featureItems.forEach(item=>{

observer.observe(item);

});


// Delen med aktivering af features og ændring af tekst under ikonerne

featureItems.forEach((item,index)=>{

item.addEventListener("click",()=>{


// Hvis man klikker på det aktive ikon igen
if(item.classList.contains("active-feature")){

item.classList.remove("active-feature");

underline.textContent =
"Everything you need, in one speaker.";

return;

}
// fjern aktiv-funktion
featureItems.forEach(feature=>{

feature.classList.remove("active-feature");

});


// gør valgt ikon aktiv endnu en gang
item.classList.add("active-feature");



if(index===0){

underline.innerHTML=
`
<span class="feature-title-js">
RICH SOUND
</span>

Powerful sound in a compact size.
`;

}


if(index===1){

underline.innerHTML=
`
<span class="feature-title-js">
LASTING BATTERY
</span>

Up to 20 hours of playtime.
`;

}


if(index===2){

underline.innerHTML=
`
<span class="feature-title-js">
SPLASH PROOF
</span>

Made for anytime, anywhere.
`;

}


if(index===3){

underline.innerHTML=
`
<span class="feature-title-js">
AMBIENT LIGHT
</span>

Set the mood with beautiful lighting.
`;

}

if(index===4){

underline.innerHTML=
`
<span class="feature-title-js">
BLUETOOTH 5.3
</span>

Smooth connection everytime.
`;

}


if(index===5){

underline.innerHTML=
`
<span class="feature-title-js">
LUMINA PARTY
</span>

Connect with multiple friends.
`;

}

});

});



const foldButton = document.querySelector(".fold-out");
const closeButton = document.querySelector(".close-specs");
const specsPanel = document.querySelector(".specs-panel");


foldButton.addEventListener("click", () => {
    specsPanel.classList.toggle("open");
    foldButton.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
    
    specsPanel.classList.remove("open");
    foldButton.classList.remove("open");

});




// Scroller section til insta-billederne.
const scroller = document.querySelector(".insta-scroller");


const cards = [...scroller.children];


cards.forEach(card => {


   //* cloneNode til at lave kopier af cards - så den scroller "uendeligt
   // og appendChild sætter det ind i slutningen"


   scroller.appendChild(card.cloneNode(true));
});


const firstClone = scroller.children[cards.length];


const distance = firstClone.offsetLeft;


// Denne snakker sammen med css'en
scroller.style.setProperty("--scroll-distance", `${distance}px`);

// insta-section slutter



// Review slider
const reviewTrack = document.querySelector(".review-track");

if(reviewTrack){

    const reviewCards = [...reviewTrack.children];

    reviewCards.forEach(card => {
        reviewTrack.appendChild(card.cloneNode(true));
    });

    const firstReviewClone = reviewTrack.children[reviewCards.length];

    const reviewDistance = firstReviewClone.offsetLeft;

    reviewTrack.style.setProperty(
        "--scroll-distance",
        `${reviewDistance}px`
    );

}
// Trustpilot slider slutter