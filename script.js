const heartRays = document.getElementById("heartRays");
const heartLock = document.getElementById("heartLock");


// ==========================================
// CREATE A WAVE OF LITTLE HEARTS
// ==========================================

function createHeartRay() {

    const numberOfHearts = 8;

    for (let i = 0; i < numberOfHearts; i++) {

        const heart = document.createElement("span");

        heart.classList.add("ray-heart");

        heart.textContent = "♡";

        const angle =
            (Math.PI * 2 / numberOfHearts) * i;

        const distance = 140 + Math.random() * 60;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.style.setProperty("--x", `${x}px`);
        heart.style.setProperty("--y", `${y}px`);

        heart.style.animationDelay =
            `${Math.random() * 0.5}s`;

        heartRays.appendChild(heart);


        // Remove after animation

        setTimeout(() => {
            heart.remove();
        }, 3500);
    }
}


// ==========================================
// STARTING HEART RAYS
// ==========================================

createHeartRay();

setInterval(() => {
    createHeartRay();
}, 3500);


// ==========================================
// CLICK / TAP LOCK
// ==========================================

heartLock.addEventListener("click", () => {

    console.log("LOCK CLICKED ♡");

    heartLock.style.animation = "none";

    heartLock.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(0.92)"
            },
            {
                transform: "scale(1.08)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );

    createHeartRay();
});
