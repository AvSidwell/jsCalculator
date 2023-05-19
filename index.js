let reveal = document.getElementById('view');

let input = (number)=>{
    reveal.value+=number;
}

let calculate = ()=> {
    reveal.value=eval(reveal.value)

}


let clearout = ()=>{
    let clearout= document.getElementById("view");
    if (clearout.value !="") {
        clearout.value = "";
    }
}

let clearDel = ()=>{
    let clearDel = document.getElementById('view');
    if (clearDel.onselectionchange());
} 