/* =====================================================
   ELEMENTS
===================================================== */

const heartLock =
    document.getElementById("heartLock");

const heartRays =
    document.getElementById("heartRays");

const floatingPhotos =
    document.getElementById("floatingPhotos");

const letterPage =
    document.getElementById("letterPage");

const lockScreen =
    document.querySelector(".lock-screen");

const continueButton =
    document.getElementById("continueButton");

const surprisePage =
    document.getElementById("surprisePage");

const hintPage =
    document.getElementById("hintPage");

const hintBackButton =
    document.getElementById("hintBackButton");

const giftOne =
    document.getElementById("giftOne");

const giftTwo =
    document.getElementById("giftTwo");

const hintOne =
    document.getElementById("hintOne");

const hintTwo =
    document.getElementById("hintTwo");

const videoPage =
    document.getElementById("videoPage");

const youtubeVideo =
    document.getElementById("youtubeVideo");

const videoTitle =
    document.getElementById("videoTitle");

const videoBackButton =
    document.getElementById("videoBackButton");


/* =====================================================
   FLOATING PHOTO SYSTEM
===================================================== */

const photoSources = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg"
];


function createFloatingPhoto() {

    /* =========================================
       PHOTO CONTAINER
    ========================================== */

    const photo =
        document.createElement("div");

    photo.classList.add("photo");


    /* =========================================
       SVG HEART
    ========================================== */

    const svg =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

    svg.setAttribute(
        "viewBox",
        "0 0 100 100"
    );

    svg.classList.add(
        "heart-photo"
    );


    /* =========================================
       UNIQUE HEART CLIP
    ========================================== */

    const defs =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "defs"
        );


    const clipPath =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "clipPath"
        );


    const clipId =
        `heartClip-${Date.now()}-${Math.random()}`;


    clipPath.setAttribute(
        "id",
        clipId
    );


    const heartPath =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );


    heartPath.setAttribute(
        "d",
        `
        M50 88
        C44 82 10 60 10 32
        C10 17 20 8 33 8
        C41 8 47 12 50 19
        C53 12 59 8 67 8
        C80 8 90 17 90 32
        C90 60 56 82 50 88
        Z
        `
    );


    clipPath.appendChild(
        heartPath
    );

    defs.appendChild(
        clipPath
    );


    /* =========================================
       PHOTO IMAGE
    ========================================== */

    const image =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "image"
        );


    const source =
        photoSources[
            Math.floor(
                Math.random() *
                photoSources.length
            )
        ];


    image.setAttribute(
        "href",
        source
    );

    image.setAttribute(
        "width",
        "100"
    );

    image.setAttribute(
        "height",
        "100"
    );

    image.setAttribute(
        "preserveAspectRatio",
        "xMidYMid slice"
    );

    image.setAttribute(
        "clip-path",
        `url(#${clipId})`
    );


    /* =========================================
       PINK HEART BORDER
    ========================================== */

    const borderHeart =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );


    borderHeart.setAttribute(
        "d",
        `
        M50 88
        C44 82 10 60 10 32
        C10 17 20 8 33 8
        C41 8 47 12 50 19
        C53 12 59 8 67 8
        C80 8 90 17 90 32
        C90 60 56 82 50 88
        Z
        `
    );


    borderHeart.setAttribute(
        "fill",
        "#ff9fc8"
    );


    borderHeart.setAttribute(
        "stroke",
        "#f47eaa"
    );


    borderHeart.setAttribute(
        "stroke-width",
        "3.5"
    );


    /* =========================================
       BUILD SVG
    ========================================== */

    svg.appendChild(
        defs
    );

    svg.appendChild(
        borderHeart
    );

    svg.appendChild(
        image
    );

    photo.appendChild(
        svg
    );

    floatingPhotos.appendChild(
        photo
    );


    /* =========================================
       RANDOM POSITION
    ========================================== */

    const left =
        Math.random() * 100;


    photo.style.left =
        `${left}%`;


    /* =========================================
       RANDOM SIZE
    ========================================== */

    const size =
        130 +
        Math.random() * 100;


    photo.style.setProperty(
        "--size",
        `${size}px`
    );


    /* =========================================
       RANDOM SPEED
    ========================================== */

    const duration =
        9 +
        Math.random() * 8;


    photo.style.setProperty(
        "--duration",
        `${duration}s`
    );


    /* =========================================
       RANDOM ROTATION
    ========================================== */

    const rotation =
        -12 +
        Math.random() * 24;


    photo.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );


    /* =========================================
       RANDOM SIDEWAYS DRIFT
    ========================================== */

    const drift =
        -80 +
        Math.random() * 160;


    photo.style.setProperty(
        "--drift",
        `${drift}px`
    );


    /* =========================================
       REMOVE WHEN FINISHED
    ========================================== */

    setTimeout(() => {

        photo.remove();

    }, (duration + 0.5) * 1000);

}


/* =====================================================
   START PHOTO STREAM
===================================================== */

