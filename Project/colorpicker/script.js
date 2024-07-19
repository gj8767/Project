let button = document.querySelector("button");

button.addEventListener("click", function() {
    let randomcolor = getRandomColor();
    let box = document.querySelector(".box");
    let h1 = document.querySelector("h1");
    h1.innerText = randomcolor;
    box.style.backgroundColor = randomcolor;
});


function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 256);

    let color = `rgba(${red}, ${green}, ${blue}, ${a})`;
    return color;
}
