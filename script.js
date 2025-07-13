const face = document.getElementById("dogFace");
const pupils = document.querySelectorAll(".pupil");
const bark = document.getElementById("barkSound");

document.addEventListener("mousemove", (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 2;
    const y = (e.clientY / h - 0.5) * 2;
    face.style.transform = `rotateY(${x * 15}deg) rotateX(${y * -15}deg)`;

    // Pupils follow cursor
    pupils.forEach(pupil => {
        const eye = pupil.parentElement.getBoundingClientRect();
        const eyeX = eye.left + eye.width / 2;
        const eyeY = eye.top + eye.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const moveX = Math.cos(angle) * 10;
        const moveY = Math.sin(angle) * 10;
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

document.addEventListener("click", () => {
    face.classList.add("animate");
    bark.currentTime = 0;
    bark.play();
    setTimeout(() => face.classList.remove("animate"), 400);
});