document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //input
  let y1 = +document.getElementById("y1-in").value;
  let y2 = +document.getElementById("y2-in").value;
  let x1 = +document.getElementById("x1-in").value;
  let x2 = +document.getElementById("x2-in").value;

  let slope = (y2 - y1) / (x2 - x1);
  let msg = `Slope = ${slope}`;
  //output
  document.getElementById("output").innerHTML = slope;
}
