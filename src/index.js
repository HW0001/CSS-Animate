import "./styles.css";

let btn = document.getElementById("btn");
btn.onclick = function () {
  this.classList.add("btncss");
  let btntime = setTimeout(() => {
    this.classList.remove("btncss");
    btntime = null;
  }, 1000);
};
