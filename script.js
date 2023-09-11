/* function compchoice(){
    const arr = ["Rock","paper","scissor"]
    const rnd = Math.floor(Math.random() * 3);
    const sel = arr[rnd]
    return sel
}
// console.log(compchoice())


function fun(c){

    if (c == "Rock"){
        const str = "its a tie";
        const dv = document.createElement("p");
        dv.textContent = str
        document.body.appendChild(dv)
    }
    else if(c == "scissor"){
        const str2 = "u lose";
        const dv2 = document.createElement("p");
        dv2.textContent = str2
        document.body.appendChild(dv2)
    }
    else if(c == "paper"){
        const str2 = "u won";
        const dv2 = document.createElement("p");
        dv2.textContent = str2
        document.body.appendChild(dv2)
    }
}

const c = compchoice();


function funn(p){

    if (c == "paper"){
        const str = "its a tie";
        const dv = document.createElement("p");
        dv.textContent = str
        document.body.appendChild(dv)
    }
    else if(c == "scissor"){
        const str2 = "u won";
        const dv2 = document.createElement("p");
        dv2.textContent = str2
        document.body.appendChild(dv2)
    }
    else if(c == "paper"){
        const str2 = "u lose";
        const dv2 = document.createElement("p");
        dv2.textContent = str2
        document.body.appendChild(dv2)
    }
}

const p = compchoice();

*/

function calculate(a,b,c){
    if (b == "+"){
        return a+c
    }
    if (b == "-"){
        return a-c
    }
}

for(i=0;i<3;i++)
{
    let a = document.getElementById("dis.value")
    let b = document.getElementById("dis.value")
    let c = document.getElementById("dis.value")
}
console.log(calculate(a,b,c))