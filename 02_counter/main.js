const num = document.getElementsByTagName("h1")[0];
const pButton = document.getElementById("pb");

let cnt = 0;

// pButton.addEventListener("click",() => {
//     cnt++;
//     num.innerHTML = cnt;
// });
pButton.onclick = () => {
    cnt++;
    num.innerHTML = cnt;
};