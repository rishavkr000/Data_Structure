arr = [1, 2, 3, 4, 6, 8];

let se = 1;
let found = false;

for (var i = 0; i < arr.length; i++) {
  if (se == arr[i]) {
    found = true;
    var index = i
  }
}
if (found == true) {
  console.log(`Search element ${se} is found on index ${index}`);
}else{
    console.log(`Element ${se} not found`)
}


