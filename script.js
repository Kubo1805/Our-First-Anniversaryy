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

const hintThree =
    document.getElementById("hintThree");

const videoPage =
    document.getElementById("videoPage");

const youtubeVideo =
    document.getElementById("youtubeVideo");

const videoTitle =
    document.getElementById("videoTitle");

const videoBackButton =
    document.getElementById("videoBackButton");

const sunnyPage =
    document.getElementById("sunnyPage");

const sunnyBackButton =
    document.getElementById("sunnyBackButton");

/* =====================================================
   AUDIO ELEMENTS
===================================================== */

const audioToggle =
    document.getElementById("audioToggle");

const audioIcon =
    document.getElementById("audioIcon");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const clickSound =
    document.getElementById("clickSound");


/* =====================================================
   AUDIO STATE
===================================================== */

let musicMuted = false;


/* Initial audio settings */

backgroundMusic.volume = 0.45;
clickSound.volume = 0.55;


function updateAudioIcon() {

    if (musicMuted) {

        audioIcon.src =
            "images/SPEAKER MUTED.png";

        audioToggle.setAttribute(
            "aria-label",
            "Turn music on"
        );

    } else {

        audioIcon.src =
            "images/SPEAKER UNMUTED.png";

        audioToggle.setAttribute(
            "aria-label",
            "Mute music"
        );

    }

}


function startMusic() {

    if (musicMuted) {
        return;
    }

    backgroundMusic
        .play()
        .catch(() => {

            /* Browser may still refuse playback.
               The next user interaction will retry. */

        });

}


function playClickSound() {

    clickSound.currentTime = 0;

    clickSound
        .play()
        .catch(() => {

            /* Ignore playback errors quietly. */

        });

}


/* Start visually muted */

updateAudioIcon();

    let gift2Hint1Seen = false;
    let gift2Hint2Seen = false;




/* =====================================================
   MUSIC TOGGLE
===================================================== */

audioToggle.addEventListener(
    "click",
    (event) => {

        event.preventDefault();
        event.stopPropagation();

        musicMuted = !musicMuted;

        if (musicMuted) {

            backgroundMusic.pause();

        } else {

            backgroundMusic
                .play()
                .catch(() => {

                    /* Retry on the next interaction. */

                });

        }

        updateAudioIcon();

    }
);


/* =====================================================
   GLOBAL BUTTON CLICK SOUND
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }

        if (button === audioToggle) {
            return;
        }

        playClickSound();

    }
);


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

    const photo =
        document.createElement("div");

    photo.classList.add("photo");


    /* -----------------------------------------
       SVG
    ----------------------------------------- */

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


    /* -----------------------------------------
       Clip path
    ----------------------------------------- */

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


    /* -----------------------------------------
       Photo
    ----------------------------------------- */

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


    /* -----------------------------------------
       Pink border
    ----------------------------------------- */

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


    /* -----------------------------------------
       Build
    ----------------------------------------- */

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


    /* -----------------------------------------
       Random values
    ----------------------------------------- */

    const left =
        Math.random() * 100;

    photo.style.left =
        `${left}%`;


    const size =
        130 +
        Math.random() * 100;

    photo.style.setProperty(
        "--size",
        `${size}px`
    );


    const duration =
        9 +
        Math.random() * 8;

    photo.style.setProperty(
        "--duration",
        `${duration}s`
    );


    const rotation =
        -12 +
        Math.random() * 24;

    photo.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );


    const drift =
        -80 +
        Math.random() * 160;

    photo.style.setProperty(
        "--drift",
        `${drift}px`
    );


    /* -----------------------------------------
       Cleanup
    ----------------------------------------- */

    setTimeout(() => {

        photo.remove();

    }, (duration + 0.5) * 1000);

}


/* =====================================================
   START PHOTO STREAM
===================================================== */

function startPhotoStream() {

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        setTimeout(() => {

            createFloatingPhoto();

        }, i * 1800);

    }


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


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        const heart =
            document.createElement("span");

        heart.classList.add(
            "ray-heart"
        );

        heart.textContent =
            "♡";


        const angle =
            (
                Math.PI * 2 /
                numberOfHearts
            ) * i;


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


        heartRays.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 3500);

    }

}


/* Initial wave */

createHeartRayWave();


/* Repeating waves */

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

        if (lockHasOpened) {
            return;
        }


        lockHasOpened = true;


        /* Start background music on the first user gesture */

        startMusic();


        heartLock.classList.add(
            "unlocking"
        );


        createHeartRayWave(
            true
        );


