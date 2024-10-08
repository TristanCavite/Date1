const container = document.getElementById("container");
const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
    const containerRect = container.getBoundingClientRect();
    btnNo.style.position = "absolute";
    btnNo.style.left = `${getRandomNumber(0, containerRect.width - btnNo.offsetWidth)}px`;
    btnNo.style.top = `${getRandomNumber(0, containerRect.height - btnNo.offsetHeight)}px`;
});

btnYes.addEventListener("click", () => {
    window.location.href = "mailto:your-tristan.cavite@gmail.com?subject=Date Request&body=I would love to go on a date!";
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    btnNo.classList.add("hide");
});

document.querySelector(".btn-no").addEventListener("click", function() {
    alert("Maybe next time!");
});
