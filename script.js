let btn = document.querySelector("#btn");
let para = document.querySelector("#p1");

btn.addEventListener("click" , ()=>{

    console.log("click btn");
    para.textContent = "This is after texts";
})