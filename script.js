
let text = document.querySelector(".text");
let input = document.getElementById("input");
let elements = document.querySelectorAll(".div");
let idCounter = 0; 
let btns=document.querySelectorAll(".btn"); 

let cont = 0;
function send(){
    if (input.value.trim() === "") return;

    idCounter++;
    let div = document.createElement("div");
    div.classList.add("div");
    

    let p = document.createElement("p");
    p.textContent = input.value;

    let inputCheck = document.createElement("input");
    inputCheck.type="checkbox";
    inputCheck.name="done";
    inputCheck.id="checkbox-"+idCounter;  

    let btn = document.createElement("button");
    btn.innerHTML="<i class='fa-solid fa-xmark'></i>";
    btn.classList.add("btn");

    div.appendChild(inputCheck);
    div.appendChild(p);
    div.appendChild(btn);
    text.appendChild(div);

    input.value="";

    btn.addEventListener("click",function() {
        div.remove();
    });

    inputCheck.addEventListener("change",function(){
        if(inputCheck.checked)
            p.style.textDecoration="line-through";
        else
            p.style.textDecoration="none";
    })


}