setTimeout(() => {

    lockScreen.classList.add(
        "transitioning"
    );

    letterPage.classList.add(
        "visible"
    );


    /* Start the letter writing */

    setTimeout(() => {

        typeLetter();

    }, 700);

}, 650);

       }
);

/* =====================================================
   LETTER -> SURPRISE
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
   GIFT / HINT SYSTEM
===================================================== */

let currentGift = 1;


/* =====================================================
   GIFT 1 -> HINT PAGE
===================================================== */

giftOne.addEventListener(
    "click",
    () => {

        currentGift = 1;


        /* Hide HINT 3 */

        hintThree.style.display =
            "none";


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

giftTwo.addEventListener("click", () => {

    currentGift = 2;

    /* Reset the secret Hint 3 */

    gift2Hint1Seen = false;
    gift2Hint2Seen = false;

    hintThree.style.display = "none";

    surprisePage.classList.remove("visible");

    setTimeout(() => {

        hintPage.classList.add("visible");

    }, 300);

});


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

        hint1:
            "x6R9nIiWXbQ",

        hint2:
            "Qwrto3XBwRY"

    },


    gift2: {

        hint1:
            "AsiWL5qVb5U",

        hint2:
            "zA012OwAQdc"

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


    videoTitle.textContent =
        "A little hint for my princess ♡";


    youtubeVideo.src =
        `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;


    hintPage.classList.remove(
        "visible"
    );


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

        if (currentGift === 2) {

            gift2Hint1Seen = true;

        }

        openHintVideo(1);

    }
);


/* =====================================================
   HINT 2 -> VIDEO
===================================================== */

hintTwo.addEventListener(
    "click",
    () => {

        if (currentGift === 2) {

            gift2Hint2Seen = true;

        }

        openHintVideo(2);

    }
);


/* =====================================================
   VIDEO -> HINT PAGE
===================================================== */

videoBackButton.addEventListener(
    "click",
    () => {

        youtubeVideo.src = "";

        videoPage.classList.remove(
            "visible"
        );

        setTimeout(() => {

            /* Show secret Hint 3 only after
               both Gift 2 hints were opened */

            if (
                currentGift === 2 &&
                gift2Hint1Seen &&
                gift2Hint2Seen
            ) {

                hintThree.style.display = "block";

            }

            hintPage.classList.add(
                "visible"
            );

        }, 300);

    }
);


/* =====================================================
   HINT 3 -> SUNNY BOY
===================================================== */

hintThree.addEventListener(
    "click",
    () => {

        hintPage.classList.remove(
            "visible"
        );


        setTimeout(() => {

            sunnyPage.classList.add(
                "visible"
            );

        }, 300);

    }
);


/* =====================================================
   SUNNY BOY -> HINT PAGE
===================================================== */

sunnyBackButton.addEventListener(
    "click",
    () => {

        sunnyPage.classList.remove(
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
   LETTER TYPEWRITER
===================================================== */

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


async function typeElement(
    element,
    speed = 22
) {

    const originalText =
        element.textContent;

    element.textContent = "";

    element.classList.add(
        "letter-visible"
    );


    for (
        let i = 0;
        i < originalText.length;
        i++
    ) {

        element.textContent +=
            originalText[i];

        await wait(speed);

    }

}


async function typeLetter() {

    /* Opening */

    const opening =
        document.querySelector(
            ".letter-opening"
        );


    const firstLine =
        document.getElementById(
            "letterFirstLine"
        );


    const paragraphs =
        document.querySelectorAll(
            "#letterRest p"
        );


    const signoff =
        document.getElementById(
            "letterSignoff"
        );


    /* -----------------------------------------
       Opening
    ----------------------------------------- */

    opening.classList.remove(
        "letter-visible"
    );

    await typeElement(
        opening,
        45
    );


    await wait(500);


    /* -----------------------------------------
       First handwritten line
    ----------------------------------------- */

    await typeElement(
        firstLine,
        35
    );


    await wait(600);


    /* -----------------------------------------
       Main letter
    ----------------------------------------- */

    for (
        const paragraph of paragraphs
    ) {

        await typeElement(
            paragraph,
            18
        );


        await wait(500);

    }


    /* -----------------------------------------
       Signature
    ----------------------------------------- */

    await wait(350);


    signoff.classList.add(
        "letter-visible"
    );

}