function startPhotoStream() {

    /* Initial batch */

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            createFloatingPhoto();

        }, i * 1800);

    }


    /* Continuous stream */

    setInterval(() => {

        createFloatingPhoto();

    }, 2200);

}


startPhotoStream();


/* =====================================================
   HEART RAYS
===================================================== */

function createHeartRayWave(
    isBig = false
) {

    const numberOfHearts =
        isBig
            ? 14
            : 8;


    for (let i = 0; i < numberOfHearts; i++) {

        const heart =
            document.createElement("span");

        heart.classList.add(
            "ray-heart"
        );

        heart.textContent = "♡";


        /* -----------------------------------------
           Direction
        ----------------------------------------- */

        const angle =
            (Math.PI * 2 / numberOfHearts) *
            i;


        const baseDistance =
            isBig
                ? 180
                : 145;


        const distance =
            baseDistance +
            Math.random() * 70;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        /* -----------------------------------------
           CSS Variables
        ----------------------------------------- */

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


        /* -----------------------------------------
           Add heart
        ----------------------------------------- */

        heartRays.appendChild(
            heart
        );


        /* -----------------------------------------
           Cleanup
        ----------------------------------------- */

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
   LOCK -> LETTER
===================================================== */

let lockHasOpened = false;


heartLock.addEventListener(
    "click",
    () => {

        /* -----------------------------------------
           Prevent repeated taps
        ----------------------------------------- */

        if (lockHasOpened) {
            return;
        }


        lockHasOpened = true;


        /* -----------------------------------------
           Open lock
        ----------------------------------------- */

        heartLock.classList.add(
            "unlocking"
        );


        /* -----------------------------------------
           Big heart burst
        ----------------------------------------- */

        createHeartRayWave(
            true
        );


        /* -----------------------------------------
           Fade Page 1
           + show Page 2
        ----------------------------------------- */

        setTimeout(() => {

            lockScreen.classList.add(
                "transitioning"
            );


            letterPage.classList.add(
                "visible"
            );

        }, 650);

    }
);


/* =====================================================
   LETTER -> SURPRISE PAGE
===================================================== */

continueButton.addEventListener(
    "click",
    (event) => {

        event.preventDefault();


        letterPage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            surprisePage.classList.add(
                "visible"
            );

        }, 350);

    }
);


/* =====================================================
   GIFT / HINT / VIDEO NAVIGATION
===================================================== */

let currentGift = 1;


/* =====================================================
   GIFT 1 -> HINT PAGE
===================================================== */

giftOne.addEventListener(
    "click",
    () => {

        currentGift = 1;


        surprisePage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            hintPage.classList.add(
                "visible"
            );

        }, 300);

    }
);


/* =====================================================
   GIFT 2 -> HINT PAGE
===================================================== */

giftTwo.addEventListener(
    "click",
    () => {

        currentGift = 2;


        surprisePage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            hintPage.classList.add(
                "visible"
            );

        }, 300);

    }
);


/* =====================================================
   HINT PAGE -> SURPRISE PAGE
===================================================== */

hintBackButton.addEventListener(
    "click",
    () => {

        hintPage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            surprisePage.classList.add(
                "visible"
            );

        }, 300);

    }
);


/* =====================================================
   VIDEO DATA
===================================================== */

const videoData = {

    gift1: {
        hint1: "x6R9nIiWXbQ",
        hint2: "Qwrto3XBwRY"
    },

    gift2: {
        hint1: "AsiWL5qVb5U",
        hint2: "zA012OwAQdc"
    }

};


/* =====================================================
   OPEN HINT VIDEO
===================================================== */

function openHintVideo(
    hintNumber
) {

    const gift =
        currentGift === 1
            ? videoData.gift1
            : videoData.gift2;


    const videoId =
        hintNumber === 1
            ? gift.hint1
            : gift.hint2;


    /* Change title */

    videoTitle.textContent =
        "A little hint for you ♡";


    /* Load YouTube video */

    youtubeVideo.src =
        `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;


    /* Hide hint page */

    hintPage.classList.remove(
        "visible"
    );


    /* Show video page */

    setTimeout(() => {

        videoPage.classList.add(
            "visible"
        );

    }, 300);

}


/* =====================================================
   HINT 1 -> VIDEO
===================================================== */

hintOne.addEventListener(
    "click",
    () => {

        openHintVideo(1);

    }
);


/* =====================================================
   HINT 2 -> VIDEO
===================================================== */

hintTwo.addEventListener(
    "click",
    () => {

        openHintVideo(2);

    }
);


/* =====================================================
   VIDEO -> HINT PAGE
===================================================== */

videoBackButton.addEventListener(
    "click",
    () => {

        /* Stop video */

        youtubeVideo.src = "";


        /* Hide video */

        videoPage.classList.remove(
            "visible"
        );


        /* Return to hints */

        setTimeout(() => {

            hintPage.classList.add(
                "visible"
            );

        }, 300);

    }
);
