module.exports = function toReadable (number) {
  let n = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    // 0: "zero",
    ten : 10 ,
    eleven:11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };


  let arN = number.toString().split("");
  let aste = "";


  if (arN.length === 3){
  for (let i in n){
    if (Number(arN[0]) === n[i]){
      aste += i;
      aste += " hundred";
    }
  }

  if (arN[1] === 0){
    for (let i in n){
      if (Number(arN[2]) === n[i]){
        aste += i;
      }
    }
  }else{
    let figa = Number(arN[1])*10;
    if (figa < 20){
      figa += Number(arN[2]);
      for (let i in n){
        if (figa === n[i]){
          aste += " ";
          aste += i;
        }
        
      } 
    }else{
      for (let i in n){
        if (figa === n[i]){
          aste += " ";
          aste += i;
          aste += " ";
        }
      }
      
      let h = Number(arN[2]);
      for (let i in n){
        if (h === n[i]){
          aste += i;
        }
      } 
    }
  }


}else if (arN.length === 2){
  if (arN[0] === 0){
    for (let i in n){
      if (Number(arN[1]) === n[i]){
        aste += i;
      }
    }
  }else{
    let figa = Number(arN[0])*10;
    if (figa < 20){
      figa += Number(arN[1]);
      for (let i in n){
        if (figa === n[i]){
          aste += " ";
          aste += i;
        }
        
      } 
    }else{
      for (let i in n){
        if (figa === n[i]){
          aste += " ";
          aste += i;
          aste += " ";
        }
      }
      
      let h = Number(arN[1]);
      for (let i in n){
        if (h === n[i]){
          aste += i;
        }
      } 
    }
  }
  if (aste[0] === " "){
    aste = aste.trimStart();
  }
}else if (arN.length === 1 && arN[0] == "0"){
  return "zero";
}else if (arN.length === 1){
  for (let i in n){
    if (Number(arN[0]) === n[i]){
      aste += i;
}
  }
} 



  return aste.trimEnd();
}


// let biba = 1;
//   arN = arN.reverse();
//   // for (num of sNumber) {
//   //   console.log(n[Number(num)]);
//   // }
//   let res = [];
//   let newArr = [];
//   for (let num of arN) {
//     num *= biba;
//     newArr.unshift(num);
//     biba *= 10;
//   }

//   for (let numba of newArr) {
//     if (numba == 1000) {
//       res.push("one thousand");
//     } else if (numba > 1000) {
//       numba = Math.trunc(numba / 1000);
//       res.push(n[numba] + " thousand");
//     } else if (numba == 100) {
//       res.push("one hundred");
//     } else if (numba > 100 && numba < 1000) {
//       numba = Math.trunc(numba / 100);
//       res.push(n[numba] + " hundred");
//     } else {
//       res.push(n[numba]);
//     }
//   }