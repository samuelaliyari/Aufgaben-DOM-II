// ================================================
//                      DOM II Level-2_7
// ================================================
console.log(" %c Level-2_7", "color: lightblue; font-size: 12px;");



const btn = document.body.querySelectorAll("button");
const outputContainer = document.body.querySelector(".umwickeln");
let counter = 0
btn[0].addEventListener("click", () => {
    const rechtEck = document.createElement("p");
    rechtEck.textContent = counter;
    if (counter === 0 || counter % 10 === 0) {
        rechtEck.classList.add("weiss");
        counter++
    } else {
        rechtEck.classList.add("rechteck");
        counter++
    }
    outputContainer.append(rechtEck)
})


// ================================================
//                      DOM II Level-2_11
// ================================================
console.log(" %c Level-2_11", "color: lightblue; font-size: 12px;");

const container = document.body.querySelector("#twoEleven");
console.log(container)

btn[1].addEventListener("click", () => {
    container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255 )}, ${Math.floor(Math.random() * 255)})`
})
