//Generate the 16x16 grid by inserting divs
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 255; i++){
        const div = document.createElement("div")
        fragment.appendChild(div);
    }

    container.appendChild(fragment);
});

/*
const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("hover", () => {    }); 
});
*/