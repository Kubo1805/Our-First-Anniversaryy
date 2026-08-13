/* =====================================================
   ELEMENTS
===================================================== */

const heartLock = document.getElementById("heartLock");
const heartRays = document.getElementById("heartRays");


/* =====================================================
   CREATE ONE RING OF HEARTS
===================================================== */

function createHeartRayWave(isBig = false) {

    const numberOfHearts = isBig ? 14 : 8;

    for (let i = 0; i < numberOfHearts; i++) {

        const heart = document.createElement("span");

        heart.classList.add("ray-heart");

        heart.textContent = "♡";


        /* ---------------------------------------------
           Position around the lock
        --------------------------------------------- */

        const angle =
            (Math.PI * 2 / numberOfHearts) * i;


        const baseDistance =
            isBig
                ? 180
                : 145;


        const distance =
            baseDistance +
            Math.random() * 70;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        /* ---------------------------------------------
           CSS variables
        --------------------------------------------- */

        heart.style.setProperty(
            "--x",
            `${x}px`
        );


        heart.style.setProperty(
            "--y",
            `${y}px`
        );


        heart.style.setProperty(
            "--size",
            `${10 + Math.random() * 12}px`
        );


        heart.style.animationDelay =
            `${Math.random() * 0.25}s`;


        /* ---------------------------------------------
           Add to page
        --------------------------------------------- */

        heartRays.appendChild(heart);


        /* ---------------------------------------------
           Clean up
        --------------------------------------------- */

        setTimeout(() => {

            heart.remove();

        }, 3500);

    }

}


/* =====================================================
   INITIAL HEART WAVE
===================================================== */

createHeartRayWave();


/* =====================================================
   REPEATING HEART WAVES
===================================================== */

setInterval(() => {

    createHeartRayWave();

}, 3500);


/* =====================================================
   LOCK TAP
===================================================== */

heartLock.addEventListener("click", () => {

    /* ---------------------------------------------
       Restart animation
    --------------------------------------------- */

    heartLock.classList.remove("unlocking");


    /*
       Force browser to recognize that the animation
       was removed before adding it again.
    */

    void heartLock.offsetWidth;


    heartLock.classList.add("unlocking");


    /* ---------------------------------------------
       Bigger burst of hearts
    --------------------------------------------- */

    createHeartRayWave(true);


    /* ---------------------------------------------
       Remove animation class afterward
    --------------------------------------------- */

    setTimeout(() => {

        heartLock.classList.remove("unlocking");

    }, 700);

});
