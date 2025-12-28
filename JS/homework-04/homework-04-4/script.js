function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function test() {
  let result = "";

  for (let i = 1; i <= 20; i++) {
    if (isEven(i)) {
      result += i + "\n";
    } else {
      result += i + " ";
    }
  }

  console.log(result);
}

test();