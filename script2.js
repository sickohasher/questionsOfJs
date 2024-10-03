let btn =  document.querySelector("#btn");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");


btn.addEventListener("click" , ()=>{

   imgf = img1.src;

   imgs = img2.src;

   img1.src= imgs;

   img2.src = imgf;

   
})