function solve() {
  let text = document.getElementById("input").value;

  let ouput = document.getElementById("output");

  let arr = text.split(".").filter(Boolean);

  let result = [];

  for (let i = 0; i < arr.length; i += 3) {
    let sb = '';

    for (let j = 0; j < 3 && ((i + j) < arr.length); j++) {
      sb += arr[i + j];
    }
    result.push(sb);
    sb = '';
    
  }

  for (const p of result) {
    ouput.innerHTML += `<p>${p}</p>`
  }


}