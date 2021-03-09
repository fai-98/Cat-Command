

function removeLargeSpaces(arr) {
  let y = [];
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "" || arr[i] == "\r") {
      if (flag === true) {
        continue;
      } else {
        y.push(arr[i]);
        flag = true;
      }
    } else {
      y.push(arr[i]);
      flag = false;
    }
  }
  return y;
}

module.exports ={
  fn:removeLargeSpaces,
}
