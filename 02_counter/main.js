const num = document.getElementById("result");

let cnt = 0;

function plus (number = 1) {
    cnt+= number;
    num.innerHTML = cnt;
}

//  변수형
// const plus = (number = 1) => {
//     cnt+= number;
//     num.innerHTML = cnt;
// }